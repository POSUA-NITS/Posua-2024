import React from "react";

const ArtistBigCard = ({ photoLink, name, desc, profession = "Singer" }) => {
  const frame =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711056519/Group_2608667_reshtk.jpg?_s=public-apps";

  return (
    <div>
      <div
        className="w-[90vw] py-4 gap-[1rem] flex items-center px-2 border-[.4rem]"
        style={{ backgroundColor: "#F1E4D0", borderColor: "#C7A158" }}
      >
        <div className="w-[6.5rem] h-[75%] flex items-center justify-center relative">
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
          <div className="absolute flex flex-col justify-center items-center bottom-[.8rem] z-[20000] leading-[.6rem]">
            <div className="text-[.7rem] font-semibold" style={{ color: "#B02227" }}>
              {name}
            </div>
            <div className="text-[.4rem]" style={{ color: "#B02227" }}>
              {profession}
            </div>
          </div>
        </div>
        <div className="flex-[3] h-[100%] flex flex-col justify-center gap-[.6rem] py-2 items-center px-3">
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
