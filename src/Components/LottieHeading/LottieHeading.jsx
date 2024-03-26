import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./Heading.module.scss";
import musicalnoteslottie from "../../assets/lottie/musicalnotes.json";

const LottieHeading = ({ title }) => {
  return (
    <div id={styles.maintop}>
      <div id={styles.flexholder}>
        <Player
          className={styles.butterfly}
          autoplay
          loop
          src={musicalnoteslottie}
          id={styles.lottie}
        ></Player>

        <Player
          className={styles.butterfly}
          autoplay
          loop
          src={musicalnoteslottie}
          id={styles.lottie1}
        ></Player>
      </div>
      <div id={styles.titletext}>
        <h1>{title}</h1>
        {/* <h1>ABOUT US</h1> */}
      </div>
    </div>
  );
};

export default LottieHeading;
