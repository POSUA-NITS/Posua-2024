import React, { useState, useEffect } from "react";
import ScrollerJapi from "../../Pages/Invitation/ScrollerJapi";
import styles from "./Hero.module.scss";
import Leaves from "../LottieHeading/Leaves";

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
    <div className=" h-[100vh] w-[100vw] flex justify-center items-center top-0  select-none">
      {!stopAnimation && (
        <div
          className={`${styles.main} bg-white z-[10000] h-[100vh] w-[100vw] flex justify-center items-center absolute top-0`}
        >
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649093/VectorOuterMostMost_oerg7f_wq2egq.webp"
            className={`${styles.jungle_outer1} absolute flex justify-center items-center z-[100] h-[100vh] w-[100vw] pointer-events-none `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649095/VectorOutermost_rkwlvo_ikkove.webp"
            className={`${styles.jungle_left} pointer-events-none absolute flex justify-center items-center z-[95]  bottom-0 h-[100vh] w-[55vw]`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649095/VectorSecondOutermost_cjdvya_wujzbl.webp"
            className={`${styles.jungle_outer2} pointer-events-none absolute flex justify-center items-center z-[90] bg-cover bottom-0`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649094/VectorSecondOuterMost_1_swsgwq_fux0vp.webp"
            className={`${styles.jungle_right} pointer-events-none absolute flex justify-center items-center z-[90] bg-cover h-[100vh] w-[50vw]`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649094/VectorInnerJungle_dmiukg_nwnw3v.webp"
            className={`${styles.jungle_outer2} pointer-events-none absolute flex justify-center items-center z-[80] bg-cover h-[100vh] w-[100vw]`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649094/VectorCircularJungle_qid5ru_gosk7w.webp"
            className={`${styles.jungle_outerCircular} pointer-events-none absolute flex justify-center items-center z-[70] bg-cover h-[100vh] w-[50vw]`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649093/VectorSecondInnerMost_d06nij_ypgztg.webp"
            className={`${styles.jungle_outer3} pointer-events-none absolute flex justify-center items-center z-[60] bg-cover h-[100vh] w-[70vw]`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649098/sunrayssunrays_lbtern_ow4prt.webp"
            className={`${styles.jungle_sunrays} pointer-events-none absolute flex justify-center items-center z-[20] `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649095/GroupSunRaysGlow2_qpujrs_uvig4v.webp"
            className={`${styles.jungle_rays} pointer-events-none absolute flex justify-center items-center z-[100] `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649095/GroupSunRaysGlow2_qpujrs_uvig4v.webp"
            className={`${styles.jungle_rays} pointer-events-none absolute flex justify-center items-center z-[100] `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649095/GroupSunRaysGlow1_pl5tdl_zts7i1.webp"
            className={`${styles.jungle_rays} pointer-events-none absolute flex justify-center items-center z-[100] `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649095/GroupSunRaysGlow1_pl5tdl_zts7i1.webp"
            className={`${styles.jungle_rays} pointer-events-none absolute flex justify-center items-center z-[80] `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649095/GroupRays_nzqf91_qv2sra.webp"
            className={`${styles.jungle_rays} pointer-events-none absolute flex justify-center items-center z-[100]   `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649095/GroupRays_nzqf91_qv2sra.webp"
            className={`${styles.jungle_rays} pointer-events-none absolute flex justify-center items-center z-[80]   `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649094/VectorDimShine_t0h3pt_frp6hn.webp"
            className={`${styles.jungle_outer4} pointer-events-none absolute flex justify-center items-center z-[10] w-[80vw] h-[80vh] `}
            alt=""
          />
        </div>
      )}
      {windowSize > 800 && (
        <div className=" h-[100vh] w-100vw absolute left-0">
          <div
            className={`${styles.landing} h-[100vh] overflow-hidden flex justify-center absolute top-0`}
          >
            <Leaves windowSize={windowSize} />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/v1711654537/foreground_land_n6iyl8.webp"
              className={`${styles.land_bottom} pointer-events-none absolute bottom-0 object-none md:object-contain min-h-[20vh] z-[90]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649095/VectorSun_car4ft_jpcir2.webp"
              className={`${styles.sun_shadow} pointer-events-none absolute top-[20%] opacity-75`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649096/VectorRayPoint_rgwhmn_fz1vrz.webp"
              className={`${styles.sun_main} pointer-events-none flex justify-center items-start absolute overflow-x-hidden top-[-10vh] object-contain h-[100vh] z-[50]`}
              alt=""
            />
            <div className={`${styles.parrot_tree} `}>
              <img
                src="https://res.cloudinary.com/dy55sllug/image/upload/v1711654536/left_tree_and_bird_ttvdmc.webp"
                className={`${styles.tree_bottom_left_L} pointer-events-none absolute object-cover left-0 h-[101.8vh] z-[100] min-w-[300px]`}
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711378495/Posua/42294e317f79a7522006f73687ed11e5_rlbqiv.gif"
                className={`${styles.parrot} pointer-events-none absolute left-0 top-[9vh] scale-[50%] z-[140]`}
                alt=""
              />
            </div>
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/v1711654537/right_tree_yjqjzy.webp"
              className={`${styles.tree_bottom_right} pointer-events-none absolute right-0 h-[130vh] w-[30vw] top-[-25vh] z-[100]  hidden lg:flex object-none lg:object-cover`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/v1711654540/right_background_rocks_ka3vwd.webp"
              className={`${styles.joonghol_right} pointer-events-none absolute h-[65vh] w-[45vw] top-[20vh] right-[-5vw] z-[60]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/v1711654537/huts_and_palm_trees_nneey6.webp"
              className={`${styles.huts} pointer-events-none absolute top-[25vh] h-[65vh] w-[60vw] left-[-10px] z-[60]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649093/Vector_14Cloud_L2R_yx6zft_mcv3eb.webp"
              className={`${styles.cloud_L2R} pointer-events-none absolute top-[25vh] scale-[70%] w-[60vw] flex justify-center items-center z-[40] overflow-hidden`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649093/Vector_15Cloud_R2L_tcmqol_wgvx8b.webp"
              className={`${styles.cloud_R2L} pointer-events-none absolute top-[0] w-[60vw] scale-[55%] flex justify-center items-center z-[40] overflow-hidden`}
              alt=""
            />
            <div className="rhino_bird w-[40vw] h-[40vh]">
              <img
                src="https://res.cloudinary.com/dy55sllug/image/upload/v1711654536/Mask_group_padgds.webp"
                className={`${styles.cranes} z-[71]  pointer-events-none absolute top-[48.5vh] left-[62vw] w-[10vw] rotate-[-5deg] ${windowSize > 800 && windowSize < 1440 && "w-[10%] mt-[5vh]"}`}
                alt=""
              />
              <img
                src={rhino}
                alt="rhino"
                className={`${styles.rhino} pointer-events-none z-[70] absolute top-[16vh] left-[17vw] w-[100vw] scale-[23%] min-w-[200px] h-[100vh]`}
              />
              <img
                src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649097/rhino-kela_2rhino_Shadow_wcx9qw_v147ty.webp"
                className={`${styles.rhino_shadow} pointer-events-none z-[70] absolute top-[33vh] left-[17vw] w-[100vw] scale-[23%] min-w-[200px] h-[100vh]`}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
      {stopAnimation && (
        <div className="animation_slideInto flex justify-center items-start">
          <img
            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1711694217/ezgif-1-f0bbdc6570_qyfn2w.webp"
            className={`${windowSize < 800 ? `${styles.posua_logo_mobile} top-[3%] ` : `${styles.posua_logo} top-[0.6%]`}  pointer-events-none absolute flex justify-center items-start object-contain overflow-hidden h-[40vh] w-[100vw] z-[99] left-5 `}
            alt=""
          />
          <div
            className={`${styles.jaapi_arrow} absolute z-[49] top-[60vh] flex-col justify-center items-center text-center left-[45%]`}
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          >
            <ScrollerJapi />
          </div>
        </div>
      )}

      {windowSize < 800 && (
        <div className=" h-[100vh] w-[100vw] ">
          <div
            className={`${styles.landing} h-[100vh] w-[100vw] object-contain flex justify-center items-start absolute top-0`}
          >
            <Leaves windowSize={windowSize} />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/v1711654537/foreground_land_n6iyl8.webp"
              className={`${styles.land_bottom} pointer-events-none absolute bottom-0 min-h-[100px] ${windowSize < 640 && "object-cover"} z-[90]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649096/VectorRayPoint_rgwhmn_fz1vrz.webp"
              className={`${styles.sun_main} pointer-events-none top-[-10vh] object-contain h-[100vh] z-[50]`}
              alt=""
            />
            <div className={`${styles.parrot_tree} `}>
              <img
                src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649093/trreefrontTree_front_mobile_emjsrd_o3wqd4.webp"
                className={`${styles.tree_bottom_left_mobile} pointer-events-none absolute object-cover scale-x-80 left-[-3vh] h-[100vh] z-[100]`}
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711378495/Posua/42294e317f79a7522006f73687ed11e5_rlbqiv.gif"
                className={`${styles.parrot} pointer-events-none absolute left-[-80px] ${windowSize < 360 && "mt-10"} h-[50vh] scale-[60%] z-[140]`}
                alt=""
              />
            </div>
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649095/VectorSun_car4ft_jpcir2.webp"
              className={`${styles.sun_shadow} pointer-events-none absolute top-[7.5vh] object-contain h-[100vh] w-[50vw] opacity-75`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/v1711654540/right_background_rocks_ka3vwd.webp"
              className={`${styles.joonghol_right} pointer-events-none absolute h-[75vh] scale-50 object-contain right-[-30vw] top-[20vh] z-[60]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/v1711654537/huts_and_palm_trees_nneey6.webp"
              className={`${styles.huts} pointer-events-none absolute top-[25vh] h-[75vh] object-contain scale-150 w-[70vw] left-[-10px] z-[60]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649093/Vector_14Cloud_L2R_yx6zft_mcv3eb.webp"
              className={`${styles.cloud_L2R} pointer-events-none absolute top-[30vh] scale-[70%] w-[60vw] flex justify-center items-center z-[40] overflow-hidden`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649093/Vector_15Cloud_R2L_tcmqol_wgvx8b.webp"
              className={`${styles.cloud_R2L} pointer-events-none absolute top-[10vh] w-[60vw] scale-[55%] flex justify-center items-center z-[40] overflow-hidden`}
              alt=""
            />
            <div className={`${styles.crane_rhino} flex-col justify-center`}>
              <img
                src="https://res.cloudinary.com/dy55sllug/image/upload/v1711654536/Mask_group_padgds.webp"
                className={`${styles.cranes} w-[20vw] object-cover z-[71] absolute  ${windowSize > 360 ? " left-[63%] bottom-[28vh]" : "left-[63%] bottom-[28vh]"}  h-[auto] pointer-events-none`}
                alt=""
              />
              <img
                src={rhino}
                alt="rhino"
                className={`${styles.rhino} pointer-events-none z-[70] absolute bottom-[20vh] left-[45vw] w-[45vw]   h-[auto] object-cover`}
              />
            </div>
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/v1711649097/rhino-kela_2rhino_Shadow_wcx9qw_v147ty.webp"
              className={`${styles.rhino_shadow} pointer-events-none z-[70] absolute bottom-[12.7vh] left-[45vw] w-[45vw]   h-[auto] object-cover`}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
