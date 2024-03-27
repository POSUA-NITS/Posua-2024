import React, { useState, useEffect } from "react";
import ScrollerJapi from "../../Pages/Invitation/ScrollerJapi";
import styles from "./Hero.module.scss";

const Hero = () => {
  const [stopAnimation, setStopAnimation] = useState(false);
  const [windowSize, setWindowSize] = useState();
  const rhino =
    "https://res.cloudinary.com/dex25uzgp/image/upload/v1711377908/Posua/rhino-kela_r0cmqd.gif";
  const startAnimation = () => {
    setTimeout(() => {
      setStopAnimation(true);
    }, 4000);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleSize = () => {
        setWindowSize(window.innerWidth);
      };

      window.addEventListener("resize", handleSize);
      handleSize();

      return () => {
        window.removeEventListener("resize", handleSize);
      };
    }
    return () => {};
  }, []);

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className=" h-[100vh] w-[100vw] flex justify-center items-center">
      {!stopAnimation && (
        <div
          className={`${styles.main} bg-white z-[10000] h-[100vh] w-[100vw] flex justify-center items-center absolute top-0`}
        >
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711272596/VectorOuterMostMost_oerg7f.jpg?_s=public-apps"
            className={`${styles.jungle_outer1} absolute flex justify-center items-center z-[100]  h-[100vh] w-[100vw]`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711269677/VectorOutermost_rkwlvo.jpg?_s=public-apps"
            className={`${styles.jungle_left} absolute flex justify-center items-center z-[95]  bottom-0 h-[100vh] w-[55vw]`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711269678/VectorSecondOutermost_cjdvya.jpg?_s=public-apps"
            className={`${styles.jungle_outer2} absolute flex justify-center items-center z-[90] bg-cover bottom-0`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711269677/VectorSecondOuterMost_1_swsgwq.jpg?_s=public-apps"
            className={`${styles.jungle_right} absolute flex justify-center items-center z-[90] bg-cover h-[100vh] w-[50vw]`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711269677/VectorInnerJungle_dmiukg.jpg?_s=public-apps"
            className={`${styles.jungle_outer2} absolute flex justify-center items-center z-[80] bg-cover h-[100vh] w-[100vw]`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711275079/VectorCircularJungle_qid5ru.jpg?_s=public-apps"
            className={`${styles.jungle_outerCircular} absolute flex justify-center items-center z-[70] bg-cover h-[100vh] w-[50vw]`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711273335/VectorSecondInnerMost_d06nij.jpg?_s=public-apps"
            className={`${styles.jungle_outer3} absolute flex justify-center items-center z-[60] bg-cover h-[100vh] w-[70vw]`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711275079/sunrayssunrays_lbtern.jpg?_s=public-apps"
            className={`${styles.jungle_sunrays} absolute flex justify-center items-center z-[20] `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711281983/GroupSunRaysGlow2_qpujrs.jpg?_s=public-apps"
            className={`${styles.jungle_rays} absolute flex justify-center items-center z-[100] `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711281983/GroupSunRaysGlow2_qpujrs.jpg?_s=public-apps"
            className={`${styles.jungle_rays} absolute flex justify-center items-center z-[100] `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711281983/GroupSunRaysGlow1_pl5tdl.jpg?_s=public-apps"
            className={`${styles.jungle_rays} absolute flex justify-center items-center z-[100] `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711281983/GroupSunRaysGlow1_pl5tdl.jpg?_s=public-apps"
            className={`${styles.jungle_rays} absolute flex justify-center items-center z-[80] `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711281984/GroupRays_nzqf91.jpg?_s=public-apps"
            className={`${styles.jungle_rays} absolute flex justify-center items-center z-[100]   `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711281984/GroupRays_nzqf91.jpg?_s=public-apps"
            className={`${styles.jungle_rays} absolute flex justify-center items-center z-[80]   `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711269677/VectorDimShine_t0h3pt.jpg?_s=public-apps"
            className={`${styles.jungle_outer4} absolute flex justify-center items-center z-[10] w-[80vw] h-[80vh] `}
            alt=""
          />
        </div>
      )}
      {windowSize > 800 && (
        <div className=" h-[100vh] w-100vw absolute left-0">
          <div
            className={`${styles.landing} h-[100vh] overflow-hidden flex justify-center absolute top-0`}
          >
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711420592/foreground_land_mygpzp_2_gxrznp.jpg?_s=public-apps"
              className={`${styles.land_bottom} absolute bottom-0 object-none md:object-contain min-h-[20vh] z-[90]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711431534/VectorSun_car4ft.jpg?_s=public-apps"
              className={`${styles.sun_shadow} absolute top-[20%] opacity-75`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711281990/VectorRayPoint_rgwhmn.jpg?_s=public-apps"
              className={`${styles.sun_main} flex justify-center items-start absolute overflow-x-hidden top-[-10vh] object-contain h-[100vh] z-[50]`}
              alt=""
            />
            <div className={`${styles.parrot_tree} `}>
              <img
                src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711420613/left_tree_and_bird_rvubsw_jtzfr3.jpg?_s=public-apps"
                className={`${styles.tree_bottom_left_L} absolute object-cover left-0 h-[101.8vh] z-[100] min-w-[300px]`}
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711378495/Posua/42294e317f79a7522006f73687ed11e5_rlbqiv.gif"
                className={`${styles.parrot} absolute left-0 top-[9vh] scale-[50%] z-[140]`}
                alt=""
              />
            </div>
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711420628/right_tree_nyoyhz_dlb1ke.jpg?_s=public-apps"
              className={`${styles.tree_bottom_right} absolute right-0 h-[130vh] w-[30vw] top-[-25vh] z-[100]  hidden lg:flex object-none lg:object-cover`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711420623/right_background_rocks_kudvrf_vx3c7k.jpg?_s=public-apps"
              className={`${styles.joonghol_right} absolute h-[65vh] w-[45vw] top-[20vh] right-0 z-[60]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711427137/huts_and_palm_trees_rvfglj_tnaj4f.jpg?_s=public-apps"
              className={`${styles.huts} absolute top-[25vh] h-[65vh] w-[60vw] left-[-10px] z-[60]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711432309/Vector_14Cloud_L2R_yx6zft.jpg?_s=public-apps"
              className={`${styles.cloud_L2R} absolute top-[25vh] scale-[70%] w-[60vw] flex justify-center items-center z-[40] overflow-hidden`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711432309/Vector_15Cloud_R2L_tcmqol.jpg?_s=public-apps"
              className={`${styles.cloud_R2L} absolute top-[0] w-[60vw] scale-[55%] flex justify-center items-center z-[50] overflow-hidden`}
              alt=""
            />
            <div className="rhino_bird w-[40vw] h-[40vh]">
              <img
                src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711420605/birds_on_rhino_cpbi3m_bke68u.jpg?_s=public-apps"
                className={`${styles.cranes} z-[71] absolute top-[49vh] left-[62vw] rotate-[-5deg] ${windowSize > 800 && windowSize < 1136 && "w-[10%] mt-[5vh]"}`}
                alt=""
              />
              <img
                src={rhino}
                alt="rhino"
                className={`${styles.rhino} z-[70] absolute top-[16vh] left-[17vw] w-[100vw] scale-[23%] min-w-[200px] h-[100vh]`}
              />
              <img
                src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711446167/rhino-kela_2rhino_Shadow_wcx9qw.jpg?_s=public-apps"
                className={`${styles.rhino_shadow} z-[70] absolute top-[33vh] left-[17vw] w-[100vw] scale-[23%] min-w-[200px] h-[100vh]`}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
      {stopAnimation && (
        <div className="animation_slideInto flex justify-center items-start">
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711502926/posua_logo_1_to45u1.jpg?_s=public-apps"
            className={`${styles.posua_logo_mobile} absolute flex justify-center items-start object-contain overflow-hidden h-[60vh] w-[100vw] z-[49] left-5 top-[0%]`}
            alt=""
          />
          <div
            className={`${styles.jaapi_arrow} absolute z-[55] top-[40vh] sm:top-[50] flex-col justify-center items-center text-center  ${windowSize > 440 ? "left-[30%]" : "left-[25%]"} sm:left-[40%]`}
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          >
            <div>
              <ScrollerJapi type="hero" windowSize={windowSize} />
            </div>
            <div className={`${styles.Jaapi_text} text-white text-lg z-[49] mt-[-50px] `}>
              Slide Down
            </div>
          </div>
        </div>
      )}

      {windowSize < 800 && (
        <div className=" h-[100vh] w-[100vw] ">
          <div
            className={`${styles.landing} h-[100vh] w-[100vw] object-contain flex justify-center items-start absolute top-0`}
          >
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711420592/foreground_land_mygpzp_2_gxrznp.jpg?_s=public-apps"
              className={`${styles.land_bottom} absolute bottom-0 min-h-[100px] ${windowSize < 640 && "object-cover"} z-[90]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711281990/VectorRayPoint_rgwhmn.jpg?_s=public-apps"
              className={`${styles.sun_main} top-[-10vh] object-contain h-[100vh] z-[50]`}
              alt=""
            />
            <div className={`${styles.parrot_tree} `}>
              <img
                src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711520127/trreefrontTree_front_mobile_emjsrd.jpg?_s=public-apps"
                className={`${styles.tree_bottom_left_mobile} absolute object-cover scale-x-80 left-[-3vh] h-[100vh] z-[100]`}
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711378495/Posua/42294e317f79a7522006f73687ed11e5_rlbqiv.gif"
                className={`${styles.parrot} absolute left-[-80px] ${windowSize < 360 && "mt-10"} h-[50vh] scale-[60%] z-[140]`}
                alt=""
              />
            </div>
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711431534/VectorSun_car4ft.jpg?_s=public-apps"
              className={`${styles.sun_shadow} absolute top-[7.5vh] object-contain h-[100vh] w-[50vw] opacity-75`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711420623/right_background_rocks_kudvrf_vx3c7k.jpg?_s=public-apps"
              className={`${styles.joonghol_right} absolute h-[75vh] scale-50 object-contain right-[-25vw] top-[20vh] z-[60]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711427137/huts_and_palm_trees_rvfglj_tnaj4f.jpg?_s=public-apps"
              className={`${styles.huts} absolute top-[25vh] h-[75vh] object-contain scale-150 w-[70vw] left-[-10px] z-[60]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711432309/Vector_14Cloud_L2R_yx6zft.jpg?_s=public-apps"
              className={`${styles.cloud_L2R} absolute top-[30vh] scale-[70%] w-[60vw] flex justify-center items-center z-[40] overflow-hidden`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711432309/Vector_15Cloud_R2L_tcmqol.jpg?_s=public-apps"
              className={`${styles.cloud_R2L} absolute top-[10vh] w-[60vw] scale-[55%] flex justify-center items-center z-[50] overflow-hidden`}
              alt=""
            />
            <div className={`${styles.crane_rhino} flex-col justify-center`}>
              <img
                src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711420605/birds_on_rhino_cpbi3m_bke68u.jpg?_s=public-apps"
                className={`${styles.cranes} w-[40vw] scale-[20%] z-[70] absolute min-w-[140px]  ${windowSize > 360 ? " left-[48%] top-[58.5vh]" : "left-[58vw] top-[59vh]"} rotate-[-10deg] h-[15vh]`}
                alt=""
              />
              <img
                src={rhino}
                alt="rhino"
                className={`${styles.rhino} z-[70] absolute top-[58vh] left-[45vw] w-[40vw] scale-[50%] min-w-[200px] h-[30vh]`}
              />
            </div>
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711446167/rhino-kela_2rhino_Shadow_wcx9qw.jpg?_s=public-apps"
              className={`${styles.rhino_shadow} z-[70] absolute top-[68vh] left-[45vw] w-[40vw] scale-[50%] min-w-[200px] h-[30vh]`}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
