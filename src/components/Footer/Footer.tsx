import {
  faLinkedinIn,
  faSquareInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Slogan & Stuff */}
          <div>
            <h3 className={styles.brand}>Architecturio</h3>
            <p className={styles.description}>
              Creating innovative architectural designs that transform spaces
              and inspire lives.
            </p>
          </div>
          {/* Address */}
          <div>
            <h3 className={styles.brand}>Contact</h3>
            <address className={styles.address}>
              <p>
                123 <strong>My Room 😁</strong>
              </p>
              <p>Architecture City, AC 12345</p>
              <p>Email: info@architecturio.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
          {/* Socail Links */}
          <div>
            <h3 className={styles.brand}>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <span className="sr-only">Instagram</span>
                <FontAwesomeIcon icon={faSquareInstagram} />
              </a>
              <a href="#" className={styles.socialLink}>
                <span className="sr-only">Twitter</span>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className={styles.socialLink}>
                <span className="sr-only">LinkedIn</span>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
        {/* Patent & Stuff */}
        <div className={styles.copyright}>
          <p>
            &copy; {new Date().getFullYear()} Architecturio. All rights
            reserved. Develope by{" "}
            <a href="https://pouryavahedi.com/" target="_blank">
              <strong>Pourya Vahedi 🚀</strong>
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
