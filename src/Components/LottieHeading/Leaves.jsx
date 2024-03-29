import React, { useState, useEffect } from "react";

const Leaves = () => {
  const [windowSize, setWindowSize] = useState();
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
  return (
    <div
      className={`${windowSize < 660 ? "right-[-10vw]  w-[68vw] h-[auto]  absolute top-[0]" : "absolute z-[500] top-[0] right-[10vw] w-[25vw]"}`}
    >
      {/* <Player autoplay loop src={leaveslottie}></Player> */}
      <img
        className="w-[100%] h-[100%] object-cover"
        src="https://res.cloudinary.com/dp92qug2f/image/upload/v1711660065/f5d3bf2a0bfea972bd72a40e0a7fb3fe_1_wz9ipz.gif"
        alt=""
      />
    </div>
  );
};

export default Leaves;
