/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-arrow-callback */

import { useState, useEffect } from "react";
import LottieHeading from "../../Components/LottieHeading/LottieHeading";
import styles from "./About.module.scss";
const About = () => {
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
    <div>
      <div className={styles.AboutClass}>
        <div id={styles.leftrangoliholder}>
          <img
            src=""
            data-src="https://res.cloudinary.com/dp92qug2f/image/upload/v1711607934/leftrangoli_jp6whi-min_eicyyv.webp"
            className={loaded ? "loadedClass" : "loadingClass"}
            onLoad={() => setIsLoaded(true)}
            alt=""
          />
        </div>

        <div id={styles.rightrangoliholder}>
          <img
            src=""
            data-src="https://res.cloudinary.com/dp92qug2f/image/upload/v1711608053/rightrangoli_jvpnus-min_h2l42o.webp"
            className={loaded ? "loadedClass" : "loadingClass"}
            onLoad={() => setIsLoaded(true)}
            alt=""
          />
        </div>
        <LottieHeading title="ABOUT US" />
        {/* <div id={styles.pepaimgholder}>
          <img
            src="https://res.cloudinary.com/dl0knguhb/image/upload/v1711212131/Frame_5_kuyfe0.png"
            alt=""
          />
        </div> */}
        <div className={styles.AboutText}>
          <p>
            POSUA, the spring fest of NIT Silchar, spreads out exuberance all around with
            the arrival of spring rejuvenating the land. This ecstatic grandeur lets us
            enliven the beauteous culture of the land of Assam with joyful activities
            bringing out the heritages and indispensable indigenous traditions. In this
            perfect period, POSUA brings a plethora of events to celebrate the cultural
            splendour of ‘Bor Axom’. Protidhwoni reverberates the campus with zestful
            spirit of ‘Husori dols; ‘Bordoisila’ would leave you in awe with the
            scintillating performance of ‘gabhorus’ in golden silk; ‘Krishti’ will dive
            you through the diverse culture and traditions of Barak and Brahmaputra
            Valley; ‘Gunjan’ will stir your soul with rhythms and vibrance of open
            ‘Husori’; ‘Parikrama’ would take you to the ethnic wonders woven in the taat
            xaal of Axomiya xipinis; ‘Abhijatri’ have the diversities of this wonderful
            cultural land marching together in unity; ‘RongGhar’ Bakori awaits for the
            indigenous games and fun activities, taking us back to the cultural roots;
            ‘Ankuran’ blends the innocence of kids with the richness of culture with
            joyful bihu moves and glee in their performance; ‘RongTulika’ brings out the
            imagination of young minds on canvas filled with bright colours; ‘Borhomthuri’
            the annual souvenir assembles enthralling literally pieces reflecting the
            literary skills of youth; the campus anticipates for ‘Manthan’ to sway to the
            awe-bound performance of amazing artists.
          </p>
        </div>

        <div id={styles.cicularrangoliholder}>
          <img
            src=""
            data-src="https://res.cloudinary.com/dp92qug2f/image/upload/v1711288702/rangoli_404_posua_d0je3u.png"
            className={loaded ? "loadedClass" : "loadingClass"}
            onLoad={() => setIsLoaded(true)}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default About;
