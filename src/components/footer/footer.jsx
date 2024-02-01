import styles from "./footer.module.css";
import { FaReact } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.footerPosition}>
    <div className={styles.footer}>
      <FaReact className={styles.react_icon} />
      <div className={styles.footerText}>
        <p>Qamalladin univerisity </p>
      </div>
      <div className={styles.help}>
        <p>Help</p>
      </div>
    </div>
    </div>
  );
};
export default Footer;
