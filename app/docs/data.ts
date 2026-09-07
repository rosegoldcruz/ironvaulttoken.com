export interface Doc {
  id: string;
  title: string;
  description: string;
  category: string;
  content: string;
  html: string;
}

const renderMarkdown = (md: string): string => {
  let html = md;
  html = html.replace(/^### (.*?)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.*?)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.*?)$/gm, "<h1>$1</h1>");
  html = html.replace(/^\* (.*?)$/gm, "<li>$1</li>");
  html = html.replace(/<li>[\s\S]*?<\/li>/g, "<ul>$&</ul>");
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*(.*?)\*/g, "<em>$1</em>");
  html = html.replace(/^\> (.*?)$/gm, "<blockquote>$1</blockquote>");
  html = html.replace(/\n\n/g, "</p><p>");
  html = `<p>${html}</p>`;
  html = html.replace(/<p><\/p>/g, "");
  return html;
};

export const docs: Doc[] = [
  {
    id: "overview",
    title: "Overview",
    category: "Getting Started",
    description: "Introduction to IV-SOL and the Iron Vault ecosystem.",
    content: `# IV-SOL Overview

Iron Vault is an ecosystem combining education, infrastructure, and community participation in the digital economy.

## What is IV-SOL?

IV-SOL is the native digital token of the Iron Vault ecosystem, operating on the Solana blockchain. It serves as utility that powers access and alignment within Vaulted Academy, connecting learners, contributors, and builders.

## Key Features

* Solana Token-2022 token
* Token-2022 transfer-fee extension
* Verified mint address for security
* Publicly visible on-chain activity
* Educational utility integration

## Use Cases

* Verify IV-SOL against the published mint address
* Use compatible Solana wallets and tools
* Access supported Iron Vault ecosystem utilities
* Review token activity through a Solana explorer`,
    html: `<h1>IV-SOL Overview</h1>
<p>Iron Vault is an ecosystem combining education, infrastructure, and community participation in the digital economy.</p>
<h2>What is IV-SOL?</h2>
<p>IV-SOL is the native digital token of the Iron Vault ecosystem, operating on the Solana blockchain. It serves as utility that powers access and alignment within Vaulted Academy, connecting learners, contributors, and builders.</p>
<h2>Key Features</h2>
<ul>
<li>Solana Token-2022 token</li>
<li>Token-2022 transfer-fee extension</li>
<li>Verified mint address for security</li>
<li>Publicly visible on-chain activity</li>
<li>Educational utility integration</li>
</ul>
<h2>Use Cases</h2>
<ul>
<li>Verify IV-SOL against the published mint address</li>
<li>Use compatible Solana wallets and tools</li>
<li>Access supported Iron Vault ecosystem utilities</li>
<li>Review token activity through a Solana explorer</li>
</ul>`,
  },
  {
    id: "token-details",
    title: "Token Details",
    category: "Technical",
    description: "IV-SOL technical specifications and on-chain data.",
    content: `# IV-SOL Token Specifications

## Token Address

**Verified Mint:** \`DTe8U4RnErPN1CKiJ5HcyZPEAGXMg6j6ueindYuowfjV\`

**Blockchain:** Solana (Token-2022 Program)

**Verification:** View on [Solscan](https://solscan.io/token/DTe8U4RnErPN1CKiJ5HcyZPEAGXMg6j6ueindYuowfjV)

## Token Standard

### Program

* Solana Token-2022 Program
* Token-2022 transfer-fee extension
* Publicly inspectable mint and token instructions
* Current on-chain values should be verified through a Solana explorer

### Transfer Fee Mechanism

IV-SOL uses the Token-2022 transfer-fee extension. Transfer details are recorded in the token instructions and can be inspected on-chain.

* Fee deducted from each transfer
* Publicly visible in token instructions
* Implemented through the Token-2022 Program
* Verifiable through compatible Solana explorers and tools

## Token Behavior

IV-SOL is documented as a utility token within the Iron Vault ecosystem:

* It does not represent equity in IVT Media Group
* It does not guarantee financial returns or investment outcomes
* Availability, pricing, and liquidity depend on market conditions
* Users should verify the mint address before interacting

## Token Security

* Managed through established Solana infrastructure
* Solana Token-2022 implementation
* Community verification encouraged
* Transparent on-chain operations`,
    html: `<h1>IV-SOL Token Specifications</h1>
<h2>Token Address</h2>
<p><strong>Verified Mint:</strong> <code>DTe8U4RnErPN1CKiJ5HcyZPEAGXMg6j6ueindYuowfjV</code></p>
<p><strong>Blockchain:</strong> Solana (Token-2022 Program)</p>
<p><strong>Verification:</strong> View on <a href="https://solscan.io/token/DTe8U4RnErPN1CKiJ5HcyZPEAGXMg6j6ueindYuowfjV">Solscan</a></p>
<h2>Token Standard</h2>
<h3>Program</h3>
<ul>
<li>Solana Token-2022 Program</li>
<li>Token-2022 transfer-fee extension</li>
<li>Publicly inspectable mint and token instructions</li>
<li>Current on-chain values should be verified through a Solana explorer</li>
</ul>
<h3>Transfer Fee Mechanism</h3>
<p>IV-SOL uses the Token-2022 transfer-fee extension. Transfer details are recorded in the token instructions and can be inspected on-chain.</p>
<ul>
<li>Fee deducted from each transfer</li>
<li>Publicly visible in token instructions</li>
<li>Implemented through the Token-2022 Program</li>
<li>Verifiable through compatible Solana explorers and tools</li>
</ul>
<h2>Token Behavior</h2>
<p>IV-SOL is documented as a utility token within the Iron Vault ecosystem:</p>
<ul>
<li>It does not represent equity in IVT Media Group</li>
<li>It does not guarantee financial returns or investment outcomes</li>
<li>Availability, pricing, and liquidity depend on market conditions</li>
<li>Users should verify the mint address before interacting</li>
</ul>
<h2>Token Security</h2>
<ul>
<li>Managed through established Solana infrastructure</li>
<li>Solana Token-2022 implementation</li>
<li>Community verification encouraged</li>
<li>Transparent on-chain operations</li>
</ul>`,
  },
  {
    id: "security",
    title: "Security & Controls",
    category: "Technical",
    description: "Iron Vault security model and control mechanisms.",
    content: `# Security & Risk Management

## Server-Authoritative Architecture

Iron Vault uses a server-authoritative design for all identity and progress management:

* Role-based access control at all layers
* Protected identity verification
* Controlled administrative functions
* Audit logging for all operations

## Control Mechanisms

* **Idempotent Progress Events:** Prevents duplicate progress recording
* **Fraud Monitoring:** Continuous monitoring for suspicious activities
* **Backup & Recovery:** Regular backups with disaster recovery procedures
* **Operational Review:** Scheduled security audits and reviews

## Smart Contract Considerations

When interacting with IV-SOL:

* Verify token address before transactions
* Use established Solana wallets and tools
* Beware of impersonator tokens
* Only swap through verified routes (Jupiter)

## Risk Disclosure

Users should be aware of:

* Smart contract risks inherent to blockchain
* Market volatility and liquidity conditions
* No guaranteed execution prices
* Dependency on Solana network stability

## Reporting Security Issues

If you discover a security vulnerability, please report it responsibly to the Iron Vault team rather than disclosing publicly.`,
    html: `<h1>Security & Risk Management</h1>
<h2>Server-Authoritative Architecture</h2>
<p>Iron Vault uses a server-authoritative design for all identity and progress management:</p>
<ul>
<li>Role-based access control at all layers</li>
<li>Protected identity verification</li>
<li>Controlled administrative functions</li>
<li>Audit logging for all operations</li>
</ul>
<h2>Control Mechanisms</h2>
<ul>
<li><strong>Idempotent Progress Events:</strong> Prevents duplicate progress recording</li>
<li><strong>Fraud Monitoring:</strong> Continuous monitoring for suspicious activities</li>
<li><strong>Backup & Recovery:</strong> Regular backups with disaster recovery procedures</li>
<li><strong>Operational Review:</strong> Scheduled security audits and reviews</li>
</ul>
<h2>Smart Contract Considerations</h2>
<p>When interacting with IV-SOL:</p>
<ul>
<li>Verify token address before transactions</li>
<li>Use established Solana wallets and tools</li>
<li>Beware of impersonator tokens</li>
<li>Only swap through verified routes (Jupiter)</li>
</ul>
<h2>Risk Disclosure</h2>
<p>Users should be aware of:</p>
<ul>
<li>Smart contract risks inherent to blockchain</li>
<li>Market volatility and liquidity conditions</li>
<li>No guaranteed execution prices</li>
<li>Dependency on Solana network stability</li>
</ul>
<h2>Reporting Security Issues</h2>
<p>If you discover a security vulnerability, please report it responsibly to the Iron Vault team rather than disclosing publicly.</p>`,
  },
  {
    id: "swap-guide",
    title: "How to Swap",
    category: "Guides",
    description: "Step-by-step guide to swapping for IV-SOL using Jupiter.",
    content: `# How to Swap for IV-SOL

## Quick Start

1. Visit the [Swap page](/swap)
2. Connect a supported Solana wallet
3. Select input token (SOL or other supported assets)
4. Output will be locked to verified IV-SOL
5. Review the quote and confirm swap

## Prerequisites

* A Solana blockchain wallet (Phantom, Magic Eden, Solflare, etc.)
* SOL or other supported assets
* Active internet connection

## Step-by-Step Guide

### Step 1: Connect Wallet

Click the wallet connection button on the swap interface. Select your wallet provider from the available options. Approve the connection in your wallet application.

### Step 2: Select Input Token

Choose the token you want to swap FROM. Most common:
* SOL (Solana native token)
* Other SPL tokens (USDC, USDT, etc.)

### Step 3: Enter Amount

Input the amount you want to swap. The interface will fetch current market rates and display the estimated IV-SOL you'll receive.

### Step 4: Review Output

The output token is locked to verified IV-SOL to prevent accidental swaps to impersonator tokens.

**Verified IV-SOL Mint:** \`DTe8U4RnErPN1CKiJ5HcyZPEAGXMg6j6ueindYuowfjV\`

### Step 5: Confirm Swap

Review the quote, including:
* Input amount
* Output amount
* Estimated price impact
* Network fees

Click confirm and approve the transaction in your wallet.

### Step 6: Wait for Confirmation

The transaction will be processed on the Solana blockchain. This typically takes a few seconds to a minute.

## Liquidity & Routing

Swaps are routed by Jupiter based on real-time market liquidity. Jupiter finds the best route across multiple DEXes:

* If no route exists, the interface will display "No route"
* This reflects market conditions, not a technical failure
* Check back later or try swapping to a different token pair

## Fees

Transaction fees include:
* **Network Fee:** Solana blockchain transaction cost (~0.00025 SOL)
* **Jupiter Router Fee:** Included in price quote
* **IV-SOL Transfer Fee:** Applies to received tokens

## Troubleshooting

### Wallet Won't Connect
* Refresh the page
* Check wallet browser extension is enabled
* Try a different wallet provider
* Ensure wallet has SOL for gas fees

### No Route Available
* Insufficient liquidity in current market
* Try swapping a smaller amount
* Check back in a few minutes
* Verify the token is supported

### Transaction Failed
* Insufficient balance for network fees
* Price slippage tolerance too low
* Wallet rejected the transaction
* Network congestion`,
    html: `<h1>How to Swap for IV-SOL</h1>
<h2>Quick Start</h2>
<ol>
<li>Visit the <a href="/swap">Swap page</a></li>
<li>Connect a supported Solana wallet</li>
<li>Select input token (SOL or other supported assets)</li>
<li>Output will be locked to verified IV-SOL</li>
<li>Review the quote and confirm swap</li>
</ol>
<h2>Prerequisites</h2>
<ul>
<li>A Solana blockchain wallet (Phantom, Magic Eden, Solflare, etc.)</li>
<li>SOL or other supported assets</li>
<li>Active internet connection</li>
</ul>
<h2>Step-by-Step Guide</h2>
<h3>Step 1: Connect Wallet</h3>
<p>Click the wallet connection button on the swap interface. Select your wallet provider from the available options. Approve the connection in your wallet application.</p>
<h3>Step 2: Select Input Token</h3>
<p>Choose the token you want to swap FROM. Most common:</p>
<ul>
<li>SOL (Solana native token)</li>
<li>Other SPL tokens (USDC, USDT, etc.)</li>
</ul>
<h3>Step 3: Enter Amount</h3>
<p>Input the amount you want to swap. The interface will fetch current market rates and display the estimated IV-SOL you'll receive.</p>
<h3>Step 4: Review Output</h3>
<p>The output token is locked to verified IV-SOL to prevent accidental swaps to impersonator tokens.</p>
<p><strong>Verified IV-SOL Mint:</strong> <code>DTe8U4RnErPN1CKiJ5HcyZPEAGXMg6j6ueindYuowfjV</code></p>
<h3>Step 5: Confirm Swap</h3>
<p>Review the quote, including:</p>
<ul>
<li>Input amount</li>
<li>Output amount</li>
<li>Estimated price impact</li>
<li>Network fees</li>
</ul>
<p>Click confirm and approve the transaction in your wallet.</p>
<h3>Step 6: Wait for Confirmation</h3>
<p>The transaction will be processed on the Solana blockchain. This typically takes a few seconds to a minute.</p>
<h2>Liquidity & Routing</h2>
<p>Swaps are routed by Jupiter based on real-time market liquidity. Jupiter finds the best route across multiple DEXes:</p>
<ul>
<li>If no route exists, the interface will display "No route"</li>
<li>This reflects market conditions, not a technical failure</li>
<li>Check back later or try swapping to a different token pair</li>
</ul>
<h2>Fees</h2>
<p>Transaction fees include:</p>
<ul>
<li><strong>Network Fee:</strong> Solana blockchain transaction cost (~0.00025 SOL)</li>
<li><strong>Jupiter Router Fee:</strong> Included in price quote</li>
<li><strong>IV-SOL Transfer Fee:</strong> Applies to received tokens</li>
</ul>
<h2>Troubleshooting</h2>
<h3>Wallet Won't Connect</h3>
<ul>
<li>Refresh the page</li>
<li>Check wallet browser extension is enabled</li>
<li>Try a different wallet provider</li>
<li>Ensure wallet has SOL for gas fees</li>
</ul>
<h3>No Route Available</h3>
<ul>
<li>Insufficient liquidity in current market</li>
<li>Try swapping a smaller amount</li>
<li>Check back in a few minutes</li>
<li>Verify the token is supported</li>
</ul>
<h3>Transaction Failed</h3>
<ul>
<li>Insufficient balance for network fees</li>
<li>Price slippage tolerance too low</li>
<li>Wallet rejected the transaction</li>
<li>Network congestion</li>
</ul>`,
  },
  {
    id: "roadmap",
    title: "Roadmap",
    category: "Vision",
    description: "Iron Vault and IV-SOL development roadmap.",
    content: `# Iron Vault Roadmap

## Current Phase: Foundation

Building core infrastructure for long-term participation in the digital economy.

* Vaulted Academy curriculum expansion
* IV-SOL ecosystem integration
* Community infrastructure development
* Security and compliance frameworks

## Upcoming: Enhanced Education Platform

* Advanced learning modules
* Interactive assessments
* Project-based learning paths
* Mentorship programs
* Community contribution tools

## Future: Digital Economy Infrastructure

* Expanded utility for IV-SOL
* Additional ecosystem integrations
* Advanced analytics and reporting
* Community feedback mechanisms
* Enterprise partnerships

## Long-term Vision

Iron Vault aims to become the leading infrastructure for capability-building in the digital economy, where:

* Education drives participation quality
* Tokens align long-term incentives
* Communities thrive on shared values
* Sustainable ecosystems enable growth

## Get Involved

The future of Iron Vault depends on capable community members like you:

* Join Vaulted Academy
* Contribute to curriculum development
* Share feedback on IV-SOL ecosystem
* Build with our infrastructure
* Help educate others`,
    html: `<h1>Iron Vault Roadmap</h1>
<h2>Current Phase: Foundation</h2>
<p>Building core infrastructure for long-term participation in the digital economy.</p>
<ul>
<li>Vaulted Academy curriculum expansion</li>
<li>IV-SOL ecosystem integration</li>
<li>Community infrastructure development</li>
<li>Security and compliance frameworks</li>
</ul>
<h2>Upcoming: Enhanced Education Platform</h2>
<ul>
<li>Advanced learning modules</li>
<li>Interactive assessments</li>
<li>Project-based learning paths</li>
<li>Mentorship programs</li>
<li>Community contribution tools</li>
</ul>
<h2>Future: Digital Economy Infrastructure</h2>
<ul>
<li>Expanded utility for IV-SOL</li>
<li>Additional ecosystem integrations</li>
<li>Advanced analytics and reporting</li>
<li>Community feedback mechanisms</li>
<li>Enterprise partnerships</li>
</ul>
<h2>Long-term Vision</h2>
<p>Iron Vault aims to become the leading infrastructure for capability-building in the digital economy, where:</p>
<ul>
<li>Education drives participation quality</li>
<li>Tokens align long-term incentives</li>
<li>Communities thrive on shared values</li>
<li>Sustainable ecosystems enable growth</li>
</ul>
<h2>Get Involved</h2>
<p>The future of Iron Vault depends on capable community members like you:</p>
<ul>
<li>Join Vaulted Academy</li>
<li>Contribute to curriculum development</li>
<li>Share feedback on IV-SOL ecosystem</li>
<li>Build with our infrastructure</li>
<li>Help educate others</li>
</ul>`,
  },
];
