import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import TeamCard from "../../Components/TeamPageUI/TeamCard";
import PatronCard from "../../Components/TeamPageUI/PatronCard";
import "swiper/css";
import useSetTitle from "../../Hooks/SetTitle";
import LottieHeading from "../../Components/LottieHeading/LottieHeading";
const Team = () => {
  useSetTitle("Team | Posua");
  const [active1, setActive1] = useState(1);
  const [active2, setActive2] = useState(1);
  const [active3, setActive3] = useState(1);

  const teamTopLogo =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711037538/team_fyxmgg.jpg?_s=public-apps";
  const topImage =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711024939/magh_bihu_1_2_t4nl8t.jpg?_s=public-apps";

  const flower =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711037169/Group1_edn1zl.jpg?_s=public-apps";
  // const jaapi = "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711016549/Group_2608542_ylhq2y.jpg?_s=public-apps";
  const jaapi2 =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711053903/OBJECTS_1_gvgj7g.jpg?_s=public-apps";
  const developerData = [
    {
      id: 1,
      name: " Jackson",
      photoLink:
        "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710876326/sf7py4kekiyxmzcndxqp.jpg?_s=public-apps",
      facebook: "https://www.facebook.com/johndoe",
      github: "https://github.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      id: 2,
      name: "Rob Jackson",
      photoLink:
        "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710876326/sf7py4kekiyxmzcndxqp.jpg?_s=public-apps",
      facebook: "https://www.facebook.com/janesmith",
      github: "https://github.com/janesmith",
      linkedin: "https://www.linkedin.com/in/janesmith",
    },
    {
      id: 3,
      name: "Rob Jackson",
      photoLink:
        "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710876326/sf7py4kekiyxmzcndxqp.jpg?_s=public-apps",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
  ];
  const patronData = [
    {
      id: 1,
      name: "Rob Jackson",
      photoLink:
        "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710876326/sf7py4kekiyxmzcndxqp.jpg?_s=public-apps",
      email: "DIRECTOR@NITS.AC.IN",
    },
    {
      id: 2,
      name: "Rob Jackson",
      photoLink:
        "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710876326/sf7py4kekiyxmzcndxqp.jpg?_s=public-apps",
      email: "DIRECTOR@NITS.AC.IN",
    },
    {
      id: 3,
      name: "Rob Jackson",
      photoLink:
        "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710876326/sf7py4kekiyxmzcndxqp.jpg?_s=public-apps",
      email: "DIRECTOR@NITS.AC.IN",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center m-0 p-0 relative overflow-x-hidden overflow-y-hidden">
      {/* <div
        style={{ fontFamily: "Abril Fatface" }}
        className="text-[2rem] md:text-[2.5rem] relative left-[1rem] md:left-[1.5rem] font-semibold"
      >
        TEAM
      </div>
      <div className="w-[20rem] sm:w-[25rem] md:w-[30rem] relative bottom-[4rem] sm:bottom-[5rem]">
        <img
          src="https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710876326/wnacfkpock3ycdgdu0g4.jpg?_s=public-apps"
          alt="Logo"
          className="w-full object-contain"
        />
      </div> */}
      <div className="w-[100%] z-[2]">
        <img src={topImage} alt="Top img" className="w-full h-full object-fill" />
      </div>
      <div
        className="w-[100%] md:h-[9rem] mb-[2rem] md:mb-[3rem] relative bottom-[.2rem] md:bottom-[1rem] z-[2]"
        style={{ overflowX: "unset" }}
      >
        <img src={teamTopLogo} alt="Top logo" className="w-full h-full object-fill" />
        <div className="absolute w-[100%] top-[-.9rem] sm:top-[-.6rem] md:top-[-.9rem] flex justify-center gap-[9rem] sm:gap-[15rem] md:gap-[20rem] lg:gap-[30rem]">
          <div className=" w-[4rem] sm:w-[5rem] md:w-[11rem]">
            <img
              src={jaapi2}
              alt="jaapi1"
              className="w-full h-full object-fill animate-spin"
              style={{ animationDuration: "4s" }}
            />
          </div>
          <div className=" w-[4rem] sm:w-[5rem] md:w-[11rem] ">
            <img
              src={jaapi2}
              alt="jaapi2"
              className="w-full h-full object-fill animate-spin"
              style={{ animationDuration: "4s" }}
            />
          </div>
        </div>
      </div>
      <div
        className="text-center md:text-[1.4rem] px-[2rem] sm:px-[7rem]  md:px-[10rem] z-[2] font-semibold"
        style={{ color: "#9B2125", fontFamily: "Alata" }}
      >
        With the arrival of spring and the departure of winter days, our Mother Nature
        expresses her joy of welcoming the calming rejuvenation via greenery and
        brightness all around her. Our Spring Fest, Posua is that venture which nurtures
        this celebration. This spree witnesses everyone coming together to work as a team,
        be it the students, the faculty members and the entire fraternity of NIT Silchar
        into its circle of gaiety and also ensures of breaking all the barriers among the
        crowd and bringing everyone together.
      </div>
      <div className="mt-[7rem] sm:mt-[10rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-[7rem] gap-y-[3rem] z-[10]">
        {patronData.map((profile, i) => {
          return <PatronCard key={profile.id} {...profile} index={i} />;
        })}
      </div>
      {/* <div className="mx-auto my-[4rem] w-[18rem] sm:w-[25rem]">
        <img src={unionBodyImg} alt="Union Body" className="w-full" />
      </div> */}
      <LottieHeading title="UNION BODY" />

      {/* *****************TeamCard for desktop view start1***************** */}
      <div className="my-[4rem] md:grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-[7rem] gap-y-[3rem] z-[10] hidden">
        {developerData.map((profile, i) => {
          return <TeamCard key={profile.id} {...profile} index={i} />;
        })}
      </div>
      {/* *****************TeamCard for desktop view end1***************** */}

      {/* *****************TeamCard for mobile views start2***************** */}
      <div
        className="my-[4rem] w-[100%] z-[10] relative flex justify-center items-center md:hidden"
        style={{ overflowX: "unset" }}
      >
        <Swiper spaceBetween={100} slidesPerView={1}>
          {developerData.map((profile) => {
            return (
              <SwiperSlide key={profile.id}>
                {({ isActive }) => (
                  <div
                    className="w-[100%] flex justify-center items-center"
                    style={{ overflowX: "unset" }}
                  >
                    {isActive ? setActive1(profile.id) : ""}
                    <TeamCard {...profile} />
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex w-[100%] justify-center items-center absolute bottom-[-2rem]">
          <div
            className={`${active1 === 1 ? "rounded-l-lg" : "rounded-lg"} w-[.8rem] h-[.8rem]`}
            style={{ backgroundColor: active1 === 1 ? "white" : "#F2C18D" }}
          ></div>
          <div
            className="w-[.8rem] h-[.8rem]"
            style={{ backgroundColor: active1 === 1 ? "white" : "" }}
          ></div>
          <div
            className={`${active1 === 1 ? "rounded-r-lg" : ""} ${active1 === 2 ? "rounded-l-lg" : ""} ${active1 !== 1 && active1 !== 2 ? "rounded-lg" : ""} w-[.8rem] h-[.8rem]`}
            style={{
              backgroundColor: active1 === 1 || active1 === 2 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="w-[.8rem] h-[.8rem]"
            style={{ backgroundColor: active1 === 2 ? "white" : "" }}
          ></div>
          <div
            className={`${active1 === 2 ? "rounded-r-lg" : ""} ${active1 === 3 ? "rounded-l-lg" : ""} ${active1 !== 2 && active1 !== 3 ? "rounded-lg" : ""} w-[.8rem] h-[.8rem]`}
            style={{
              backgroundColor: active1 === 2 || active1 === 3 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="w-[.8rem] h-[.8rem]"
            style={{ backgroundColor: active1 === 3 ? "white" : "" }}
          ></div>
          <div
            className={`${active1 === 3 ? "rounded-r-lg" : "rounded-lg"} w-[.8rem] h-[.8rem]`}
            style={{ backgroundColor: active1 === 3 ? "white" : "#F2C18D" }}
          ></div>
        </div>
      </div>
      {/* *****************TeamCard for mobile view end2***************** */}

      <LottieHeading title="CORE TEAM" />

      {/* *****************TeamCard for desktop view start3***************** */}
      <div className="my-[4rem] md:grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-[7rem] gap-y-[3rem] z-[10] hidden">
        {developerData.map((profile, i) => {
          return <TeamCard key={profile.id} {...profile} index={i} />;
        })}
      </div>
      {/* *****************TeamCard for desktop view end3***************** */}

      {/* *****************TeamCard for mobile view start4***************** */}
      <div className="my-[4rem] w-[100%] z-[10] relative flex justify-center items-center md:hidden">
        <Swiper spaceBetween={100} slidesPerView={1}>
          {developerData.map((profile) => {
            return (
              <SwiperSlide key={profile.id}>
                {({ isActive }) => (
                  <div className="w-[100%] flex justify-center items-center">
                    {isActive ? setActive2(profile.id) : ""}
                    <TeamCard {...profile} />
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex w-[100%] justify-center items-center absolute bottom-[-2rem]">
          <div
            className={`${active2 === 1 ? "rounded-l-lg" : "rounded-lg"} w-[.8rem] h-[.8rem]`}
            style={{ backgroundColor: active2 === 1 ? "white" : "#F2C18D" }}
          ></div>
          <div
            className="w-[.8rem] h-[.8rem]"
            style={{ backgroundColor: active2 === 1 ? "white" : "" }}
          ></div>
          <div
            className={`${active2 === 1 ? "rounded-r-lg" : ""} ${active2 === 2 ? "rounded-l-lg" : ""} ${active2 !== 1 && active2 !== 2 ? "rounded-lg" : ""} w-[.8rem] h-[.8rem]`}
            style={{
              backgroundColor: active2 === 1 || active2 === 2 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="w-[.8rem] h-[.8rem]"
            style={{ backgroundColor: active2 === 2 ? "white" : "" }}
          ></div>
          <div
            className={`${active2 === 2 ? "rounded-r-lg" : ""} ${active2 === 3 ? "rounded-l-lg" : ""} ${active2 !== 2 && active2 !== 3 ? "rounded-lg" : ""} w-[.8rem] h-[.8rem]`}
            style={{
              backgroundColor: active2 === 2 || active2 === 3 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="w-[.8rem] h-[.8rem]"
            style={{ backgroundColor: active2 === 3 ? "white" : "" }}
          ></div>
          <div
            className={`${active2 === 3 ? "rounded-r-lg" : "rounded-lg"} w-[.8rem] h-[.8rem]`}
            style={{ backgroundColor: active2 === 3 ? "white" : "#F2C18D" }}
          ></div>
        </div>
      </div>
      {/* *****************TeamCard for mobile view end4***************** */}

      <LottieHeading title="TECH TEAM" />

      {/* *****************TeamCard for desktop view start5***************** */}
      <div className="my-[4rem] md:grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-[7rem] gap-y-[3rem] z-[10] hidden">
        {developerData.map((profile, i) => {
          return <TeamCard key={profile.id} {...profile} index={i} />;
        })}
      </div>
      {/* *****************TeamCard for desktop view end5***************** */}

      {/* *****************TeamCard for mobile view start6***************** */}
      <div className="my-[4rem] w-[100%] z-[10] relative flex justify-center items-center md:hidden">
        <Swiper spaceBetween={100} slidesPerView={1}>
          {developerData.map((profile) => {
            return (
              <SwiperSlide key={profile.id}>
                {({ isActive }) => (
                  <div className="w-[100%] flex justify-center items-center">
                    {isActive ? setActive3(profile.id) : ""}
                    <TeamCard {...profile} />
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex w-[100%] justify-center items-center absolute bottom-[-2rem]">
          <div
            className={`${active3 === 1 ? "rounded-l-lg" : "rounded-lg"} w-[.8rem] h-[.8rem]`}
            style={{ backgroundColor: active3 === 1 ? "white" : "#F2C18D" }}
          ></div>
          <div
            className="w-[.8rem] h-[.8rem]"
            style={{ backgroundColor: active3 === 1 ? "white" : "" }}
          ></div>
          <div
            className={`${active3 === 1 ? "rounded-r-lg" : ""} ${active3 === 2 ? "rounded-l-lg" : ""} ${active3 !== 1 && active3 !== 2 ? "rounded-lg" : ""} w-[.8rem] h-[.8rem]`}
            style={{
              backgroundColor: active3 === 1 || active3 === 2 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="w-[.8rem] h-[.8rem]"
            style={{ backgroundColor: active3 === 2 ? "white" : "" }}
          ></div>
          <div
            className={`${active3 === 2 ? "rounded-r-lg" : ""} ${active3 === 3 ? "rounded-l-lg" : ""} ${active3 !== 2 && active3 !== 3 ? "rounded-lg" : ""} w-[.8rem] h-[.8rem]`}
            style={{
              backgroundColor: active3 === 2 || active3 === 3 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="w-[.8rem] h-[.8rem]"
            style={{ backgroundColor: active3 === 3 ? "white" : "" }}
          ></div>
          <div
            className={`${active3 === 3 ? "rounded-r-lg" : "rounded-lg"} w-[.8rem] h-[.8rem]`}
            style={{ backgroundColor: active3 === 3 ? "white" : "#F2C18D" }}
          ></div>
        </div>
      </div>
      {/* *****************TeamCard for mobile view end6***************** */}

      {/** *********flower section ************* */}
      <div className="absolute z-[1] top-[20rem] left-[-4rem] md:top-[45rem] md:left-[-25rem] w-[10rem] h-[10rem] md:w-[40rem] md:h-[40rem]">
        <img src={flower} alt="flower1" className="h-full w-full object-fill" />
      </div>
      <div className="absolute z-[1] top-[50rem] right-[-4rem] md:top-[100rem] md:right-[-9rem] w-[8rem] h-[8rem] md:w-[20rem] md:h-[20rem]">
        <img src={flower} alt="flower1" className="h-full w-full object-fill" />
      </div>
      <div className="absolute z-[1] top-[90rem] left-[-3rem] md:top-[150rem] md:left-[-10rem] w-[11rem] h-[11rem] md:w-[25rem] md:h-[25rem]">
        <img src={flower} alt="flower1" className="h-full w-full object-fill" />
      </div>
      <div className="absolute z-[1] top-[170rem] right-[-3rem] md:top-[180rem] md:right-[-10rem] w-[13rem] h-[13rem] md:w-[30rem] md:h-[30rem]">
        <img src={flower} alt="flower1" className="h-full w-full object-fill" />
      </div>
      {/** *********flower section ************* */}
    </div>
  );
};

export default Team;
