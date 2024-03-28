/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-arrow-callback */

import { useState, useEffect } from "react";
import styles from "./Borhomthuri.module.scss";
import data from "../../assets/Edition.json";
import LottieHeading from "../LottieHeading/LottieHeading";

const Borhomthuri = () => {
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
      <div className={styles.ParentClass}>
        {/* <Pepa /> */}
        <div id={styles.leftrangoliholder_borhom}>
          <img
            src=""
            data-src="https://res.cloudinary.com/dp92qug2f/image/upload/v1711607934/leftrangoli_jp6whi-min_eicyyv.webp"
            className={loaded ? "loadedClass" : "loadingClass"}
            onLoad={() => setIsLoaded(true)}
            alt=""
          />
        </div>

        <div id={styles.rightrangoliholder_borhom}>
          <img
            src=""
            data-src="https://res.cloudinary.com/dp92qug2f/image/upload/v1711608053/rightrangoli_jvpnus-min_h2l42o.webp"
            className={loaded ? "loadedClass" : "loadingClass"}
            onLoad={() => setIsLoaded(true)}
            alt=""
          />
        </div>
        <div id={styles.pepaholder}>
          <LottieHeading title="BORHOMTHURI" />
        </div>
        {/* <Film /> */}
        {/* <Card/> */}
        {/* <FrontCover/> */}
        <div className={styles.Child1}>
          <div className={styles.text}>
            <p className={styles.p}>
              Borhomthuri is the annual souvenir of POSUA.It enfolds indispensable parts
              of Assamese Culture and also the emotions of students in the form of
              enthralling articles,poems,stories and sketches.Borhomthuri reflects the
              ardour of NITS Family towards POSUA and provides an opportunity for the
              literary skills of students to get revived
            </p>
            <div className={styles.galleryBorhomthuri}>
              {data.map((item) => (
                <a
                  href={item.link}
                  rel="noopener"
                  target="_blank"
                  style={{ margin: "1.2rem" }}
                >
                  <img
                    src=""
                    data-src={item.src}
                    className={loaded ? "loadedClass" : "loadingClass"}
                    onLoad={() => setIsLoaded(true)}
                    alt="magazine"
                  />
                  <img
                    src=""
                    data-src={item.edition_num}
                    className={loaded ? "loadedClass" : "loadingClass"}
                    onLoad={() => setIsLoaded(true)}
                    alt="Edition"
                    style={{
                      margin: "0 auto",
                      padding: ".5rem",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          <div id={styles.camerathingsholder}>
            <div className={styles.cameraImg}>
              <img
                alt="Camera"
                src=""
                data-src="https://res.cloudinary.com/dp92qug2f/image/upload/v1711607582/camera_posua24_l7ndyp-min_o41997.webp"
                className={loaded ? "loadedClass" : "loadingClass"}
                onLoad={() => setIsLoaded(true)}
              />
            </div>

            <div id={styles.camerafoucs}>
              <img
                src=""
                data-src="https://res.cloudinary.com/dp92qug2f/image/upload/v1711607671/camera_focus_posua24_orhnta-min_o0quzy.webp"
                className={loaded ? "loadedClass" : "loadingClass"}
                onLoad={() => setIsLoaded(true)}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className={styles.child2}>
          <div className={styles.HiddenText}>
            <p>
              Borhomthuri is the annual souvenir of POSUA.It enfolds indispensable parts
              of Assamese Culture and also the emotions of students in the form of
              enthralling articles,poems,stories and sketches.Borhomthuri reflects the
              ardour of NITS Family towards POSUA and provides an opportunity for the
              literary skills of students to get revived
            </p>
          </div>
          <div className={styles.galleryBorhomthurimobile}>
            {data.map((item) => (
              <a
                href={item.link}
                rel="noopener"
                target="_blank"
                style={{ margin: "1.2rem" }}
              >
                <img
                  src=""
                  data-src={item.src}
                  className={loaded ? "loadedClass" : "loadingClass"}
                  onLoad={() => setIsLoaded(true)}
                  alt="magazine"
                />
                <img
                  src=""
                  data-src={item.edition_num}
                  className={loaded ? "loadedClass" : "loadingClass"}
                  onLoad={() => setIsLoaded(true)}
                  alt="Edition"
                  style={{
                    margin: "0 auto",
                    padding: ".5rem",
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Borhomthuri;
