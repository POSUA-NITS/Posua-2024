import React, { useState } from "react";
import ArtistCard from "./ArtistCard";

const ArtistPageAnimation = ({ first, second, third, setfirst, setsecond, setthird }) => {
  //   const [clickEvent, setclickEvent] = useState(false);
  const [firstCross, setfirstCross] = useState(true);

  const [secondCross, setsecondCross] = useState(true);

  // const [thirdCross, setthirdCross] = useState(true);
  const name1 = "Nilotpal Bora";
  const assameseDesc1 = `ঐ গধূলি গধূলি 
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
  #বসন্তৰ_পদূলিত_পছোৱাৰ_সুহুৰি`;
  const englishDesc1 = `𝑅𝑖𝑛𝑖𝑘𝑖 𝑟𝑖𝑛𝑘𝑖 𝑟𝑎𝑛𝑔𝑜𝑙𝑖 𝑏𝑒𝑙𝑖𝑡𝑖
  𝑗𝑖𝑙𝑖𝑘𝑒 𝑚𝑎𝑗𝑢𝑙𝑖𝑡𝑒 𝑜𝑖
  𝑗𝑒𝑡ℎ𝑜𝑟𝑒 𝑗𝑢𝑟𝑢𝑙𝑎 𝑘ℎ𝑎𝑢𝑛𝑒 𝑥𝑜ℎ𝑢𝑎
  𝑏𝑢𝑘𝑢𝑡𝑒 𝑏𝑜𝑛𝑔𝑒𝑒𝑡 ℎ𝑜𝑖
  Get ready to be swept off your feet!  We're thrilled to announce that the incredibly talented 𝐍𝐈𝐋𝐎𝐓𝐏𝐀𝐋 𝐁𝐎𝐑𝐀 will be gracing our stage for the night!  Join us for an unforgettable evening filled with soulful melodies and electrifying performances.  Experience the magic as 𝐍𝐈𝐋𝐎𝐓𝐏𝐀𝐋 𝐁𝐎𝐑𝐀 captivates hearts and souls with his mesmerizing voice and captivating presence.
  #arrival_of_the_flâneur_wind_of_spring_aroma 
  #posua_singing_serenade_of_spring`;
  const photoLink1 =
    "https://res.cloudinary.com/dp92qug2f/image/upload/v1711634914/Runway-2024-03-28T13_53_53.448Z-Upscale-Image-Upscaled-Image-2550-x-1920-min_bvkkf6.webp";
  const profession1 = "Singer";

  const profession2 = "Folk Group";
  const name2 = "Xomonnoy Gushti";
  const assameseDesc2 = `লোকসংস্কৃতি বুলিয়েই মনলৈ আহে এটি জাতিৰ স্বকীয় পৰিচয়। লোকসংস্কৃতিয়ে দি আহিছে একো একোটি জাতিক নিজস্বতাৰ স্বীকৃতি। ঠিক তেনেদৰেই আমাৰ অসমীয়া লোকসংস্কৃতিৰ ভঁৰালটোও তেনেই চহকী। ইতিহাসে ঢুকি নোপোৱা সময়ৰ পৰাই অসমৰ লোকসংস্কৃতিয়ে কৈ আহিছে চহা অসমীয়াৰ হৰ্ষ - বিষাদৰ কথা, জীৱন প্ৰণালীৰ নিয়ম আৰু শতাধিক সময়ৰ গৌৰৱময় গাথা। অসমৰ এই লোকজীৱনৰ জীৱনচৰ্চাৰ কলাত্মক প্ৰকাশত এক গুৰুত্বপূৰ্ণ ভূমিকা পালন কৰি আহিছে লোক সাংস্কৃতিক সংগঠন 'সমন্বয় এনাজৰী সাংস্কৃতিক গোষ্ঠীয়ে'। সবাতোকৈ আনন্দৰ কথা এয়া যে, লোকসংস্কৃতিৰ ধ্বজাবাহক এই শিল্পীসকল আহি আছে 'পছোৱা'২৪' মঞ্চ শুৱনি কৰিবলৈ। সেয়েহে আপোনালোকো সাজু হওক, লোকসংস্কৃতিৰ এই ন-ৰূপৰ উপস্থাপনৰ আনন্দত বিলীন হ'বলৈ।
  #শিমলু_ফুলিছে_ৰঙচুৱা_পদূলিত_হেঁপাহৰ_পছোৱা 
  #বসন্তৰ_পদূলিত_পছোৱাৰ_সুহুৰি `;
  const englishDesc2 = `Folk culture narrates the unexplored realms of history and serves as the acknowledgment of a community's intrinsic identity. Culture validates the sovereignty of each ethnicity. Similarly, the rich tapestry of our Assamese culture resonates profoundly. It is precisely through the richness of our Assamese cultural heritage that our identity is portrayed: the unexplored realms of history narrate the tales of joy and sorrow, the societal norms, and the glorious sagas of bygone eras within Assamese culture. Embracing the artistic expression of the indigenous Assamese, the "𝑿𝒐𝒎𝒐𝒏𝒏𝒐𝒚 𝑬𝒏𝒂𝒋𝒐𝒓𝒊 𝑺𝒂𝒏𝒔𝒌𝒓𝒊𝒕𝒊𝒌 𝑮𝒖𝒔𝒉𝒕𝒊" has played a significant role in representing the diverseness of this land.  It's a matter of great joy that the flag bearers of our cultural heritage, these artists, are set to grace the Posua'24 stage. So, let's come together and revel in the presentation of Assamese culture in its myriad forms, for it's a celebration that promises to immerse us in joy and enlightenment.
  #arrival_of_the_flâneur_wind_of_spring_aroma 
  #posua_singing_serenade_of_spring`;
  const photoLink2 =
    "https://res.cloudinary.com/dp92qug2f/image/upload/v1711635199/Runway-2024-03-28T14_07_15.809Z-Upscale-Image-Upscaled-Image-2396-x-1920-min_gvp6bp.webp";
  return (
    <div
      className={`relative w-[100%] transition-all duration-[1000ms] ease-in-out ${first || second || third ? "h-[55rem]" : " h-[25rem]"}`}
    >
      <div
        className={`flex w-[100%] justify-center gap-[8rem] transition-all duration-[1500] ease-in-out ${first || second || third ? "top-[37rem]" : "top-[0rem]"} absolute`}
      >
        <div
          className={`transition-all duration-[1500ms] ease-in-out ${first ? "absolute top-[-37rem]" : "top-[0rem]"}`}
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
            name={name1}
            photoLink={photoLink1}
            assameseContent={assameseDesc1}
            englishContent={englishDesc1}
            profession={profession1}
          />
        </div>
        <div
          className={`transition-all duration-[1500ms] ease-in-out ${second ? "absolute top-[-37rem]" : "top-[0rem]"}`}
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
            photoLink={photoLink2}
            name={name2}
            assameseContent={assameseDesc2}
            englishContent={englishDesc2}
            profession={profession2}
          />
        </div>

        {/* <div
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
            assameseContent={assameseDesc}
            englishContent={englishDesc}
          />
        </div> */}
      </div>
    </div>
  );
};

export default ArtistPageAnimation;
