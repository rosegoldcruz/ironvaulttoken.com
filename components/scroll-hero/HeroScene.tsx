"use client";

import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, type MutableRefObject } from "react";
import * as THREE from "three";
import type { Group, Mesh, Object3D } from "three";
import { clone as cloneSkeleton } from "three/examples/jsm/utils/SkeletonUtils.js";

export type HeroHopAnchors = Array<HTMLElement | null>;

export type HeroImpactDriver = {
  /** Scrubs landing `landingIndex` deformation to 0..1 and returns the signed coin squash envelope (+compress / -stretch). */
  set: (landingIndex: number, progress: number) => number;
};

type HeroSceneProps = {
  active: boolean;
  progress: MutableRefObject<number>;
  launchProgress: MutableRefObject<number>;
  anchors: MutableRefObject<HeroHopAnchors>;
  impact: MutableRefObject<HeroImpactDriver | null>;
  invalidateRef: MutableRefObject<(() => void) | null>;
  launchAssetsEnabled: boolean;
  onCoinReady: () => void;
};

// Anchor indexes: 0 = T (Vault), 1 = V, 2 = I, 3 = M, 4 = n (mobile only)
const LANDING_PROGRESS = [0, 0.3, 0.6, 0.91] as const;
const MOBILE_LANDING_PROGRESS = [0, 0.36, 0.68] as const;
const DESKTOP_ANCHOR_INDEXES = [0, 1, 2, 3] as const;
const MOBILE_ANCHOR_INDEXES = [0, 4, 3] as const;
const COIN_LAUNCH_START = 0.91;
const COIN_LAUNCH_END = 0.96;
const HOP_DWELL = 0.12;
// Contact is decided by the rendered coin: past apex and its lowest point within this many world units (per unit of coin scale) of the live landing point.
const CONTACT_START_PROGRESS = 0.42;
const CONTACT_DISTANCE_PER_SCALE = 0.072;
const CONTACT_RESET_MARGIN = 0.008;
// Impact envelope is scrubbed by scroll progress from the detected contact so the letter rebound peak lands on the coin's takeoff.
const IMPACT_REBOUND_AT = 0.52;
const IMPACT_MIN_SPAN = 0.015;
const IMPACT_MAX_SPAN = 0.16;
const FLIGHT_DAMPING = 15;
const APPROACH_DAMPING = 42;
const HOP_SPIN_EASE = [1, 1.6, 2.1] as const;
const LAUNCH_SPIN_EASE = 2.6;
const COIN_SCALE_MULTIPLIER = 1.33;
const DRACO_DECODER_PATH = "/draco/";
const HERO_COIN_MODEL_URL = "/animate/ivsol_coin_LIVE.optimized.glb";
const HERO_COIN_FRONT_NAME = "tripo_node_8175b927-0694-410e-825a-46cb097d1866.001";
const HERO_COIN_REVERSE_NAME = "IVSOL_Coin_Reverse";
const ROCKET_MODEL_URL = "/glb/rockety.optimized.glb";
const AIRDROP_MODEL_URL = "/models/airdrop.web.glb";

type FlightKeyframe = {
  at: number;
  x: number;
  y: number;
  z: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  scale: number;
};

const DESKTOP_ROCKET_KEYFRAMES: readonly FlightKeyframe[] = [
  { at: 0, x: -0.53, y: 0, z: 2.5, rotationX: 0, rotationY: 0, rotationZ: -1.16, scale: 2.5 },
  { at: 0.2, x: -0.19, y: 0.12, z: 2.6, rotationX: 0, rotationY: 0, rotationZ: -1.08, scale: 2.9 },
  { at: 0.45, x: 0.06, y: 0.08, z: 2.65, rotationX: 0, rotationY: 0, rotationZ: -1.3, scale: 3 },
  { at: 0.7, x: 0.31, y: 0.2, z: 2.6, rotationX: 0, rotationY: 0, rotationZ: -1.7, scale: 2.9 },
  { at: 1, x: 0.54, y: 0.12, z: 2.5, rotationX: 0, rotationY: 0, rotationZ: -1.76, scale: 2.8 },
];

const MOBILE_ROCKET_KEYFRAMES: readonly FlightKeyframe[] = [
  { at: 0, x: -0.65, y: 0.04, z: 2.5, rotationX: 0, rotationY: 0, rotationZ: -1.14, scale: 1.15 },
  { at: 0.2, x: -0.1, y: -0.02, z: 2.6, rotationX: 0, rotationY: 0, rotationZ: -1.08, scale: 1.32 },
  { at: 0.45, x: 0.08, y: -0.08, z: 2.65, rotationX: 0, rotationY: 0, rotationZ: -1.3, scale: 1.38 },
  { at: 0.7, x: 0.3, y: 0.12, z: 2.6, rotationX: 0, rotationY: 0, rotationZ: -1.68, scale: 1.3 },
  { at: 1, x: 0.68, y: 0.08, z: 2.5, rotationX: 0, rotationY: 0, rotationZ: -1.74, scale: 1.22 },
];

const DESKTOP_PAYLOAD_KEYFRAMES: readonly FlightKeyframe[] = [
  { at: 0.3, x: -0.08, y: -0.1, z: 2.15, rotationX: -0.04, rotationY: 0, rotationZ: -0.08, scale: 0.001 },
  { at: 0.38, x: -0.1, y: -0.17, z: 2.15, rotationX: -0.04, rotationY: 0.02, rotationZ: -0.03, scale: 2.4 },
  { at: 0.52, x: -0.08, y: -0.24, z: 2.1, rotationX: -0.03, rotationY: -0.02, rotationZ: 0.04, scale: 3.6 },
  { at: 0.72, x: -0.08, y: -0.17, z: 2.1, rotationX: -0.02, rotationY: 0.02, rotationZ: -0.04, scale: 4.2 },
  { at: 1, x: 0.08, y: -0.25, z: 2.05, rotationX: -0.02, rotationY: -0.02, rotationZ: 0.05, scale: 4 },
];

const MOBILE_PAYLOAD_KEYFRAMES: readonly FlightKeyframe[] = [
  { at: 0.3, x: -0.04, y: -0.08, z: 2.15, rotationX: -0.04, rotationY: 0, rotationZ: -0.06, scale: 0.001 },
  { at: 0.38, x: 0, y: -0.13, z: 2.15, rotationX: -0.04, rotationY: 0.02, rotationZ: -0.02, scale: 0.9 },
  { at: 0.52, x: 0.02, y: -0.2, z: 2.1, rotationX: -0.03, rotationY: -0.02, rotationZ: 0.04, scale: 1.55 },
  { at: 0.72, x: -0.04, y: -0.16, z: 2.1, rotationX: -0.02, rotationY: 0.02, rotationZ: -0.04, scale: 1.75 },
  { at: 1, x: 0.08, y: -0.24, z: 2.05, rotationX: -0.02, rotationY: -0.02, rotationZ: 0.05, scale: 1.65 },
];

function interpolateFlight(progress: number, keyframes: readonly FlightKeyframe[]): FlightKeyframe {
  const last = keyframes[keyframes.length - 1];

  for (let index = 0; index < keyframes.length - 1; index += 1) {
    const from = keyframes[index];
    const to = keyframes[index + 1];
    if (progress > to.at) continue;

    const local = THREE.MathUtils.clamp((progress - from.at) / (to.at - from.at), 0, 1);
    const eased = THREE.MathUtils.smootherstep(local, 0, 1);

    return {
      at: progress,
      x: THREE.MathUtils.lerp(from.x, to.x, eased),
      y: THREE.MathUtils.lerp(from.y, to.y, eased),
      z: THREE.MathUtils.lerp(from.z, to.z, eased),
      rotationX: THREE.MathUtils.lerp(from.rotationX, to.rotationX, eased),
      rotationY: THREE.MathUtils.lerp(from.rotationY, to.rotationY, eased),
      rotationZ: THREE.MathUtils.lerp(from.rotationZ, to.rotationZ, eased),
      scale: THREE.MathUtils.lerp(from.scale, to.scale, eased),
    };
  }

  return last;
}

function segmentForProgress(progress: number, landingProgress: readonly number[]) {
  for (let index = 0; index < landingProgress.length - 1; index += 1) {
    const start = landingProgress[index];
    const end = landingProgress[index + 1];
    if (progress <= end) {
      return { index, local: THREE.MathUtils.clamp((progress - start) / (end - start), 0, 1) };
    }
  }

  return { index: landingProgress.length - 2, local: 1 };
}

type CoinDisc = { center: THREE.Vector3; radius: number; halfThickness: number };

// Measures the coin as a z-facing disc in model space so its lowest rendered point can be derived exactly for any tilt.
function measureCoinDisc(model: Object3D): CoinDisc | null {
  const box = new THREE.Box3();
  const meshBox = new THREE.Box3();
  const local = new THREE.Matrix4();
  model.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;
    const geometry = child.geometry as THREE.BufferGeometry;
    if (!geometry.boundingBox) geometry.computeBoundingBox();
    if (!geometry.boundingBox) return;
    local.identity();
    for (let node: Object3D | null = child; node && node !== model; node = node.parent) {
      node.updateMatrix();
      local.premultiply(node.matrix);
    }
    box.union(meshBox.copy(geometry.boundingBox).applyMatrix4(local));
  });
  if (box.isEmpty()) return null;
  const size = box.getSize(new THREE.Vector3());
  return { center: box.getCenter(new THREE.Vector3()), radius: Math.max(size.x, size.y) * 0.5, halfThickness: size.z * 0.5 };
}

function HeroCoin({
  active,
  progress,
  anchors,
  impact,
  onCoinReady,
}: Pick<HeroSceneProps, "active" | "progress" | "anchors" | "impact" | "onCoinReady">) {
  const root = useRef<Group>(null);
  const physics = useRef<Group>(null);
  const coin = useRef<Group>(null);
  const coinModel = useRef<Object3D | null>(null);
  const shadow = useRef<Mesh>(null);
  const raycaster = useRef(new THREE.Raycaster());
  const pointer = useRef(new THREE.Vector2());
  const targetPointer = useRef(new THREE.Vector2());
  const landingPlane = useRef(new THREE.Plane(new THREE.Vector3(0, 0, 1), -1.35));
  const landingPoint = useRef(new THREE.Vector3());
  const targetLanding = useRef(new THREE.Vector3());
  const coinDisc = useRef<CoinDisc | null>(null);
  const discCenter = useRef(new THREE.Vector3());
  const discNormal = useRef(new THREE.Vector3());
  const previousRootY = useRef(Number.NaN);
  // Per landing: scroll progress at which the rendered coin made contact (NaN = not yet), last driven level, last envelope value.
  const contactProgress = useRef<number[]>([]);
  const impactLevel = useRef<number[]>([]);
  const impactEnvelope = useRef<number[]>([]);
  const { camera, gl, viewport } = useThree();

  useFrame((state, delta) => {
    const p = progress.current;
    const mobile = viewport.width < 8;
    const currentRoot = root.current;
    const currentPhysics = physics.current;
    const currentCoin = coin.current;
    if (!currentRoot || !currentPhysics || !currentCoin) return;

    const anchorIndexes = mobile ? MOBILE_ANCHOR_INDEXES : DESKTOP_ANCHOR_INDEXES;
    const landingProgress = mobile ? MOBILE_LANDING_PROGRESS : LANDING_PROGRESS;
    const finalAnchor = anchors.current[anchorIndexes[anchorIndexes.length - 1]];
    const heroVisible = finalAnchor && getComputedStyle(finalAnchor).visibility !== "hidden";
    currentRoot.visible = Boolean(heroVisible);
    if (!heroVisible) return;

    const launching = p >= COIN_LAUNCH_START;
    const { index, local } = segmentForProgress(Math.min(p, COIN_LAUNCH_START), landingProgress);
    const from = anchors.current[anchorIndexes[index]];
    const to = launching ? finalAnchor : anchors.current[anchorIndexes[Math.min(index + 1, anchorIndexes.length - 1)]];
    if (!from || !to) return;

    const canvasRect = gl.domElement.getBoundingClientRect();
    const fromRect = from.getBoundingClientRect();
    const toRect = to.getBoundingClientRect();
    const launchLocal = THREE.MathUtils.clamp((p - COIN_LAUNCH_START) / (COIN_LAUNCH_END - COIN_LAUNCH_START), 0, 1);
    const easedLaunch = THREE.MathUtils.smootherstep(launchLocal, 0, 1);
    const flightLocal = launching ? 1 : THREE.MathUtils.clamp((local - HOP_DWELL) / (1 - HOP_DWELL * 2), 0, 1);
    const eased = launching ? 1 : THREE.MathUtils.smoothstep(flightLocal, 0, 1);
    const targetScreenX = toRect.left + toRect.width * 0.5;

    // Landing surface is the TOP of the glyph.
    // The coin's physical bottom/support offset is handled in world space.
    const fromScreenY = fromRect.top;
    const targetScreenY = toRect.top;

    const screenX = THREE.MathUtils.lerp(fromRect.left + fromRect.width * 0.5, targetScreenX, eased);
    const screenY = THREE.MathUtils.lerp(fromScreenY, targetScreenY, eased);
    const ricochetLift = Math.sin(launchLocal * Math.PI) * canvasRect.height * (mobile ? 0.24 : 0.34);
    const launchedScreenX = THREE.MathUtils.lerp(screenX, canvasRect.left - canvasRect.width * (mobile ? 0.2 : 0.24), easedLaunch);
    const launchedScreenY = THREE.MathUtils.lerp(screenY, screenY - canvasRect.height * (mobile ? 0.24 : 0.36), easedLaunch) - ricochetLift;
    const normalizedX = ((launching ? launchedScreenX : screenX) - canvasRect.left) / canvasRect.width;
    const normalizedY = ((launching ? launchedScreenY : screenY) - canvasRect.top) / canvasRect.height;
    const hop = launching ? Math.sin((1 - launchLocal) * Math.PI * 0.5) * 0.58 : Math.sin(flightLocal * Math.PI);
    const hopHeight = mobile ? 1.25 : 2.15 + Math.min(0.75, Math.abs(toRect.left - fromRect.left) / 360);
    const baseScale = (mobile ? 1.7 : 2.2) * COIN_SCALE_MULTIPLIER;

    if (!coinDisc.current && coinModel.current) coinDisc.current = measureCoinDisc(coinModel.current);
    let bottomOffset = 0;
    const disc = coinDisc.current;
    if (disc) {
      discCenter.current.copy(disc.center).applyQuaternion(currentCoin.quaternion);
      const normalY = Math.abs(discNormal.current.set(0, 0, 1).applyQuaternion(currentCoin.quaternion).y);
      const rimDrop = disc.radius * Math.sqrt(Math.max(0, 1 - normalY * normalY)) + disc.halfThickness * normalY;
      bottomOffset = currentPhysics.scale.y * (discCenter.current.y - rimDrop);
    }

    pointer.current.set(normalizedX * 2 - 1, 1 - normalizedY * 2);
    raycaster.current.setFromCamera(pointer.current, camera);
    const intersection = raycaster.current.ray.intersectPlane(landingPlane.current, landingPoint.current);
    if (!intersection) return;
    const targetX = intersection.x;
    const targetY = intersection.y - bottomOffset + hop * hopHeight;

    // Live world-space landing point of the current hop target (read from its rect every frame; the headline is moving).
    targetPointer.current.set(
      ((targetScreenX - canvasRect.left) / canvasRect.width) * 2 - 1,
      1 - ((targetScreenY - canvasRect.top) / canvasRect.height) * 2,
    );
    raycaster.current.setFromCamera(targetPointer.current, camera);
    const landing = raycaster.current.ray.intersectPlane(landingPlane.current, targetLanding.current);

    const landingIndex = index;
    const hitTarget = Number.isFinite(contactProgress.current[landingIndex]);
    const hitSource = index > 0 && Number.isFinite(contactProgress.current[index - 1]);
    const locked = !launching && ((flightLocal >= 1 && hitTarget) || (flightLocal <= 0 && hitSource));

    if (locked || p >= COIN_LAUNCH_END) {
      currentRoot.position.x = targetX;
      currentRoot.position.y = targetY;
    } else {
      const approach = launching ? 0 : THREE.MathUtils.smoothstep(flightLocal, 0.8, 1);
      const lambda = THREE.MathUtils.lerp(FLIGHT_DAMPING, APPROACH_DAMPING, approach);
      currentRoot.position.x = THREE.MathUtils.damp(currentRoot.position.x, targetX, lambda, delta);
      currentRoot.position.y = THREE.MathUtils.damp(currentRoot.position.y, targetY, lambda, delta);
    }
    currentRoot.position.z = 1.35 + hop * 0.8 + easedLaunch * 1.1;

    if (active && (Math.abs(currentRoot.position.x - targetX) > 0.002 || Math.abs(currentRoot.position.y - targetY) > 0.002)) {
      state.invalidate();
    }

    // Contact = rendered coin (its lowest rendered point, not its origin) reaches the live landing point while descending.
    const descending = !(currentRoot.position.y > previousRootY.current + 1e-4);
    previousRootY.current = currentRoot.position.y;
    if (!launching && landing && !hitTarget && descending && flightLocal >= CONTACT_START_PROGRESS) {
      const dx = currentRoot.position.x - landing.x;
      const dy = currentRoot.position.y + bottomOffset - landing.y;
      if (Math.hypot(dx, dy) <= CONTACT_DISTANCE_PER_SCALE * baseScale) contactProgress.current[landingIndex] = p;
    }

    const driver = impact.current;
    for (let i = 0; i < anchorIndexes.length - 1; i += 1) {
      const landingAt = landingProgress[i + 1];
      let contactAt = contactProgress.current[i];
      if (!Number.isFinite(contactAt) && p >= landingAt) {
        // Coin is already past this landing (scrollbar jump / dropped frames): recover from the nominal arrival.
        contactAt = landingAt - HOP_DWELL * (landingAt - landingProgress[i]);
        contactProgress.current[i] = contactAt;
      }

      let level = 0;
      if (Number.isFinite(contactAt)) {
        if (p < contactAt - CONTACT_RESET_MARGIN) {
          contactProgress.current[i] = Number.NaN;
        } else {
          const takeoffAt = i + 2 < landingProgress.length ? landingAt + HOP_DWELL * (landingProgress[i + 2] - landingAt) : COIN_LAUNCH_START;
          const span = THREE.MathUtils.clamp((takeoffAt - contactAt) / IMPACT_REBOUND_AT, IMPACT_MIN_SPAN, IMPACT_MAX_SPAN);
          level = THREE.MathUtils.clamp((p - contactAt) / span, 0, 1);
        }
      }

      if (driver && level !== impactLevel.current[i]) {
        impactLevel.current[i] = level;
        impactEnvelope.current[i] = driver.set(i, level);
      }
    }

    const activeLanding = flightLocal >= CONTACT_START_PROGRESS ? index : index - 1;
    const squash = activeLanding >= 0 ? impactEnvelope.current[activeLanding] ?? 0 : 0;
    const launchScale = 1 - easedLaunch * 0.2;
    currentPhysics.scale.set(
      baseScale * launchScale * (1 + squash * 0.1 - hop * 0.018),
      baseScale * launchScale * (1 - squash * 0.18 + hop * 0.045),
      baseScale * launchScale,
    );

    const direction = index % 2 === 0 ? -1 : 1;
    const spinFlight = 1 - Math.pow(1 - flightLocal, HOP_SPIN_EASE[Math.min(index, HOP_SPIN_EASE.length - 1)]);
    const spinLaunch = 1 - Math.pow(1 - launchLocal, LAUNCH_SPIN_EASE);
    currentCoin.rotation.x = -0.24 + hop * 0.16 + easedLaunch * 1.25;
    currentCoin.rotation.y = 0.1 + (spinFlight + spinLaunch * 2.35) * direction * Math.PI * 2;
    currentCoin.rotation.z = -0.08 + hop * direction * 0.18 - easedLaunch * 1.65;

    const currentModel = coinModel.current;
    if (currentModel) {
      const front = currentModel.getObjectByName(HERO_COIN_FRONT_NAME);
      const reverse = currentModel.getObjectByName(HERO_COIN_REVERSE_NAME);
      const frontFacing = Math.cos(currentCoin.rotation.y) >= 0;
      if (front) front.visible = frontFacing;
      if (reverse) reverse.visible = !frontFacing;
    }

    if (shadow.current) {
      // Shadow follows the rendered coin height so it densifies at actual contact, not at the nominal one.
      const lift = launching ? hop * hopHeight : Math.max(0, currentRoot.position.y - intersection.y);
      const visualHop = launching ? hop : THREE.MathUtils.clamp(lift / hopHeight, 0, 1);
      shadow.current.visible = !launching || launchLocal < 0.72;
      shadow.current.position.y = -lift;
      shadow.current.scale.set((1 - visualHop * 0.42) * (1 - easedLaunch * 0.68) * COIN_SCALE_MULTIPLIER, 0.18 - visualHop * 0.06, 1);
      const material = shadow.current.material;
      if (material instanceof THREE.MeshBasicMaterial) material.opacity = 0.13 * (1 - visualHop * 0.82) * (1 - easedLaunch);
    }
  });

  return (
    <group ref={root} position={[7.5, 2.8, 1.35]}>
      <mesh ref={shadow} position={[0, 0.03, -0.45]} renderOrder={-1}>
        <circleGeometry args={[0.72, 48]} />
        <meshBasicMaterial color="#111111" transparent opacity={0.13} depthWrite={false} />
      </mesh>
      <group ref={physics} scale={2.2}>
        <group ref={coin} rotation={[-0.28, 0.18, -0.12]}>
          <ModelPrimitive url={HERO_COIN_MODEL_URL} modelRef={coinModel} onReady={onCoinReady} />
        </group>
      </group>
    </group>
  );
}

function ModelPrimitive({
  url,
  modelRef,
  onReady,
  draco = false,
}: {
  url: string;
  modelRef?: MutableRefObject<Object3D | null>;
  onReady?: () => void;
  draco?: boolean | string;
}) {
  const { scene } = useGLTF(url, draco);
  const model = useMemo(() => {
    const clone = cloneSkeleton(scene);

    clone.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      child.castShadow = true;
      child.receiveShadow = true;
    });

    return clone;
  }, [scene]);

  useEffect(() => {
    if (modelRef) modelRef.current = model;
    onReady?.();
    return () => {
      if (modelRef?.current === model) modelRef.current = null;
    };
  }, [model, modelRef, onReady]);

  return <primitive object={model} />;
}

useGLTF.preload(HERO_COIN_MODEL_URL, false);
useGLTF.preload(ROCKET_MODEL_URL, false);
useGLTF.preload(AIRDROP_MODEL_URL, DRACO_DECODER_PATH);

function RocketAndPayload({ progress }: { progress: MutableRefObject<number> }) {
  const rocket = useRef<Group>(null);
  const payload = useRef<Group>(null);
  const { viewport } = useThree();

  useFrame(() => {
    const p = progress.current;
    const mobile = viewport.width < 8;
    const inSequence = p >= 0 && p <= 1;

    if (rocket.current) {
      rocket.current.visible = inSequence;
      if (inSequence) {
        const frame = interpolateFlight(p, mobile ? MOBILE_ROCKET_KEYFRAMES : DESKTOP_ROCKET_KEYFRAMES);
        rocket.current.position.set(frame.x * viewport.width, frame.y * viewport.height, frame.z);
        rocket.current.rotation.set(frame.rotationX, frame.rotationY, frame.rotationZ);
        rocket.current.scale.setScalar(frame.scale);
      }
    }

    if (payload.current) {
      const released = inSequence && p >= 0.3;
      payload.current.visible = released;
      if (released) {
        const frame = interpolateFlight(p, mobile ? MOBILE_PAYLOAD_KEYFRAMES : DESKTOP_PAYLOAD_KEYFRAMES);
        payload.current.position.set(frame.x * viewport.width, frame.y * viewport.height, frame.z);
        payload.current.rotation.set(frame.rotationX, frame.rotationY, frame.rotationZ);
        payload.current.scale.setScalar(frame.scale);
      }
    }
  });

  return (
    <>
      <group ref={rocket} visible={false}>
        <ModelPrimitive url={ROCKET_MODEL_URL} />
      </group>
      <group ref={payload} visible={false} rotation={[-0.05, 0, 0]} scale={0.8}>
        <ModelPrimitive url={AIRDROP_MODEL_URL} draco={DRACO_DECODER_PATH} />
      </group>
    </>
  );
}

function DemandRenderBridge({ invalidateRef }: Pick<HeroSceneProps, "invalidateRef">) {
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    invalidateRef.current = invalidate;
    invalidate();
    return () => {
      if (invalidateRef.current === invalidate) invalidateRef.current = null;
    };
  }, [invalidate, invalidateRef]);

  return null;
}

export default function HeroScene({
  active,
  progress,
  launchProgress,
  anchors,
  impact,
  invalidateRef,
  launchAssetsEnabled,
  onCoinReady,
}: HeroSceneProps) {
  return (
    <Canvas
      orthographic
      camera={{ position: [0, 3.5, 8], zoom: 65, near: -100, far: 100 }}
      dpr={[1, 1.75]}
      frameloop="demand"
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      shadows
    >
      <ambientLight intensity={1.6} />
      <directionalLight castShadow intensity={3.2} position={[3, 8, 7]} />
      <directionalLight intensity={1.2} position={[-6, 2, 5]} color="#dce8ff" />
      <DemandRenderBridge invalidateRef={invalidateRef} />
      <Suspense fallback={null}>
        <HeroCoin active={active} progress={progress} anchors={anchors} impact={impact} onCoinReady={onCoinReady} />
      </Suspense>
      {launchAssetsEnabled ? (
        <Suspense fallback={null}>
          <RocketAndPayload progress={launchProgress} />
        </Suspense>
      ) : null}
    </Canvas>
  );
}
