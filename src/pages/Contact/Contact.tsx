import ContactForm from "../../components/Contact/Contact-Form";
import ContactInfo from "../../components/Contact/Contact-Info";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            Have a project in mind or want to learn more about our services?
            We'd love to hear from you. Fill out the form below or use our
            contact information to get in touch.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.formContainer}>
            <h2 className={styles.sectionTitle}>Send Us a Message</h2>
            <ContactForm />
          </div>
          <ContactInfo />
        </div>

        <div className={styles.mapSection}>
          <div className={styles.mapContainer}>
            <h2 className={styles.sectionTitle}>Our Location</h2>
            <div className={styles.mapPlaceholder}>MayBe Later 😎</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
