import { Link } from "react-router-dom";
import styles from "./header.module.css";
import { IoCartOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.header}>
      <div><FaReact className={styles.reactIcon} /></div>
      <ul>
        <li>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/Catalog" className={styles.link}>
            Catalog
          </Link>
        </li>
        <li>
          <Link to="/About" className={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link to="/Contacts" className={styles.link}>
            Contacts
          </Link>
        </li>
      </ul>
      <div className={styles.cart}>
        <Link to="/Cart" className={styles.link}>
        <IoCartOutline />
        </Link>
      </div>
    </div>
  );
};

export default Header;
