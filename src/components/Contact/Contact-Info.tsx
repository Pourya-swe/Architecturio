import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ContactInfo.module.scss";
import {
  faFacebookF,
  faLinkedinIn,
  faSquareInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { ClassList } from "../../Utils/Class-List/ClassList";

const ContactInfo = () => {
  return (
    <div className={styles.ContactContainer}>
      <div>
        <h3 className={styles.title}>Contact Information</h3>
        <div className={styles.infoList}>
          <div className={styles.infoItem}>
            <div>
              <FontAwesomeIcon
                icon={faLocationDot}
                className={ClassList(styles.icon)}
              />
            </div>
            <div className={styles.content}>
              <h4 className={styles.label}>Address</h4>
              <address className={styles.text}>
                123 <strong>My Room 😁</strong>
                <br />
                Architecture City, AC 12345
                <br />
                United States 😎
              </address>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div>
              <FontAwesomeIcon
                icon={faEnvelope}
                className={ClassList(styles.icon)}
              />
            </div>
            <div className={styles.content}>
              <h4 className={styles.label}>Email</h4>
              <p className={styles.text}>
                <a href="mailto:info@architecturio.com" className={styles.link}>
                  info@architecturio.com
                </a>
              </p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div>
              <FontAwesomeIcon
                icon={faPhone}
                className={ClassList(styles.icon)}
              />
            </div>
            <div className={styles.content}>
              <h4 className={styles.label}>Phone</h4>
              <p className={styles.text}>
                <a href="tel:+11234567890" className={styles.link}>
                  (123) 456-7890
                </a>
              </p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div>
              <FontAwesomeIcon
                icon={faClock}
                className={ClassList(styles.icon)}
              />
            </div>
            <div className={styles.content}>
              <h4 className={styles.label}>Office Hours</h4>
              <p className={styles.text}>
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 2:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.socialSection}>
        <h3 className={styles.socialTitle}>Follow Us</h3>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>
            <span className="sr-only">Facebook</span>
            <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
          </a>
          <a href="#" className={styles.socialLink}>
            <span className="sr-only">Instagram</span>
            <FontAwesomeIcon icon={faSquareInstagram} className={styles.icon} />
          </a>
          <a href="#" className={styles.socialLink}>
            <span className="sr-only">Twitter</span>
            <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
          </a>
          <a href="#" className={styles.socialLink}>
            <span className="sr-only">LinkedIn</span>
            <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
