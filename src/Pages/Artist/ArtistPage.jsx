import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ArtistPageAnimation from "../../Components/Artist/ArtistPageAnimation";
import ArtistCard from "../../Components/Artist/ArtistCard";
import ArtistBigCard from "../../Components/Artist/ArtistBigCard";
import "swiper/css";
import useSetTitle from "../../Hooks/SetTitle";

const ArtistPage = () => {
  useSetTitle("Artists | Posua");
  const artImg =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711097529/Frame_2608572_t5qpir.jpg?_s=public-apps";
  const artImg2 =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711098320/Frame_2608573_tvqzoe.jpg?_s=public-apps";
  const flower =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711037169/Group1_edn1zl.jpg?_s=public-apps";

  const [first, setfirst] = useState(false);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);

  const [active1, setActive1] = useState(1);
  const [active2, setActive2] = useState(1);

  // const jaapi =
  //   "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711053903/OBJECTS_1_gvgj7g.jpg?_s=public-apps";

  const prevArtistData = [
    {
      id: 1,
      name: "Zubeen Garg",
      photoLink:
        "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710876326/sf7py4kekiyxmzcndxqp.jpg?_s=public-apps",
    },
    {
      id: 2,
      name: "Zubeen Garg",
      photoLink:
        "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710876326/sf7py4kekiyxmzcndxqp.jpg?_s=public-apps",
    },
    {
      id: 3,
      name: "Zubeen Garg",
      photoLink:
        "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710876326/sf7py4kekiyxmzcndxqp.jpg?_s=public-apps",
    },
  ];

  const UpArtistData = [
    {
      id: 1,
      name: "Zubeen Garg",
      photoLink:
        "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710876326/sf7py4kekiyxmzcndxqp.jpg?_s=public-apps",
    },
    {
      id: 2,
      name: "Zubeen Garg",
      photoLink:
        "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710876326/sf7py4kekiyxmzcndxqp.jpg?_s=public-apps",
    },
    {
      id: 3,
      name: "Zubeen Garg",
      photoLink:
        "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710876326/sf7py4kekiyxmzcndxqp.jpg?_s=public-apps",
    },
  ];

  return (
    <main
      className="min-h-full min-w-full flex flex-col relative justify-center items-center overflow-hidden"
      style={{ background: "linear-gradient(111deg, #FFD0C6 5.11%, #FFE2A9 90.22%)" }}
    >
      <div className=" h-[3rem] md:h-[7rem] my-[3rem] flex z-[50] relative">
        <img src={artImg} alt="Art" className="w-full h-full object-cover" />
        {/* <div className="flex justify-center items-center absolute w-[100%] gap-[7.8rem]">
          <div className="h-[2.8rem] w-[2.8rem]"><img src={jaapi} alt="jaapi" className="h-full w-full object-cover" style={{ animationDuration: "4s" }}/></div>
          <div className="h-[2.8rem] w-[2.8rem]"><img src={jaapi} alt="jaapi" className="h-full w-full object-cover"/></div>
        </div> */}
      </div>

      {/* ************Previous Artist desktop view start1***************** */}
      <div className="mt-[5rem] z-[50] hidden md:block">
        <ArtistPageAnimation
          first={first}
          setfirst={setfirst}
          second={second}
          setsecond={setsecond}
          third={third}
          setthird={setthird}
        />
      </div>
      {/* ************Previous Artist desktop view end1***************** */}

      {/* ************Previous Artist mobile view start2***************** */}

      <div
        className="my-[4rem] w-[100%] z-[10] flex justify-center relative items-center md:hidden"
        style={{ overflowX: "unset" }}
      >
        <Swiper spaceBetween={100} slidesPerView={1}>
          {prevArtistData.map((profile) => {
            return (
              <SwiperSlide key={profile.id}>
                {({ isActive }) => (
                  <div
                    className="w-[100%] flex justify-center items-center"
                    style={{ overflowX: "unset" }}
                  >
                    {isActive ? setActive1(profile.id) : ""}
                    <ArtistBigCard photoLink={profile.photoLink} name={profile.name} />
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex w-[100%] justify-center items-center absolute bottom-[-2rem] z-[1000]">
          <div
            className={`${active1 === 1 ? "rounded-l-lg" : "rounded-lg"} w-[.8rem] h-[.8rem] transition-all duration-300 ease-in-out`}
            style={{ backgroundColor: active1 === 1 ? "white" : "#F2C18D" }}
          ></div>
          <div
            className="w-[.8rem] h-[.8rem] transition-all duration-300 ease-in-out"
            style={{ backgroundColor: active1 === 1 ? "white" : "" }}
          ></div>
          <div
            className={`transition-all duration-300 ease-in-out ${active1 === 1 ? "rounded-r-lg" : ""} ${active1 === 2 ? "rounded-l-lg" : ""} ${active1 !== 1 && active1 !== 2 ? "rounded-lg" : ""} w-[.8rem] h-[.8rem]`}
            style={{
              backgroundColor: active1 === 1 || active1 === 2 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="transition-all duration-300 ease-in-out w-[.8rem] h-[.8rem]"
            style={{ backgroundColor: active1 === 2 ? "white" : "" }}
          ></div>
          <div
            className={`transition-all duration-300 ease-in-out ${active1 === 2 ? "rounded-r-lg" : ""} ${active1 === 3 ? "rounded-l-lg" : ""} ${active1 !== 2 && active1 !== 3 ? "rounded-lg" : ""} w-[.8rem] h-[.8rem]`}
            style={{
              backgroundColor: active1 === 2 || active1 === 3 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="transition-all duration-300 ease-in-out w-[.8rem] h-[.8rem]"
            style={{ backgroundColor: active1 === 3 ? "white" : "" }}
          ></div>
          <div
            className={`transition-all duration-300 ease-in-out ${active1 === 3 ? "rounded-r-lg" : "rounded-lg"} w-[.8rem] h-[.8rem]`}
            style={{ backgroundColor: active1 === 3 ? "white" : "#F2C18D" }}
          ></div>
        </div>
      </div>

      {/* ************Previous Artist mobile view end2***************** */}

      <div className=" h-[3.5rem] md:h-[7rem] mt-[4rem] mb-[3rem] flex z-[50]">
        <img src={artImg2} alt="Art" className="w-full h-full object-cover" />
      </div>

      {/* ************Upcoming Artist desktop start***************** */}
      <div className="my-[5rem] md:flex gap-[7rem] hidden">
        <ArtistCard name="Rob JackSon" />
        <ArtistCard name="Rob JackSon" />
        <ArtistCard name="Rob JackSon" />
      </div>
      {/* ************Upcoming Artist desktop end***************** */}

      {/* ************Upcoming Artist mobile start***************** */}

      <div
        className="my-[4rem] w-[100%] z-[10] flex justify-center relative items-center md:hidden"
        style={{ overflowX: "unset" }}
      >
        <Swiper spaceBetween={100} slidesPerView={1}>
          {UpArtistData.map((profile) => {
            return (
              <SwiperSlide key={profile.id}>
                {({ isActive }) => (
                  <div
                    className="w-[100%] flex justify-center items-center"
                    style={{ overflowX: "unset" }}
                  >
                    {isActive ? setActive2(profile.id) : ""}
                    <ArtistCard photoLink={profile.photoLink} name={profile.name} />
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex w-[100%] justify-center items-center absolute bottom-[-2rem] z-[1000]">
          <div
            className={`${active2 === 1 ? "rounded-l-lg" : "rounded-lg"} w-[.8rem] h-[.8rem] transition-all duration-300 ease-in-out`}
            style={{ backgroundColor: active2 === 1 ? "white" : "#F2C18D" }}
          ></div>
          <div
            className="w-[.8rem] h-[.8rem] transition-all duration-300 ease-in-out"
            style={{ backgroundColor: active2 === 1 ? "white" : "" }}
          ></div>
          <div
            className={`transition-all duration-300 ease-in-out ${active2 === 1 ? "rounded-r-lg" : ""} ${active2 === 2 ? "rounded-l-lg" : ""} ${active2 !== 1 && active2 !== 2 ? "rounded-lg" : ""} w-[.8rem] h-[.8rem]`}
            style={{
              backgroundColor: active2 === 1 || active2 === 2 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="transition-all duration-300 ease-in-out w-[.8rem] h-[.8rem]"
            style={{ backgroundColor: active2 === 2 ? "white" : "" }}
          ></div>
          <div
            className={`transition-all duration-300 ease-in-out ${active2 === 2 ? "rounded-r-lg" : ""} ${active2 === 3 ? "rounded-l-lg" : ""} ${active2 !== 2 && active2 !== 3 ? "rounded-lg" : ""} w-[.8rem] h-[.8rem]`}
            style={{
              backgroundColor: active2 === 2 || active2 === 3 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="transition-all duration-300 ease-in-out w-[.8rem] h-[.8rem]"
            style={{ backgroundColor: active2 === 3 ? "white" : "" }}
          ></div>
          <div
            className={`transition-all duration-300 ease-in-out ${active2 === 3 ? "rounded-r-lg" : "rounded-lg"} w-[.8rem] h-[.8rem]`}
            style={{ backgroundColor: active2 === 3 ? "white" : "#F2C18D" }}
          ></div>
        </div>
      </div>

      {/* ************Upcoming Artist mobile start***************** */}

      {/* *************Flower section start************** */}
      <div
        className={`absolute transition-all duration-[1000ms] ease-in-out w-[15rem] h-[15rem] top-[20rem] left-[-10rem] ${first || second || third ? "md:top-[30rem] md:left-[-12rem] md:w-[25rem] md:h-[25rem] rotate-45" : "md:top-[20rem] md:left-[-20rem] md:w-[40rem] md:h-[40rem]"}`}
      >
        <img src={flower} alt="flower1" className="h-full w-full object-fill" />
      </div>
      <div
        className={`absolute transition-all duration-[1000ms] ease-in-out w-[12rem] h-[12rem] top-[50rem] right-[-5rem] ${first || second || third ? "md:top-[30rem] md:right-[-12rem] md:w-[25rem] md:h-[25rem] rotate-90" : "md:top-[20rem] md:right-[-20rem] md:w-[40rem] md:h-[40rem]"}`}
      >
        <img src={flower} alt="flower1" className="h-full w-full object-fill" />
      </div>
      {/* *************Flower section end************** */}
    </main>
  );
};

export default ArtistPage;
