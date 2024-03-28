import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ArtistPageAnimation from "../../Components/Artist/ArtistPageAnimation";
import ArtistCard from "../../Components/Artist/ArtistCard";
import ArtistBigCard from "../../Components/Artist/ArtistBigCard";
import "swiper/css";
import useSetTitle from "../../Hooks/SetTitle";
import ArtistAnimation from "../../Components/Artist/ArtistAnimation";

const ArtistPage = () => {
  useSetTitle("Artists | Posua");
  const artImg =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711559936/PREVIOUS_dibsut.jpg?_s=public-apps";
  // const artImg2 =
  //   "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711098320/Frame_2608573_tvqzoe.jpg?_s=public-apps";
  const flower =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711037169/Group1_edn1zl.jpg?_s=public-apps";

  const [first, setfirst] = useState(false);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);

  const [active1, setActive1] = useState(1);
  const [active2, setActive2] = useState(1);

  const jaapi =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711053903/OBJECTS_1_gvgj7g.jpg?_s=public-apps";

  const UpArtistData = [
    {
      id: 1,
      name: "Nilotpal Bora",
      desc11: `ঐ গধূলি গধূলি
      ফুৰো ৰহিমলা
      বাঘে খাই ঘোঙে খাই খাঁওক
      তোমাৰে কাৰণে
      ঐ হ'লো মই পগলা
      জীৱনটো গ'লেও
      যাঁওক ৰহিমলা
      ৰৈ ৰৈ ধেমালি কৰা, ৰহিমলা
      ৰৈ ৰৈ ধেমালি
      ৰৈ ৰৈ ধেমালি কৰা 
      এই বিহুগীত ফাকি চিনাকী যেন লাগিছেনে? নিশ্চয় লাগিব। ব'হাগ আহি পালেহি মানে এই বিহুগীতটিত ককাঁল ভাঙি নাচিবলৈ সাজু হ'বই হ'ল। পিছে আমি যদি কওঁ, এই বিহুগীতটিৰ শিল্পীগৰাকী এইবেলি আমাৰ সকলোৰে মাজত উপস্থিত থাকি আমাক বিহু নচুৱাবলৈ আহি আছে, আপোনাৰ বাৰু শুনি ভাল নালাগিবনে? হয় আপুনি ঠিকে ধৰিছে। মাজুলীৰ আকাশত ৰাঙলী হৈ জিলিকা বেলিটিৰ কথা ক'বলৈ, ঘৰমুৱা পখীৰ বতৰা লৈ  এইবেলি পছোৱা'২৪-ৰ মঞ্চ শুৱনি কৰিবলৈ আহি আছে অসমৰ সাংস্কৃতিক জগতৰ জিলিকা তৰা স্বৰূপ কণ্ঠশিল্পী নিলোৎপল বৰা। সেয়হে সাজু হওক ৰাইজ, এইবেলিৰ বসন্তোৎসৱত ঢোলৰ চাপৰত আত্মহাৰা হ'বলৈ, সুৰৰ মায়াজালত মন্ত্ৰমুগ্ধ হ'বলৈ।
      #শিমলু_ফুলিছে_ৰঙচুৱা_পদূলিত_হেঁপাহৰ_পছোৱা
      #বসন্তৰ_পদূলিত_পছোৱাৰ_সুহুৰি 
      
      `,
      photoLink:
        "https://res.cloudinary.com/dp92qug2f/image/upload/v1711634914/Runway-2024-03-28T13_53_53.448Z-Upscale-Image-Upscaled-Image-2550-x-1920-min_bvkkf6.webp",

      desc: `𝑅𝑖𝑛𝑖𝑘𝑖 𝑟𝑖𝑛𝑘𝑖 𝑟𝑎𝑛𝑔𝑜𝑙𝑖 𝑏𝑒𝑙𝑖𝑡𝑖
      𝑗𝑖𝑙𝑖𝑘𝑒 𝑚𝑎𝑗𝑢𝑙𝑖𝑡𝑒 𝑜𝑖
      𝑗𝑒𝑡ℎ𝑜𝑟𝑒 𝑗𝑢𝑟𝑢𝑙𝑎 𝑘ℎ𝑎𝑢𝑛𝑒 𝑥𝑜ℎ𝑢𝑎
      𝑏𝑢𝑘𝑢𝑡𝑒 𝑏𝑜𝑛𝑔𝑒𝑒𝑡 ℎ𝑜𝑖
      Get ready to be swept off your feet!  We're thrilled to announce that the incredibly talented 𝐍𝐈𝐋𝐎𝐓𝐏𝐀𝐋 𝐁𝐎𝐑𝐀 will be gracing our stage for the night!  Join us for an unforgettable evening filled with soulful melodies and electrifying performances.  Experience the magic as 𝐍𝐈𝐋𝐎𝐓𝐏𝐀𝐋 𝐁𝐎𝐑𝐀 captivates hearts and souls with his mesmerizing voice and captivating presence.
      #arrival_of_the_flâneur_wind_of_spring_aroma 
      #posua_singing_serenade_of_spring`,
    },
    {
      id: 2,
      name: "Xomonnoy Gushti",
      photoLink:
        "https://res.cloudinary.com/dp92qug2f/image/upload/v1711635199/Runway-2024-03-28T14_07_15.809Z-Upscale-Image-Upscaled-Image-2396-x-1920-min_gvp6bp.webp",
      // desc: `লোকসংস্কৃতি বুলিয়েই মনলৈ আহে এটি জাতিৰ স্বকীয় পৰিচয়। লোকসংস্কৃতিয়ে দি আহিছে একো একোটি জাতিক নিজস্বতাৰ স্বীকৃতি। ঠিক তেনেদৰেই আমাৰ অসমীয়া লোকসংস্কৃতিৰ ভঁৰালটোও তেনেই চহকী। ইতিহাসে ঢুকি নোপোৱা সময়ৰ পৰাই অসমৰ লোকসংস্কৃতিয়ে কৈ আহিছে চহা অসমীয়াৰ হৰ্ষ - বিষাদৰ কথা, জীৱন প্ৰণালীৰ নিয়ম আৰু শতাধিক সময়ৰ গৌৰৱময় গাথা। অসমৰ এই লোকজীৱনৰ জীৱনচৰ্চাৰ কলাত্মক প্ৰকাশত এক গুৰুত্বপূৰ্ণ ভূমিকা পালন কৰি আহিছে লোক সাংস্কৃতিক সংগঠন 'সমন্বয় এনাজৰী সাংস্কৃতিক গোষ্ঠীয়ে'। সবাতোকৈ আনন্দৰ কথা এয়া যে, লোকসংস্কৃতিৰ ধ্বজাবাহক এই শিল্পীসকল আহি আছে 'পছোৱা'২৪' মঞ্চ শুৱনি কৰিবলৈ। সেয়েহে আপোনালোকো সাজু হওক, লোকসংস্কৃতিৰ এই ন-ৰূপৰ উপস্থাপনৰ আনন্দত বিলীন হ'বলৈ।
      // #শিমলু_ফুলিছে_ৰঙচুৱা_পদূলিত_হেঁপাহৰ_পছোৱা
      // #বসন্তৰ_পদূলিত_পছোৱাৰ_সুহুৰি `,
      desc: `Folk culture narrates the unexplored realms of history and serves as the acknowledgment of a community's intrinsic identity. Culture validates the sovereignty of each ethnicity. Similarly, the rich tapestry of our Assamese culture resonates profoundly. It is precisely through the richness of our Assamese cultural heritage that our identity is portrayed: the unexplored realms of history narrate the tales of joy and sorrow, the societal norms, and the glorious sagas of bygone eras within Assamese culture. Embracing the artistic expression of the indigenous Assamese, the "𝑿𝒐𝒎𝒐𝒏𝒏𝒐𝒚 𝑬𝒏𝒂𝒋𝒐𝒓𝒊 𝑺𝒂𝒏𝒔𝒌𝒓𝒊𝒕𝒊𝒌 𝑮𝒖𝒔𝒉𝒕𝒊" has played a significant role in representing the diverseness of this land.  It's a matter of great joy that the flag bearers of our cultural heritage, these artists, are set to grace the Posua'24 stage. So, let's come together and revel in the presentation of Assamese culture in its myriad forms, for it's a celebration that promises to immerse us in joy and enlightenment.
      #arrival_of_the_flâneur_wind_of_spring_aroma 
      #posua_singing_serenade_of_spring`,
    },
  ];
  const prevArtistData = [
    {
      id: 1,
      name: "Dikshu Sharma",
      profession: "Singer",
      photoLink:
        "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_760,f_auto,fl_lossy/v1677782744/posua/WhatsApp_Image_2023-03-03_at_00.15.12_nhe9xz.jpg",
    },
    {
      id: 2,
      name: "Ranjit Gogoi",
      profession: "Bihu Samrat",
      photoLink:
        "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677783229/posua/DSC_0102_1_-min_obvt2f.jpg",
    },
    {
      id: 3,
      name: "Deusila",
      profession: "Bihu Dol",
      photoLink:
        "https://assets.sentinelassam.com/h-upload/c_scale,w_360,f_auto,fl_lossy/2021/04/14/218865-bihu.webp?w=940&dpr=1.3",
    },
    {
      id: 4,
      name: "Priyanka Bharali",
      profession: "Singer",
      photoLink:
        "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677513050/WhatsApp_Image_2023-02-27_at_20.35.22_ai2wby.jpg",
    },
    {
      id: 5,
      name: "Tezpuriya Thespian",
      profession: "Band",
      photoLink:
        "https://res.cloudinary.com/dp92qug2f/image/upload/v1677787106/posua/maxresdefault_edezq4.jpg",
    },
    {
      id: 6,
      name: "Zubeen Garg",
      profession: "Singer",
      photoLink:
        "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677785093/posua/Zubeen-Hospitalized-Shifted-to-ICU-for-24-Hours_1658305106491_1658305113562_1658305113562_fgv1gr.webp",
    },
    {
      id: 7,
      name: "Neel Akash",
      profession: "Singer",
      photoLink:
        "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677785486/posua/278904714_3139465349627002_1271890122984205712_n.jpg_nmumpg.jpg",
    },
    {
      id: 8,
      name: "Simanta Shekhar",
      profession: "Singer",
      photoLink:
        "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677785795/posua/artist_4642892-1500240408_vtmltu.jpg",
    },
    {
      id: 9,
      name: "Manash Robin",
      profession: "Singer",
      photoLink:
        "https://res.cloudinary.com/dp92qug2f/image/upload/v1677786083/posua/manas_sr8oab.jpg",
    },
  ];

  return (
    <main className="min-h-full min-w-full flex flex-col relative justify-center items-center overflow-hidden mb-[4rem]">
      <ArtistAnimation imgUrl={artImg} jaapi={jaapi} text="UPCOMING ARTISTS" />

      {/* ************Upcoming Artist desktop view start1***************** */}
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
      {/* ************Upcoming Artist desktop view end1***************** */}

      {/* ************Upcoming Artist mobile view start2***************** */}

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
                    {isActive ? setActive1(profile.id) : ""}
                    <ArtistBigCard
                      photoLink={profile.photoLink}
                      name={profile.name}
                      desc={profile.desc}
                    />
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex w-[100%] justify-center items-center absolute bottom-[-2rem] z-[1000]">
          <div
            className={`${active1 === 1 ? "rounded-l-lg" : "rounded-lg"} w-[.7rem] h-[.7rem] transition-all duration-300 ease-in-out`}
            style={{ backgroundColor: active1 === 1 ? "white" : "#F2C18D" }}
          ></div>
          <div
            className="w-[.7rem] h-[.7rem] transition-all duration-300 ease-in-out"
            style={{ backgroundColor: active1 === 1 ? "white" : "" }}
          ></div>
          <div
            className={`transition-all duration-300 ease-in-out ${active1 === 1 ? "rounded-r-lg" : ""} ${active1 === 2 ? "rounded-l-lg" : ""} ${active1 !== 1 && active1 !== 2 ? "rounded-lg" : ""} w-[.7rem] h-[.7rem]`}
            style={{
              backgroundColor: active1 === 1 || active1 === 2 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="transition-all duration-300 ease-in-out w-[.7rem] h-[.7rem]"
            style={{ backgroundColor: active1 === 2 ? "white" : "" }}
          ></div>
          <div
            className={`transition-all duration-300 ease-in-out ${active1 === 2 ? "rounded-r-lg" : ""} ${active1 === 3 ? "rounded-l-lg" : ""} ${active1 !== 2 && active1 !== 3 ? "rounded-lg" : ""} w-[.7rem] h-[.7rem]`}
            style={{
              backgroundColor: active1 === 2 || active1 === 3 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="transition-all duration-300 ease-in-out w-[.7rem] h-[.7rem]"
            style={{ backgroundColor: active1 === 3 ? "white" : "" }}
          ></div>
          <div
            className={`transition-all duration-300 ease-in-out ${active1 === 3 ? "rounded-r-lg" : "rounded-lg"} w-[.7rem] h-[.7rem]`}
            style={{ backgroundColor: active1 === 3 ? "white" : "#F2C18D" }}
          ></div>
        </div>
      </div>

      {/* ************Upcoming Artist mobile view end2***************** */}

      <ArtistAnimation imgUrl={artImg} jaapi={jaapi} text="PREVIOUS ARTISTS" />

      {/* ************Previous Artist desktop start***************** */}
      <div className="my-[5rem] md:flex justify-center items-center flex-wrap hidden w-[60%] gap-[8rem]">
        {prevArtistData.map((profile) => {
          return (
            <ArtistCard
              name={profile.name}
              key={profile.id}
              profession={profile.profession}
              photoLink={profile.photoLink}
            />
          );
        })}
      </div>
      {/* ************Previous Artist desktop end***************** */}

      {/* ************Previous Artist mobile start***************** */}

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
                    {isActive ? setActive2(profile.id) : ""}
                    <ArtistCard
                      photoLink={profile.photoLink}
                      name={profile.name}
                      profession={profile.profession}
                    />
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="flex w-[100%] justify-center items-center absolute bottom-[-2.5rem] z-[1000]">
          <div
            className={`${active2 === 1 ? "rounded-l-lg" : "rounded-lg"} w-[.7rem] h-[.7rem] transition-all duration-300 ease-in-out`}
            style={{ backgroundColor: active2 === 1 ? "white" : "#F2C18D" }}
          ></div>
          <div
            className="w-[.7rem] h-[.7rem] transition-all duration-300 ease-in-out"
            style={{ backgroundColor: active2 === 1 ? "white" : "" }}
          ></div>
          <div
            className={`transition-all duration-300 ease-in-out ${active2 === 1 ? "rounded-r-lg" : ""} ${active2 === 2 ? "rounded-l-lg" : ""} ${active2 !== 1 && active2 !== 2 ? "rounded-lg" : ""} w-[.7rem] h-[.7rem]`}
            style={{
              backgroundColor: active2 === 1 || active2 === 2 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="transition-all duration-300 ease-in-out w-[.7rem] h-[.7rem]"
            style={{ backgroundColor: active2 === 2 ? "white" : "" }}
          ></div>
          <div
            className={`transition-all duration-300 ease-in-out ${active2 === 2 ? "rounded-r-lg" : ""} ${active2 === 3 ? "rounded-l-lg" : ""} ${active2 !== 2 && active2 !== 3 ? "rounded-lg" : ""} w-[.7rem] h-[.7rem]`}
            style={{
              backgroundColor: active2 === 2 || active2 === 3 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="transition-all duration-300 ease-in-out w-[.7rem] h-[.7rem]"
            style={{ backgroundColor: active2 === 3 ? "white" : "" }}
          ></div>
          <div
            className={`transition-all duration-300 ease-in-out ${active2 === 3 ? "rounded-r-lg" : ""} ${active2 === 4 ? "rounded-l-lg" : ""} ${active2 !== 3 && active2 !== 4 ? "rounded-lg" : ""} w-[.7rem] h-[.7rem]`}
            style={{
              backgroundColor: active2 === 3 || active2 === 4 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="transition-all duration-300 ease-in-out w-[.7rem] h-[.7rem]"
            style={{ backgroundColor: active2 === 4 ? "white" : "" }}
          ></div>
          <div
            className={`transition-all duration-300 ease-in-out ${active2 === 4 ? "rounded-r-lg" : ""} ${active2 === 5 ? "rounded-l-lg" : ""} ${active2 !== 4 && active2 !== 5 ? "rounded-lg" : ""} w-[.7rem] h-[.7rem]`}
            style={{
              backgroundColor: active2 === 4 || active2 === 5 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="transition-all duration-300 ease-in-out w-[.7rem] h-[.7rem]"
            style={{ backgroundColor: active2 === 5 ? "white" : "" }}
          ></div>
          <div
            className={`transition-all duration-300 ease-in-out ${active2 === 5 ? "rounded-r-lg" : ""} ${active2 === 6 ? "rounded-l-lg" : ""} ${active2 !== 5 && active2 !== 6 ? "rounded-lg" : ""} w-[.7rem] h-[.7rem]`}
            style={{
              backgroundColor: active2 === 5 || active2 === 6 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="transition-all duration-300 ease-in-out w-[.7rem] h-[.7rem]"
            style={{ backgroundColor: active2 === 6 ? "white" : "" }}
          ></div>
          <div
            className={`transition-all duration-300 ease-in-out ${active2 === 6 ? "rounded-r-lg" : ""} ${active2 === 7 ? "rounded-l-lg" : ""} ${active2 !== 6 && active2 !== 7 ? "rounded-lg" : ""} w-[.7rem] h-[.7rem]`}
            style={{
              backgroundColor: active2 === 6 || active2 === 7 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="transition-all duration-300 ease-in-out w-[.7rem] h-[.7rem]"
            style={{ backgroundColor: active2 === 7 ? "white" : "" }}
          ></div>
          <div
            className={`transition-all duration-300 ease-in-out ${active2 === 7 ? "rounded-r-lg" : ""} ${active2 === 8 ? "rounded-l-lg" : ""} ${active2 !== 7 && active2 !== 8 ? "rounded-lg" : ""} w-[.7rem] h-[.7rem]`}
            style={{
              backgroundColor: active2 === 7 || active2 === 8 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="transition-all duration-300 ease-in-out w-[.7rem] h-[.7rem]"
            style={{ backgroundColor: active2 === 8 ? "white" : "" }}
          ></div>
          <div
            className={`transition-all duration-300 ease-in-out ${active2 === 8 ? "rounded-r-lg" : ""} ${active2 === 9 ? "rounded-l-lg" : ""} ${active2 !== 8 && active2 !== 9 ? "rounded-lg" : ""} w-[.7rem] h-[.7rem]`}
            style={{
              backgroundColor: active2 === 8 || active2 === 9 ? "white" : "#F2C18D",
            }}
          ></div>
          <div
            className="transition-all duration-300 ease-in-out w-[.7rem] h-[.7rem]"
            style={{ backgroundColor: active2 === 9 ? "white" : "" }}
          ></div>
          <div
            className={`transition-all duration-300 ease-in-out ${active2 === 9 ? "rounded-r-lg" : "rounded-lg"} w-[.7rem] h-[.7rem]`}
            style={{
              backgroundColor: active2 === 9 ? "white" : "#F2C18D",
            }}
          ></div>
        </div>
      </div>

      {/* ************Previous Artist mobile start***************** */}

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
