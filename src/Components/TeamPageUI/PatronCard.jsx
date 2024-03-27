import React, { useState } from "react";

const PatronCard = ({ name, email, photoLink }) => {
  const [hover, sethover] = useState(false);

  return (
    <div
      className="w-[15rem] h-[20rem] relative"
      style={{ boxShadow: "7px 6px 20px .001px #000001" }}
      onMouseEnter={() => {
        sethover(true);
      }}
      onMouseLeave={() => {
        sethover(false);
      }}
    >
      <img
        className="absolute z-[52]"
        src="https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711014245/Group_n51goy.jpg?_s=public-apps"
        alt="Patron Frame"
      />
      <div className="absolute w-full h-full flex flex-col items-center justify-end bottom-[3.6rem] leading-4 z-[54]">
        <div
          className="text-[1.1rem] font-semibold"
          style={{ color: "#BC0404", fontFamily: "DM Serif Display" }}
        >
          {name}
        </div>
        <div className="text-[.7rem]" style={{ color: "#E8AC36", fontFamily: "Alata" }}>
          CHIEF PATRON
        </div>
      </div>
      <div
        className={`absolute w-full h-full flex flex-col items-center justify-end text-[.65rem] transition-all duration-500 ease-in-out text-orange-500 ${hover ? "opacity-100 bottom-[1.9rem]" : "opacity-0 bottom-[2.4rem]"} z-[60]`}
      >
        <a href={`mailto:${email}`}>EMAIL : {email}</a>
      </div>
      <div
        className={`absolute transition-all duration-500 ease-in-out ${hover ? "w-[9rem] h-[9rem] left-[4.5rem] top-[4rem]" : "left-[2.55rem] top-[2.5rem] w-[10rem] h-[10rem]"} z-[55]`}
      >
        <img
          src={photoLink}
          alt="hero"
          className={`object-cover rounded-[100%] mx-auto w-full h-full ${hover ? "border-[.25rem]" : "border-[.15rem]"}`}
          style={{ borderColor: hover ? "orange" : "#BC0404" }}
        />
      </div>
      <div
        className={`absolute w-full h-full justify-center z-[53] transition-all duration-500 ease-in-out ${hover ? "top-[1.7rem] left-[-.5rem]" : " top-[2.6rem]"}`}
      >
        <img
          src="https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711016549/Group_2608542_ylhq2y.jpg?_s=public-apps"
          alt="hero"
          className={`object-cover rounded-[100%] transition-all duration-500 ease-in-out mx-auto  ${hover ? "rotate-90 w-[12rem] h-[12rem]" : "w-[11rem] h-[11rem]"}`}
          style={{ borderColor: "#BC0404" }}
        />
      </div>
    </div>
  );
};

export default PatronCard;
