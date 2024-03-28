import React from "react";
import styles from "./ScrollerJapi.module.scss";
const ScrollerJapi = ({ type, windowSize }) => {
  return (
    <div>
      <div
        className={`${styles.ScrollerJapiClass} ${type !== "hero" && windowSize < 660 && "hidden"}`}
      >
        <img
          alt="Line"
          src="https://res.cloudinary.com/dl0knguhb/image/upload/v1711315135/Vector_1_euyeze.png"
          className={styles.ImgLine}
        />
        <img
          alt="Circle"
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1711609115/Group_julcxm-min_lxhrhu.webp"
          className={styles.ImgCircle}
        />
      </div>
    </div>
  );
};
export default ScrollerJapi;
