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
    <div className=" h-[100vh] w-[100vw] flex justify-center items-center top-0">
      {!stopAnimation && (
        <div
          className={`${styles.main} bg-white z-[10000] h-[100vh] w-[100vw] flex justify-center items-center absolute top-0`}
        >
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649093/VectorOuterMostMost_oerg7f_wq2egq.jpg?_s=public-apps"
            className={`${styles.jungle_outer1} absolute flex justify-center items-center z-[100] h-[100vh] w-[100vw]`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649095/VectorOutermost_rkwlvo_ikkove.jpg?_s=public-apps"
            className={`${styles.jungle_left} absolute flex justify-center items-center z-[95]  bottom-0 h-[100vh] w-[55vw]`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711269678/VectorSecondOutermost_cjdvya.jpg?_s=public-apps"
            className={`${styles.jungle_outer2} absolute flex justify-center items-center z-[90] bg-cover bottom-0`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649094/VectorSecondOuterMost_1_swsgwq_fux0vp.jpg?_s=public-apps"
            className={`${styles.jungle_right} absolute flex justify-center items-center z-[90] bg-cover h-[100vh] w-[50vw]`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649094/VectorInnerJungle_dmiukg_nwnw3v.jpg?_s=public-apps"
            className={`${styles.jungle_outer2} absolute flex justify-center items-center z-[80] bg-cover h-[100vh] w-[100vw]`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649094/VectorCircularJungle_qid5ru_gosk7w.jpg?_s=public-apps"
            className={`${styles.jungle_outerCircular} absolute flex justify-center items-center z-[70] bg-cover h-[100vh] w-[50vw]`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649093/VectorSecondInnerMost_d06nij_ypgztg.jpg?_s=public-apps"
            className={`${styles.jungle_outer3} absolute flex justify-center items-center z-[60] bg-cover h-[100vh] w-[70vw]`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649098/sunrayssunrays_lbtern_ow4prt.jpg?_s=public-apps"
            className={`${styles.jungle_sunrays} absolute flex justify-center items-center z-[20] `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649095/GroupSunRaysGlow2_qpujrs_uvig4v.jpg?_s=public-apps"
            className={`${styles.jungle_rays} absolute flex justify-center items-center z-[100] `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649095/GroupSunRaysGlow2_qpujrs_uvig4v.jpg?_s=public-apps"
            className={`${styles.jungle_rays} absolute flex justify-center items-center z-[100] `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649095/GroupSunRaysGlow1_pl5tdl_zts7i1.jpg?_s=public-apps"
            className={`${styles.jungle_rays} absolute flex justify-center items-center z-[100] `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649095/GroupSunRaysGlow1_pl5tdl_zts7i1.jpg?_s=public-apps"
            className={`${styles.jungle_rays} absolute flex justify-center items-center z-[80] `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649095/GroupRays_nzqf91_qv2sra.jpg?_s=public-apps"
            className={`${styles.jungle_rays} absolute flex justify-center items-center z-[100]   `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649095/GroupRays_nzqf91_qv2sra.jpg?_s=public-apps"
            className={`${styles.jungle_rays} absolute flex justify-center items-center z-[80]   `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649094/VectorDimShine_t0h3pt_frp6hn.jpg?_s=public-apps"
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
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711654537/foreground_land_n6iyl8.jpg?_s=public-apps"
              className={`${styles.land_bottom} absolute bottom-0 object-none md:object-contain min-h-[20vh] z-[90]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649095/VectorSun_car4ft_jpcir2.jpg?_s=public-apps"
              className={`${styles.sun_shadow} absolute top-[20%] opacity-75`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649096/VectorRayPoint_rgwhmn_fz1vrz.jpg?_s=public-apps"
              className={`${styles.sun_main} flex justify-center items-start absolute overflow-x-hidden top-[-10vh] object-contain h-[100vh] z-[50]`}
              alt=""
            />
            <div className={`${styles.parrot_tree} `}>
              <img
                src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711654536/left_tree_and_bird_ttvdmc.jpg?_s=public-apps"
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
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711654540/right_background_rocks_ka3vwd.jpg?_s=public-apps"
              className={`${styles.joonghol_right} absolute h-[65vh] w-[45vw] top-[20vh] right-[-5vw] z-[60]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711654537/huts_and_palm_trees_nneey6.jpg?_s=public-apps"
              className={`${styles.huts} absolute top-[25vh] h-[65vh] w-[60vw] left-[-10px] z-[60]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649093/Vector_14Cloud_L2R_yx6zft_mcv3eb.jpg?_s=public-apps"
              className={`${styles.cloud_L2R} absolute top-[25vh] scale-[70%] w-[60vw] flex justify-center items-center z-[40] overflow-hidden`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649093/Vector_15Cloud_R2L_tcmqol_wgvx8b.jpg?_s=public-apps"
              className={`${styles.cloud_R2L} absolute top-[0] w-[60vw] scale-[55%] flex justify-center items-center z-[40] overflow-hidden`}
              alt=""
            />
            <div className="rhino_bird w-[40vw] h-[40vh]">
              <img
                src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711420605/birds_on_rhino_cpbi3m_bke68u.jpg?_s=public-apps"
                className={`${styles.cranes} z-[71]  absolute top-[49vh] left-[62vw] rotate-[-5deg] ${windowSize > 800 && windowSize < 1136 && "w-[10%] mt-[5vh]"}`}
                alt=""
              />
              <img
                src={rhino}
                alt="rhino"
                className={`${styles.rhino} z-[70] absolute top-[16vh] left-[17vw] w-[100vw] scale-[23%] min-w-[200px] h-[100vh]`}
              />
              <img
                src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649097/rhino-kela_2rhino_Shadow_wcx9qw_v147ty.jpg?_s=public-apps"
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
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649099/posua_logo_1_to45u1_llupko.jpg?_s=public-apps"
            className={`${windowSize < 800 ? `${styles.posua_logo_mobile} top-[3%] ` : `${styles.posua_logo} top-[0.6%]`} absolute flex justify-center items-start object-contain overflow-hidden h-[40vh] w-[100vw] z-[59] left-5 `}
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
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711654537/foreground_land_n6iyl8.jpg?_s=public-apps"
              className={`${styles.land_bottom} absolute bottom-0 min-h-[100px] ${windowSize < 640 && "object-cover"} z-[90]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649096/VectorRayPoint_rgwhmn_fz1vrz.jpg?_s=public-apps"
              className={`${styles.sun_main} top-[-10vh] object-contain h-[100vh] z-[50]`}
              alt=""
            />
            <div className={`${styles.parrot_tree} `}>
              <img
                src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649093/trreefrontTree_front_mobile_emjsrd_o3wqd4.jpg?_s=public-appshttps://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649093/trreefrontTree_front_mobile_emjsrd_o3wqd4.jpg?_s=public-apps"
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
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649095/VectorSun_car4ft_jpcir2.jpg?_s=public-apps"
              className={`${styles.sun_shadow} absolute top-[7.5vh] object-contain h-[100vh] w-[50vw] opacity-75`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711654540/right_background_rocks_ka3vwd.jpg?_s=public-apps"
              className={`${styles.joonghol_right} absolute h-[75vh] scale-50 object-contain right-[-30vw] top-[20vh] z-[60]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711654537/huts_and_palm_trees_nneey6.jpg?_s=public-apps"
              className={`${styles.huts} absolute top-[25vh] h-[75vh] object-contain scale-150 w-[70vw] left-[-10px] z-[60]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649093/Vector_14Cloud_L2R_yx6zft_mcv3eb.jpg?_s=public-apps"
              className={`${styles.cloud_L2R} absolute top-[30vh] scale-[70%] w-[60vw] flex justify-center items-center z-[40] overflow-hidden`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649093/Vector_15Cloud_R2L_tcmqol_wgvx8b.jpg?_s=public-apps"
              className={`${styles.cloud_R2L} absolute top-[10vh] w-[60vw] scale-[55%] flex justify-center items-center z-[40] overflow-hidden`}
              alt=""
            />
            <div className={`${styles.crane_rhino} flex-col justify-center`}>
              <img
                src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711654536/Mask_group_padgds.jpg?_s=public-apps"
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
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711649097/rhino-kela_2rhino_Shadow_wcx9qw_v147ty.jpg?_s=public-apps"
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
