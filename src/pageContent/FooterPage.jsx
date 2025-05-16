import styles from "./FooterPage.module.css";
import ContactInfo from "../components/ContactInfo";
import { ContactMe } from "../components/ContactMe";

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
              Thanks for stopping by! Got a cool project? Need a creative brain
              on your team? Or maybe you just accidentally ended up here and now
              feel weirdly compelled to hire me? Either way let’s chat! Shoot me
              a message or stalk me professionally on LinkedIn.
            </p>
            <ContactInfo />
          </div>
        </div>
        <ContactMe />
      </section>
      <div className={styles.footerBar}>
        Designed and developed by Richard Ho
      </div>
    </footer>
  );
}
