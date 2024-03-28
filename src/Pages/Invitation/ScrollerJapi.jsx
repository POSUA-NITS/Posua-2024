import React from "react";
import styles from "./ScrollerJapi.module.scss";
const ScrollerJapi = () => {
  return (
    <div>
      <div className={styles.ScrollerJapiClass}>
        <img
          alt="Line"
          src="https://res.cloudinary.com/dl0knguhb/image/upload/v1711315135/Vector_1_euyeze.png"
          className={styles.ImgLine}
        />
        <img
          alt="Circle"
          src="https://res.cloudinary.com/dl0knguhb/image/upload/v1711315135/Group_julcxm.png"
          className={styles.ImgCircle}
        />
      </div>
    </div>
  );
};
export default ScrollerJapi;
