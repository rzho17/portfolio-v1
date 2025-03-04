import styles from "./FooterPage.module.css";
import ContactInfo from "../components/ContactInfo";

export default function FooterPage() {
  return (
    <footer>
      <section className={styles.footerSection}>
        <div className={styles.contactContainer}>
          <div>
            <h3>CONTACT ME</h3>
          </div>
          <div>
            <h2>Want to Connect?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
              fugit architecto quo tempora eius, quia quibusdam vel aut sit
              doloremque quas rerum sapiente minus aliquam exercitationem,
              maxime quisquam culpa reiciendis.
            </p>
            <ContactInfo />
          </div>
        </div>
        <div className={styles.footerBar}>Designed by</div>
      </section>
    </footer>
  );
}
