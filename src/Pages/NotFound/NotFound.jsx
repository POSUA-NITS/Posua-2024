import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NotFound.module.scss";
import useSetTitle from "../../Hooks/SetTitle";
const NotFound = () => {
  const navigate = useNavigate();
  const handleGoHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  useSetTitle("404 Not Found");

  return (
    <main id={styles.notfoundmain}>
      {/* 404 image */}
      {/* <div id={styles.img404}>
                <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1711287481/404_posua24_tktm6p.png" alt="" />
            </div> */}

      <div id={styles.notfoundcenter}>
        <div id={styles.first4}>
          <p>4</p>
        </div>
        <div id={styles.centerrangoli}>
          <img
            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1711288702/rangoli_404_posua_d0je3u.png"
            alt=""
          />
        </div>
        <div id={styles.second4}>
          <p>4</p>
        </div>
      </div>

      {/* 404 text and anchor tag */}
      <div id={styles.textholder404}>
        <p>We don’t know how you made it here, but</p>
      </div>

      {/* button to home */}
      <div id={styles.button404} onClick={handleGoHome}>
        <button>
          <p>Let&apos;s get you back home</p>
        </button>
      </div>
    </main>
  );
};

export default NotFound;
