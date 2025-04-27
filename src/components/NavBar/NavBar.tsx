import { Link } from "react-router";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import { ClassList } from "../../Utils/Class-List/ClassList";
import styles from "./NavBar.module.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.desktopContainer}>
        {/* Logo */}
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="Architecturio Logo" className={styles.logo} />
          <span className={styles.brandName}>Architecturio</span>
        </Link>
        {/* Desktop menu */}
        <div className={styles.desktopMenu}>
          <Link to="/" className={styles.menuLink}>
            Home
          </Link>
          <Link to="/portfolio" className={styles.menuLink}>
            Portfolio
          </Link>
          <Link to="/contact" className={styles.menuLink}>
            Contact
          </Link>
        </div>
      </div>
      {/* Mobile menu button */}
      <div className={styles.mobileMenuButton}>
        <button className={ClassList(styles.button)} onClick={handleMenuToggle}>
          <span
            className={ClassList(
              styles.icon,
              isMenuOpen ? styles.closeIcon : ""
            )}
          >
            &nbsp;
          </span>
        </button>
      </div>
      {/* Mobile Menu Background */}
      <div
        className={ClassList(
          styles.mobileMenuBackground,
          isMenuOpen ? styles.open : ""
        )}
      ></div>
      {/* Mobile menu */}
      <div
        className={ClassList(styles.mobileMenu, isMenuOpen ? styles.open : "")}
      >
        <ul className={ClassList(styles.menuList)}>
          <li className={styles.menuItem}>
            <Link
              to="/"
              className={styles.menuLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link
              to="/portfolio"
              className={styles.menuLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link
              to="/contact"
              className={styles.menuLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
