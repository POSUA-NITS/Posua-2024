import React, { useState } from "react";
import ArtistCard from "./ArtistCard";

const ArtistPageAnimation = () => {
  const [clickEvent, setclickEvent] = useState(false);
  const [first, setfirst] = useState(false);
  const [firstCross, setfirstCross] = useState(true);

  const [second, setsecond] = useState(false);
  const [secondCross, setsecondCross] = useState(true);

  const [third, setthird] = useState(false);
  const [thirdCross, setthirdCross] = useState(true);
  return (
    <div
      className={`relative w-[100%] transition-all duration-1000 ease-in-out ${first || second || third ? "h-[50rem]" : " h-[25rem]"}`}
    >
      <div
        className={`flex h-[30rem] w-[100%] justify-center gap-[7rem] transition-all duration-500 ease-in-out ${first || second || third ? "top-[30rem]" : "top-0"} absolute`}
      >
        <div
          className={`transition-all duration-700 ease-in-out ${clickEvent ? "" : ""} ${first ? "absolute top-[-30rem]" : "top-[0rem]"}`}
          onClick={() => {
            setclickEvent(true);
            setsecond(false);
            setthird(false);
            if (firstCross) {
              setfirst(true);
            }
          }}
        >
          <ArtistCard clickk={first} setClickk={setfirst} setCross={setfirstCross} />
        </div>
        <div
          className={`transition-all duration-700 ease-in-out ${clickEvent ? "" : ""} ${second ? "absolute top-[-30rem]" : "top-[0rem]"}`}
          onClick={() => {
            setclickEvent(true);
            setfirst(false);
            setthird(false);
            if (secondCross) {
              setsecond(true);
            }
          }}
        >
          <ArtistCard clickk={second} setClickk={setsecond} setCross={setsecondCross} />
        </div>
        <div
          className={`transition-all duration-700 ease-in-out ${clickEvent ? "" : ""} ${third ? "absolute top-[-30rem]" : "top-[0rem]"}`}
          onClick={() => {
            setclickEvent(true);
            setfirst(false);
            setsecond(false);
            if (thirdCross) {
              setthird(true);
            }
          }}
        >
          <ArtistCard clickk={third} setClickk={setthird} setCross={setthirdCross} />
        </div>
      </div>
    </div>
  );
};

export default ArtistPageAnimation;
