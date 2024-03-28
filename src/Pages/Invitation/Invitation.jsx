/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-arrow-callback */
import { useState, useEffect } from "react";

import LottieHeading from "../../Components/LottieHeading/LottieHeading";
import styles from "./Invitation.module.scss";
// import InvitationPepa from "./InvitationPepa";
import ScrollerJapi from "./ScrollerJapi";
const Invitation = () => {
  /*  implementing lazy load via ioa */
  const config = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.2,
  };

  const [loaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const observer = new window.IntersectionObserver(function (entries, self) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImages(entry.target);
          self.unobserve(entry.target);
        }
      });
    }, config);
    const imgs = document.querySelectorAll("[data-src]");
    imgs.forEach((img) => {
      observer.observe(img);
    });
    return () => {
      imgs.forEach((img) => {
        observer.unobserve(img);
      });
    };
  });

  const loadImages = (image) => {
    image.src = image.dataset.src;
  };

  return (
    <div className={styles.superParent}>
      <div className={styles.InvitationClass}>
        <div id={styles.leftrangoliholderinvi}>
          <img
            src=""
            data-src="https://res.cloudinary.com/dp92qug2f/image/upload/v1711607934/leftrangoli_jp6whi-min_eicyyv.webp"
            className={loaded ? "loadedClass" : "loadingClass"}
            onLoad={() => setIsLoaded(true)}
            alt=""
          />
        </div>

        <div id={styles.rightrangoliholderinvi}>
          <img
            src=""
            data-src="https://res.cloudinary.com/dp92qug2f/image/upload/v1711608053/rightrangoli_jvpnus-min_h2l42o.webp"
            className={loaded ? "loadedClass" : "loadingClass"}
            onLoad={() => setIsLoaded(true)}
            alt=""
          />
        </div>

        <LottieHeading title="INVITATION" />
        <div className={styles.InvitationImage}>
          <img
            alt=""
            src=""
            data-src="https://res.cloudinary.com/dp92qug2f/image/upload/v1711643604/Posua_24-min_deytzq.webp"
            className={`${loaded ? "loadedClass" : "loadingClass"} ${styles.img}`}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
        <ScrollerJapi type="invitation" windowSize={window.innerWidth} />
        {/* <div id={styles.cicularrangoliholder}>
          <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1711462263/hald_rangoli_posua_24_fbsywv.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};
export default Invitation;
