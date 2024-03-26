import React, { useState } from "react";
import styles from "./Gallery.module.scss";
import DivComponent from "../../Components/GalleryComp/DivComponent";
import ImgPop from "../../Components/GalleryComp/ImgPop";
import useSetTitle from "../../Hooks/SetTitle";
const Gallery = () => {
  useSetTitle("Gallery | Posua");
  const images = [
    {
      id: 1,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860464/POSUA%20Gallery/2022/7_cuyswy.webp",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/1_l5lxsh.webp",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/4_a2zaqn.webp",
    },
    {
      id: 4,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860464/POSUA%20Gallery/2022/5_dr0zbx.webp",
    },
    {
      id: 5,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860464/POSUA%20Gallery/2022/7_cuyswy.webp",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/1_l5lxsh.webp",
    },
    {
      id: 7,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860465/POSUA%20Gallery/2022/6_kdcdkk.webp",
    },
    {
      id: 8,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/2_l9hzlz.webp",
    },
    {
      id: 9,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860463/POSUA%20Gallery/2022/3_gdter6.webp",
    },
    {
      id: 10,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677860464/POSUA%20Gallery/2022/5_dr0zbx.webp",
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
    <div className={`${styles.AppContainer} min-h-[100vh] relative py-[4rem]`}>
      <div className={styles.Wrapper}>
        <div className={`h-[13rem] overflow-x-hidden ${styles.scrollContainer}`}>
          <div className={`flex overflow-x-hidden   ${styles.scrollWraper}`}>
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
            className={`transition-all duration-[2000ms] md:duration-[4000ms] ease-in-out ${
              flower ? "scale-[1.15] md:scale-[.85]" : "scale-[1.4] md:scale-[1.2]"
            }`}
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
