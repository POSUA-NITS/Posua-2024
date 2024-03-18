import React from "react";
import styles from "./Gallery.module.scss";
const Gallery = () => {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg",
  ];

  return (
    <div className={styles.AppContainer}>
      <div className={styles.Wrapper}>
        <div className={styles.ImgRow1}>
          {images.map((element, index) => {
            return (
              <img
                src={element}
                alt=""
                className="img"
                style={{
                  background: index % 2 === 0 ? "yellow" : "blue",
                  padding: "10px",
                  width: "clamp(100px,20vw,400px)",
                  border: "2px solid black",
                }}
              />
            );
          })}
        </div>

        <div>
          <img
            src=""
            style={{ background: "red", height: "30vh", width: "40vw" }}
            alt=""
          />
        </div>

        <div className={styles.ImgRow2}>
          {images.map((element, index) => {
            return (
              <img
                src={element}
                alt=""
                className="img"
                style={{
                  background: index % 2 === 0 ? "yellow" : "blue",
                  padding: "10px",
                  width: "clamp(100px,20vw,400px)",
                  border: "2px solid black",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
