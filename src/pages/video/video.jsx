import React from "react";
import BgVideo from "../video/kendall.mp4";
import styles from "../video/video.module.css";

const Landingpage = () => {
  return (
    <div className={styles.video__container}>
      <video className={styles.video} src={BgVideo} autoPlay loop muted />
    </div>
  );
};
export default Landingpage;
