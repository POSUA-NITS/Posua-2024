import React, { useState } from "react";
import ArtistCard from "./ArtistCard";

const ArtistPageAnimation = ({ first, second, third, setfirst, setsecond, setthird }) => {
  //   const [clickEvent, setclickEvent] = useState(false);
  const [firstCross, setfirstCross] = useState(true);

  const [secondCross, setsecondCross] = useState(true);

  const [thirdCross, setthirdCross] = useState(true);
  const name = "Zubeen Garg";
  const assameseDesc = "";
  const englishDesc = "";
  return (
    <div
      className={`relative w-[100%] transition-all duration-[1000ms] ease-in-out ${first || second || third ? "h-[50rem]" : " h-[25rem]"}`}
    >
      <div
        className={`flex h-[30rem] w-[100%] justify-center gap-[7rem] transition-all duration-[1500] ease-in-out ${first || second || third ? "top-[30rem]" : "top-[0rem]"} absolute`}
      >
        <div
          className={`transition-all duration-[1500ms] ease-in-out ${first ? "absolute top-[-30rem]" : "top-[0rem]"}`}
          onClick={() => {
            setsecond(false);
            setthird(false);
            if (firstCross) {
              setfirst(true);
            }
          }}
        >
          <ArtistCard
            clickk={first}
            setClickk={setfirst}
            setCross={setfirstCross}
            name={name}
            assameseDesc={assameseDesc}
            englishDesc={englishDesc}
          />
        </div>
        <div
          className={`transition-all duration-[1500ms] ease-in-out ${second ? "absolute top-[-30rem]" : "top-[0rem]"}`}
          onClick={() => {
            setfirst(false);
            setthird(false);
            if (secondCross) {
              setsecond(true);
            }
          }}
        >
          <ArtistCard
            clickk={second}
            setClickk={setsecond}
            setCross={setsecondCross}
            name={name}
            assameseDesc={assameseDesc}
            englishDesc={englishDesc}
          />
        </div>
        <div
          className={`transition-all duration-[1500ms] ease-in-out ${third ? "absolute top-[-30rem]" : "top-[0rem]"}`}
          onClick={() => {
            setfirst(false);
            setsecond(false);
            if (thirdCross) {
              setthird(true);
            }
          }}
        >
          <ArtistCard
            clickk={third}
            setClickk={setthird}
            setCross={setthirdCross}
            name={name}
            assameseDesc={assameseDesc}
            englishDesc={englishDesc}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtistPageAnimation;
