import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactMe.module.css";

export const ContactMe = () => {
  const form = useRef();

  const [isSent, setIsSent] = useState(false);

  const sent = () => {
    setIsSent(!isSent);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tsjycns", "template_c55m9r7", form.current, {
        publicKey: "gMuNzRvqL_KGtMPBu",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          sent();
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    const clearTime = setTimeout(() => {
      setIsSent(false);
    }, 1500);
    return () => clearTimeout(clearTime);
  }, [isSent]);

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <label></label>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className={styles.contactName}
        />
        <label></label>
        <input
          type="email"
          name="from_email"
          placeholder="Email"
          className={styles.contactEmail}
        />
        <label></label>
        <textarea
          name="message"
          placeholder="Say Hi Here!"
          className={styles.contactMessage}
        />
        <input type="submit" value="Connect" />
      </form>
      {isSent ? <div className={styles.sent}>Sent!</div> : null}
    </>
  );
};
