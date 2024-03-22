import React from "react";
import ArtistPageAnimation from "../../Components/Artist/ArtistPageAnimation";
const ArtistPage = () => {
  const artImg =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711097529/Frame_2608572_t5qpir.jpg?_s=public-apps";
  const artImg2 =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711098320/Frame_2608573_tvqzoe.jpg?_s=public-apps";

  return (
    <main
      className="min-h-full min-w-full flex flex-col justify-center items-center overflow-hidden"
      style={{ background: "linear-gradient(111deg, #FFD0C6 5.11%, #FFE2A9 90.22%)" }}
    >
      <div className=" w-[40rem] h-[8rem] m-10 flex">
        <img src={artImg} alt="Art" className="w-full h-full object-cover" />
      </div>
      <div className="mt-[5rem]">
        <ArtistPageAnimation />
      </div>
      <div className=" w-[40rem] h-[8rem] m-10 flex">
        <img src={artImg2} alt="Art" className="w-full h-full object-cover" />
      </div>
      <div className="mt-[5rem]">
        <ArtistPageAnimation />
      </div>
      {/* <div>Hello</div> */}
    </main>
  );
};

export default ArtistPage;
