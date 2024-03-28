import React from "react";

const ArtistBigCard = ({ photoLink, name }) => {
  const frame =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711056519/Group_2608667_reshtk.jpg?_s=public-apps";

  const desc =
    "Spring has finally arrived, and the anticipation has culminated in the sounds of Bihu beats all around the corner. And with this, NIT Silchar is all set to host performance of 'Deusila Bihudol', a renowned folk group whose mesmerizing shows have captivated audiences and made them groove to the beats of Bihu. Brace yourselves for a magnificent cultural event as 'Deusila Bihudal' takes the stage with their drums, pepas, gaganas and various other musical instruments, ready to win the hearts of many. Hoping to see you all there promptly!";
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
        </div>
        <div className="flex-[3] h-[100%] flex flex-col justify-center gap-[.6rem] py-2 items-center ">
          <div
            className=" font-semibold text-[1.2rem]"
            style={{ color: "#B02227", fontFamily: "Abril Fatface" }}
          >
            {name}
          </div>
          <div
            className="text-[.45rem] text-center"
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
