import React from "react";

const ArtistCard = ({ clickk, setClickk, setCross, name }) => {
  //  const [clickk, setClickk] = useState(false);
  // console.log(clickk);
  const backFrame =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711056518/Frame_2608596_hzjumh.jpg?_s=public-apps";
  const frame =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711056519/Group_2608667_reshtk.jpg?_s=public-apps";
  const photoLink =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710876326/sf7py4kekiyxmzcndxqp.jpg?_s=public-apps";
  return (
    <div
      className={`flex items-center transition-all duration-300 ease-in-out ${clickk ? "w-[95vw] md:w-[60rem] h-[25rem] border-[.5rem] shadow-md justify-between" : "w-[12.8rem] h-[17.3rem] justify-center"}`}
      style={{ borderColor: "#C7A158", backgroundColor: "#F1E4D0" }}
    >
      <div
        className={`flex justify-center items-center relative transition-all duration-500 ease-in-out ${clickk ? "w-[16rem] h-[21rem] ml-[1rem]" : "w-[12rem] h-[17rem]"}`}
        onClick={() => {
          setClickk(true);
        }}
      >
        <div className="absolute w-[100%] h-[100%] flex justify-center items-center z-[10]">
          <img src={backFrame} alt="Background" className="h-full w-full object-cover" />
        </div>
        <div className="absolute w-[100%] h-[100%] flex justify-center items-center z-[15]">
          <img src={frame} alt="Frame" className="w-full h-full" />
        </div>
        <div className="absolute w-[100%] h-[100%] flex justify-center items-center z-[12]">
          <img src={photoLink} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className={`absolute w-[100%] h-[100%] flex flex-col justify-center items-center  z-[20]  ${clickk ? "top-[6.7rem] leading-[1.3rem]" : "top-[5.5rem] leading-[1rem]"}`}
        >
          <div
            className={`font-semibold ${clickk ? "text-[1.3rem]" : "text-[1rem]"}`}
            style={{ color: "#B02227" }}
          >
            {name}
          </div>
          <div className="text-[.8rem]" style={{ color: "#B02227" }}>
            Singer
          </div>
        </div>
      </div>
      <div
        className={`w-[45vw] flex flex-col gap-[1.5rem] flex-wrap h-full justify-center items-center px-[3rem] transition-all duration-500 ease-in-out ${clickk ? "opacity-100 relative" : "absolute opacity-0"}`}
      >
        <div
          className="text-[3rem] font-bold"
          style={{ color: "#B02227", fontFamily: "Abril Fatface" }}
        >
          {name}
        </div>
        <div
          className="text-[.8rem] text-center"
          style={{ color: "#5F1516", fontFamily: "Alata" }}
        >
          অসমৰ গাঁৱে-ভূঞে, চহৰে-নগৰে অসমীয়াৰ হুচৰিক মঞ্চত উপস্থাপন কৰি দৰ্শকৰ অপূৰ্ব
          খ্যাতি লাভ কৰিবলৈ সক্ষম হোৱা &quot;দেউচিলা বিহুদল&quot; আহি আজি এন. আই. টি. ৰ
          বাকৰি শুৱনি কৰিছেহি। এন. আই. টি. ৰ বিহুবলীয়া ৰাইজৰ মন প্ৰাণ জিনিবলৈ নিজৰ ঢোল,
          পেঁপা, গগনাৰ লগতে বিভিন্ন বাদ্যযন্ত্ৰৰ সুৰেৰে আপ্লুত কৰি তুলিবলৈ সাজু
          &quot;দেউচিলা বিহুদল&quot;। ঢোলৰ চাপৰত হুঁচৰিৰ চেঁৱত আকৌ এবাৰ কঁকাল ভাঙি
          নাচিবলৈ, এতিয়া মাথোঁ অপেক্ষা ৫ মাৰ্চ তাৰিখলৈ
        </div>
        <div
          className="text-[.8rem] text-center"
          style={{ color: "#5F1516", fontFamily: "Alata" }}
        >
          Spring has finally arrived, and the anticipation has culminated in the sounds of
          Bihu beats all around the corner. And with this, NIT Silchar is all set to host
          performance of &apos;Deusila Bihudol&apos;, a renowned folk group whose
          mesmerizing shows have captivated audiences and made them groove to the beats of
          Bihu. Brace yourselves for a magnificent cultural event as &apos;Deusila
          Bihudal&apos; takes the stage with their drums, pepas, gaganas and various other
          musical instruments, ready to win the hearts of many. Hoping to see you all
          there promptly!
        </div>
        <div
          className="absolute top-[-.4rem] right-3 text-[2rem] text-red-600 font-bold cursor-pointer z-[100]"
          onClick={() => {
            setClickk(false);
            setCross(false);
          }}
        >
          ×
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
