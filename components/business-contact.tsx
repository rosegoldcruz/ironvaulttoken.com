import styles from "./business-contact.module.css";

const address = "5830 East 2nd Street, Suite 7000 #36157, Casper, Wyoming 82609";
const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

export function BusinessContact() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="business-contact-heading">
      <div className="iv-shell">
        <div className={styles.heading}>
          <span>IVT MEDIA GROUP</span>
          <h2 id="business-contact-heading">Business contact</h2>
          <p>Reach us directly or find our mailing address below.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.details}>
            <h3>Phone and email</h3>
            <div className={styles.contactRow}>
              <a href="tel:+15203555616">520-355-5616</a>
              <a href="mailto:chris@ivtmediagroup.com">chris@ivtmediagroup.com</a>
            </div>
            <div className={styles.contactRow}>
              <a href="tel:+18883682502">888-368-2502</a>
              <a href="mailto:support@ivtmediagroup.com">support@ivtmediagroup.com</a>
            </div>

            <div className={styles.addressBlock}>
              <h3>Business mailing address</h3>
              <address>
                IVT MEDIA GROUP<br />
                5830 East 2nd Street<br />
                Suite 7000 #36157<br />
                Casper, Wyoming 82609
              </address>
            </div>
          </div>

          <div className={styles.mapWrap}>
            <iframe
              title="Map of IVT MEDIA GROUP mailing address in Casper, Wyoming"
              src={mapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
