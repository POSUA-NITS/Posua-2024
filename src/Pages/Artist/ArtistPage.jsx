import React, { useState } from "react";
import ArtistPageAnimation from "../../Components/Artist/ArtistPageAnimation";
const ArtistPage = () => {
  const artImg =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711097529/Frame_2608572_t5qpir.jpg?_s=public-apps";
  const artImg2 =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711098320/Frame_2608573_tvqzoe.jpg?_s=public-apps";
  const flower =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711037169/Group1_edn1zl.jpg?_s=public-apps";

  const [first, setfirst] = useState(false);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);

  return (
    <main
      className="min-h-full min-w-full flex flex-col relative justify-center items-center overflow-hidden"
      style={{ background: "linear-gradient(111deg, #FFD0C6 5.11%, #FFE2A9 90.22%)" }}
    >
      <div className=" w-[40rem] h-[8rem] m-10 flex z-[50]">
        <img src={artImg} alt="Art" className="w-full h-full object-cover" />
      </div>
      <div className="mt-[5rem] z-[50]">
        <ArtistPageAnimation
          first={first}
          setfirst={setfirst}
          second={second}
          setsecond={setsecond}
          third={third}
          setthird={setthird}
        />
      </div>
      <div className=" w-[40rem] h-[8rem] m-10 flex z-[50]">
        <img src={artImg2} alt="Art" className="w-full h-full object-cover" />
      </div>
      <div className="mt-[5rem] z-[50]">
        <ArtistPageAnimation first={first} second={second} third={third} />
      </div>
      {/* *************Flower section ************** */}
      <div
        className={`absolute transition-all duration-500 ease-in-out ${first || second || third ? "md:top-[30rem] md:left-[-12rem] w-[25rem] h-[25rem] rotate-45" : "md:top-[20rem] md:left-[-20rem] w-[40rem] h-[40rem]"}`}
      >
        <img src={flower} alt="flower1" className="h-full w-full object-fill" />
      </div>
      <div
        className={`absolute transition-all duration-500 ease-in-out ${first || second || third ? "md:top-[30rem] md:right-[-12rem] w-[25rem] h-[25rem] rotate-90" : "md:top-[20rem] md:right-[-20rem] w-[40rem] h-[40rem]"}`}
      >
        <img src={flower} alt="flower1" className="h-full w-full object-fill" />
      </div>
      {/* *************Flower section ************** */}
    </main>
  );
};

export default ArtistPage;
