import React from "react";
import styles from "../Borhomthuri/Pepa.module.scss";
const ArtistAnimation = ({ imgUrl, jaapi, text }) => {
  return (
    <div className=" h-[4.5rem] md:h-[7rem] my-[3rem] flex z-[50] justify-center items-center relative">
      <img src={imgUrl} alt="Art" className="w-full h-full object-cover" />
      <div className="flex justify-center items-center absolute gap-[13rem] md:gap-[20rem]">
        <div className="h-[3.5rem] w-[3.5rem] md:h-[7rem] md:w-[7rem]">
          <img
            src={jaapi}
            alt="jaapi"
            className="h-full w-full object-cover animate-spin"
            style={{ animationDuration: "6s" }}
          />
        </div>
        <div className="h-[3.5rem] w-[3.5rem] md:h-[7rem] md:w-[7rem]">
          <img
            src={jaapi}
            alt="jaapi"
            className="h-full w-full object-cover animate-spin"
            style={{ animationDuration: "6s" }}
          />
        </div>
      </div>
      <div
        className={`absolute text-[1.1rem] md:text-[1.7rem] ${styles.setfont}`}
        style={{ color: "#CB2229", fontWeight: "600" }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ArtistAnimation;
