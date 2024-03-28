import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import leaveslottie from "../../assets/lottie/leaves.json";

const Leaves = () => {
  return (
    <div className=" right-[-10vw] scale-50 absolute top-0">
      <Player autoplay loop src={leaveslottie}></Player>
    </div>
  );
};

export default Leaves;
