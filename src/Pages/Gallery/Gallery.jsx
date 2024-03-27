import React, { useState } from "react";
import styles from "./Gallery.module.scss";
import DivComponent from "../../Components/GalleryComp/DivComponent";
import ImgPop from "../../Components/GalleryComp/ImgPop";
import useSetTitle from "../../Hooks/SetTitle";
import LottieHeading from "../../Components/LottieHeading/LottieHeading";
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
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782905/POSUA%20Gallery/2021/p87_1_z26am8.webp",
    },
    {
      id: 6,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782905/POSUA%20Gallery/2021/p57_1_tlkow7.webp",
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
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782904/POSUA%20Gallery/2021/p28_1_w1veyn.webp",
    },
    {
      id: 11,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677847937/POSUA%20Gallery/2018/p178_-_Copy_fjnl8l.webp",
    },
    {
      id: 12,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782904/POSUA%20Gallery/2021/p38_2_rb1uin.webp",
    },
    {
      id: 13,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677847519/POSUA%20Gallery/2021/p61_Small_hpddcy.webp",
    },
    {
      id: 14,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56622560_2285129651551487_8015484988197699584_n_xqygo0.webp",
    },
    {
      id: 15,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783238/POSUA%20Gallery/2019/56852764_2285148264882959_2544134228656783360_n_vaau9j.webp",
    },
    {
      id: 16,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56387502_262527601367542_4087657569743536128_n_f4gpgm.webp",
    },

    {
      id: 17,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56232280_2285119674885818_7328361491525009408_n_eitbdg.webp",
    },
    {
      id: 18,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677847937/POSUA%20Gallery/2018/p178_-_Copy_fjnl8l.webp",
    },
    {
      id: 19,
      url: " https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677782904/POSUA%20Gallery/2021/p55_1_q1nxuk.webp",
    },
    {
      id: 20,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783141/POSUA%20Gallery/2016/p131_1_qfggwi.webp",
    },
    {
      id: 21,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56242463_2285149308216188_8148921002085056512_n_xkfthk.webp",
    },
    {
      id: 22,
      url: "https://res.cloudinary.com/dhoi8bcqz/image/upload/v1677783237/POSUA%20Gallery/2019/56232280_2285119674885818_7328361491525009408_n_eitbdg.webp",
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

        <div
          className={`w-[18rem] sm:w-[22rem] md:w-[39rem] h-fit mx-auto my-[3rem] md:my-[unset] transition-all duration-[2000ms] md:duration-[4000ms] ease-in-out ${flower ? "scale-[1.15] md:scale-[.85]" : "scale-[1.4] md:scale-[1.2]"}  ${styles.parentholder} `}
        >
          {/* <img
            className={`transition-all duration-[2000ms] md:duration-[4000ms] ease-in-out ${
              flower ? "scale-[1.15] md:scale-[.85]" : "scale-[1.4] md:scale-[1.2]"
            }`}
            src="https://res.cloudinary.com/dlyo7ec6c/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710793889/Group_2608609_1_p0nsnp.jpg?_s=public-apps"
            alt="Featured property "
          /> */}

          <LottieHeading title="GALLERY" />
          <div id={styles.rangoliholder}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1711288702/rangoli_404_posua_d0je3u.png"
              alt=""
            />
          </div>

          <div id={styles.bothimgholder}>
            <div id={styles.sideflowerholder}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1711483479/sideflower_stcy99.png"
                alt=""
              />
            </div>

            <div id={styles.reversesideflowerholder}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1711483479/sideflower_stcy99.png"
                alt=""
              />
            </div>
          </div>
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
