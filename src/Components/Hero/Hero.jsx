import React, { useState, useEffect } from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  const [stopAnimation, setStopAnimation] = useState(false);
  const [delay, setDelay] = useState(false);
  const rhino =
    "https://res.cloudinary.com/dex25uzgp/image/upload/v1711377908/Posua/rhino-kela_r0cmqd.gif";
  const startAnimation = () => {
    setTimeout(() => {
      setStopAnimation(true);
    }, 4000);

    setTimeout(() => {
      setDelay(true);
    }, 4400);
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className=" h-[100vh]">
      {!stopAnimation && (
        <div
          className={`${styles.container} bg-white h-[110vh] w-[100vw] flex justify-center items-center overflow-hidden absolute top-0`}
        >
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711272596/VectorOuterMostMost_oerg7f.jpg?_s=public-apps"
            className={`${styles.jungle_outer1} absolute flex justify-center items-center z-[100] bg-cover h-[100vh] w-[100vw]`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711269677/VectorOutermost_rkwlvo.jpg?_s=public-apps"
            className={`${styles.jungle_left} absolute flex justify-center items-center z-[95] bg-cover bottom-0 h-[100vh] w-[55vw]`}
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
            className={`${styles.jungle_outer2} absolute flex justify-center items-center z-[80] bg-cover h-[100vh] w-[80vw]`}
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
            className={`${styles.jungle_rays} absolute flex justify-center items-center z-[100] bg-cover`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711281983/GroupSunRaysGlow2_qpujrs.jpg?_s=public-apps"
            className={`${styles.jungle_rays} absolute flex justify-center items-center z-[100] bg-cover`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711281983/GroupSunRaysGlow1_pl5tdl.jpg?_s=public-apps"
            className={`${styles.jungle_rays} absolute flex justify-center items-center z-[100] bg-cover`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711281983/GroupSunRaysGlow1_pl5tdl.jpg?_s=public-apps"
            className={`${styles.jungle_rays} absolute flex justify-center items-center z-[80] bg-cover`}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711281984/GroupRays_nzqf91.jpg?_s=public-apps"
            className={`${styles.jungle_rays} absolute flex justify-center items-center z-[100] bg-cover  `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711281984/GroupRays_nzqf91.jpg?_s=public-apps"
            className={`${styles.jungle_rays} absolute flex justify-center items-center z-[80] bg-cover  `}
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711269677/VectorDimShine_t0h3pt.jpg?_s=public-apps"
            className={`${styles.jungle_outer4} absolute flex justify-center items-center z-[10] w-[80vw] h-[80vh] bg-cover`}
            alt=""
          />
        </div>
      )}
      {stopAnimation && delay && (
        <div className=" h-[100vh] ">
          <div
            className={`${styles.landing} h-[100vh] overflow-hidden flex justify-center items-start absolute top-0`}
          >
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711420592/foreground_land_mygpzp_2_gxrznp.jpg?_s=public-apps"
              className={`${styles.land_bottom} absolute bottom-0 min-h-[20vh] z-[90]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711281990/VectorRayPoint_rgwhmn.jpg?_s=public-apps"
              className={`${styles.sun_main} flex justify-center items-start absolute overflow-x-hidden top-[-10vh] object-contain h-[100vh] z-[50]`}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711502926/posua_logo_1_to45u1.jpg?_s=public-apps"
              className={`${styles.posua_logo} absolute flex justify-center items-start object-contain overflow-hidden h-[45vh] w-[40vw] z-[49] top-[-5vh]`}
              alt=""
            />
            <div className={`${styles.parrot_tree} `}>
              <img
                src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711420613/left_tree_and_bird_rvubsw_jtzfr3.jpg?_s=public-apps"
                className={`${styles.tree_bottom_left_L} absolute  object-none md:object-cover left-0 h-[110vh] z-[100] min-w-[300px]`}
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711378495/Posua/42294e317f79a7522006f73687ed11e5_rlbqiv.gif"
                className={`${styles.parrot} absolute left-[-3vw] top-[9vh] scale-[50%] z-[140]`}
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
              src="https://res.cloudinary.com/dy55sllug/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711431534/VectorSun_car4ft.jpg?_s=public-apps"
              className={`${styles.sun} absolute left-[30vw] opacity-75`}
              alt=""
            />
            {/* <div className={`${styles.Jaapi_arrow} absolute`}>
        <img
          src=""
          className={`${styles.jaapi} absolute z-100 rotate-2 transition-all`}
          alt=""
        />
        <img
          src=""
          className={`${styles.arrow} absolute z-[110] translate-y-2 transition-transform `}
          alt=""
        />
    </div> */}
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
                className={`${styles.land_bottom} z-[71] absolute top-[48.2vh] left-[62vw] rotate-[-5deg]`}
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
    </div>
  );
};

export default Hero;
