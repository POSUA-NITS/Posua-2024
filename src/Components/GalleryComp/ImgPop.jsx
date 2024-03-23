import React from "react";

const ImgPop = ({ imgUrl, imgPop, setImgPop }) => {
  return (
    <div
      className={`fixed top-0 flex justify-center items-center w-[100vw] bg-blur backdrop-filter backdrop-blur-[.3rem] h-[100vh] transition-all duration-500 ease-in-out ${imgPop ? "z-[100] opacity-100" : "z-[-10] opacity-0"}`}
    >
      <div
        className={`fixed flex items-center justify-center transition-all duration-500 ease-in-out ${imgPop ? "w-[18rem] h-[22rem] sm:w-[25rem] sm:h-[29rem] md:w-[30rem] z-[110] md:h-[35rem] " : "w-[1rem] h-[1rem]"} relative`}
      >
        <img src={imgUrl} alt="modal Img" className="w-full h-full object-contain" />
        <div
          className="text-[2.5rem] text-white top-[.8rem] md:top-[.4rem] right-[1.2rem] absolute  z-[200] cursor-pointer bg-black rounded-md flex justify-center font-bold items-center h-[2.5rem] w-[2.5rem]"
          onClick={() => {
            setImgPop(false);
          }}
        >
          ×
        </div>
      </div>
    </div>
  );
};

export default ImgPop;
