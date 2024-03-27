import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "./Loading.module.scss";
// import loaderlottie from './posua24loaderjson.json'
import projector from "../../assets/lottie/projector.json";

const Loading = () => {
  return (
    <main id={styles.loadingtopmain}>
      <Player
        className={styles.butterfly}
        autoplay
        loop
        src={projector}
        id={styles.lottie}
        // style={{ height: "auto", width: "100px" }}
      ></Player>
      {/* <p>Loading...</p> */}
    </main>
  );
};

export default Loading;
