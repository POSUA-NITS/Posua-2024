import React from "react";
import styles from "./Gallery.module.scss";
const Gallery = () => {
  const images = [
    "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788035/Property_1_1_ivsgaw.jpg?_s=public-apps",
    "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788013/Property_1_2_d79j4h.jpg?_s=public-apps",
    "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788017/Property_1_3_o4ymlp.jpg?_s=public-apps",
    "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788016/Property_1_4_zqukek.jpg?_s=public-apps",
    "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788037/Property_1_5_ui5l7q.jpg?_s=public-apps",
    "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788058/Property_1_6_axme5t.jpg?_s=public-apps",
    "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788029/Property_1_7_jbhwhm.jpg?_s=public-apps",
    "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788035/Property_1_1_ivsgaw.jpg?_s=public-apps",
    "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788056/Property_1_8_nfuvh5.jpg?_s=public-apps",
    "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788017/Property_1_3_o4ymlp.jpg?_s=public-apps",
  ];

  return (
    <div className={styles.AppContainer}>
      <div className={styles.Wrapper}>
        <div className={styles.ImgRow1}>
          {images.map((imageUrl, index) => (
            <div key={`image-${imageUrl}`} className={styles.ImgRow12}>
              <img
                src={imageUrl}
                alt={`Property  ${index + 1}`}
                className="img"
                style={{ padding: "1rem" }}
              />
            </div>
          ))}
        </div>

        <div className={styles.single}>
          <img
            className="img"
            src="https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710793889/Group_2608609_1_p0nsnp.jpg?_s=public-apps"
            alt="Featured property "
            // style={{ height: "26vh", width: "33vw" }}
          />
        </div>

        <div className={styles.ImgRow2}>
          {images.map((imageUrl, index) => (
            <div key={`image-row2-${imageUrl}`} className={styles.ImgRow12}>
              <img
                src={imageUrl}
                alt={`Property  row 2, item ${index + 1}`}
                className="img"
                style={{ padding: "1rem" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
