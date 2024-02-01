import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import styles from "../about/about.module.css";

function About() {
  return (
    <div className={styles.about}>
      <Header />
      <div className={styles.aboutMain}>
        <div className={styles.clown}>
          <h1>Muratbekov "capernaum" Ali </h1>
          <img src="src/pages/about/pngegg (2).png" alt="My Image" />
        </div>
        <div className={styles.info}>
          I am Ali
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
