import React, { useState } from "react";
import styles from "./Gallery.module.scss";
import DivComponent from "../../Components/GalleryComp/DivComponent";
import ImgPop from "../../Components/GalleryComp/ImgPop";
const Gallery = () => {
  const images = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788035/Property_1_1_ivsgaw.jpg?_s=public-apps",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788013/Property_1_2_d79j4h.jpg?_s=public-apps",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788017/Property_1_3_o4ymlp.jpg?_s=public-apps",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788016/Property_1_4_zqukek.jpg?_s=public-apps",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788037/Property_1_5_ui5l7q.jpg?_s=public-apps",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788058/Property_1_6_axme5t.jpg?_s=public-apps",
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788029/Property_1_7_jbhwhm.jpg?_s=public-apps",
    },
    {
      id: 8,
      url: "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788035/Property_1_1_ivsgaw.jpg?_s=public-apps",
    },
    {
      id: 9,
      url: "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788056/Property_1_8_nfuvh5.jpg?_s=public-apps",
    },
    {
      id: 10,
      url: "https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710788017/Property_1_3_o4ymlp.jpg?_s=public-apps",
    },
  ];

  // const [scrollPosition, setScrollPosition] = useState(0);
  const nameCount = images.length;
  const [imgPop, setImgPop] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [flower, setFlower] = useState(false);

  // setImgUrl("helo");

  // console.log(imgUrl,"image Url");

  setTimeout(() => {
    setFlower(true);
  }, 100);

  return (
    <div
      className={`${styles.AppContainer} min-h-[100vh] relative py-[4rem]`}
      style={{ background: "linear-gradient(111deg, #FFD0C6 5.11%, #FFE2A9 90.22%)" }}
    >
      <div className={styles.Wrapper}>
        <div className={`h-[13rem] overflow-x-hidden ${styles.scrollContainer}`}>
          <div className={`flex overflow-x-hidden  ${styles.scrollWraper}`}>
            {[...Array(nameCount * 100)].map((image, index) => (
              <DivComponent
                key={images[index % nameCount].id}
                name={images[index % nameCount].url}
                setImgUrl={setImgUrl}
                setImgPop={setImgPop}
              />
            ))}
          </div>
          <ImgPop imgUrl={imgUrl} imgPop={imgPop} setImgPop={setImgPop} />
        </div>

        <div className=" w-[18rem] sm:w-[22rem] md:w-[39rem] h-fit mx-auto my-[3rem] md:my-[unset]">
          <img
            className={`transition-all duration-[2000ms] md:duration-[4000ms] ease-in-out ${flower ? "scale-[.7]" : " "}`}
            src="https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710793889/Group_2608609_1_p0nsnp.jpg?_s=public-apps"
            alt="Featured property "
          />
        </div>

        <div className={` h-[13rem] overflow-x-hidden ${styles.scrollContainer}`}>
          <div className={`flex  overflow-x-hidden ${styles.scrollWraper2}`}>
            {[...Array(nameCount * 100)].map((_, index) => (
              <DivComponent
                key={images[index % nameCount].id}
                name={images[index % nameCount].url}
                setImgUrl={setImgUrl}
                setImgPop={setImgPop}
              />
            ))}
          </div>
          <ImgPop imgUrl={imgUrl} imgPop={imgPop} setImgPop={setImgPop} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
