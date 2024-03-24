import React from "react";

const DivComponent = ({ name, setImgUrl, setImgPop }) => {
  return (
    <div
      className="scrolling-div w-[11rem] h-[13rem]"
      onClick={() => {
        setImgUrl(name);
        setImgPop(true);
      }}
    >
      <img
        src={name}
        className="w-full h-full object-fill cursor-pointer"
        alt="scroll images"
      />
    </div>
  );
};

export default DivComponent;
