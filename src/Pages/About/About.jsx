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
            Posua, the wind that brings rain to the dry and parched earth, an aroma of
            sweetness which brings the promise of spring. The advent of Posua ushers a
            sense of brotherhood in us, the richness of our region united under the same
            shed. We, the students of NITS, through Posua, aim to demonstrate our rich
            cultural heritage, showcase different segments and bless the stage with the
            fragrance of our uniqueness, to show everyone the pride that we feel as
            offsprings of our motherland. It’s an exhibition of our love towards our land
            and its people, a homage to our roots, humble yet unique in every aspect,a
            source of pride and ecstasy. Posua isn’t just a festival, it has evolved into
            something bigger, a statement to all the people, a platform for
            self-actualisation, embracement of our identity. This time ,like every other
            time we aim to raise the bar and salve the ambiance with mirth and solace
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
