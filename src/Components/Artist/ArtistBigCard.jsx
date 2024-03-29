import React, { useState, useEffect } from "react";

const ArtistBigCard = ({ photoLink, name, desc, profession = "Singer" }) => {
  // const [windowSize, setWindowSize] = useState();
  const [windowSize, setWindowSize] = useState(null);
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

  const frame =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711056519/Group_2608667_reshtk.jpg?_s=public-apps";

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Initial setup
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div
        className="w-[90vw] py-4 gap-[1rem] flex items-center px-2 border-[.4rem]"
        style={{ backgroundColor: "#F1E4D0", borderColor: "#C7A158" }}
      >
        <div
          className={`${windowSize > 365 ? "min-w-[6.5rem]" : "min-w-[4rem]"} h-[75%] flex items-center justify-center relative`}
        >
          <img
            src={frame}
            alt="Artist frame"
            className="z-[100] h-full w-full object-fill"
          />
          <img
            src={photoLink}
            alt="Artist img"
            className="absolute h-full w-full object-cover"
          />
          <div
            className={`absolute flex flex-col justify-center items-center z-[20000] ${windowSize > 365 ? "leading-[.55rem] bottom-[.9rem]" : "bottom-[.5rem]"}`}
          >
            <div
              className={` ${windowSize > 365 ? "text-[.6rem]" : "text-[.4rem]"} font-semibold`}
              style={{ color: "#B02227" }}
            >
              {name}
            </div>
            <div
              className={` ${windowSize > 365 ? "text-[.4rem]" : "text-[.2rem]"}`}
              style={{ color: "#B02227" }}
            >
              {profession}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-[.6rem] items-center">
          <div
            className=" font-semibold text-[1.2rem]"
            style={{ color: "#B02227", fontFamily: "Abril Fatface" }}
          >
            {name}
          </div>
          <div
            className="text-[.5rem] text-center"
            style={{ color: "#5F1516", fontFamily: "Alata" }}
          >
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistBigCard;
