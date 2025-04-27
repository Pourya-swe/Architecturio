import { Link } from "react-router";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className={styles.link}>
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
