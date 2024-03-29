import React from "react";

const ArtistCard = ({
  clickk,
  setClickk,
  setCross,
  photoLink,
  name,
  profession,
  assameseContent,
  englishContent,
}) => {
  //  const [clickk, setClickk] = useState(false);
  // console.log(clickk);
  const backFrame =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711056518/Frame_2608596_hzjumh.jpg?_s=public-apps";
  const frame =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711056519/Group_2608667_reshtk.jpg?_s=public-apps";
  // const photoLink =
  //   "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710876326/sf7py4kekiyxmzcndxqp.jpg?_s=public-apps";
  return (
    <div
      className={`flex items-center transition-all duration-[1000ms] ease-in-out ${clickk ? "w-[95vw] md:w-[50rem] lg:w-[60rem] h-[auto] border-[.5rem] shadow-md justify-between pb-8" : "w-[12.8rem] h-[16rem] justify-center"}`}
      style={{ borderColor: "#C7A158", backgroundColor: "#F1E4D0" }}
    >
      <div
        className={`flex justify-center cursor-pointer items-center relative transition-all duration-[1000ms] ease-in-out ${clickk ? "w-[16rem] h-[21rem] ml-[1rem]" : "w-[12rem] h-[15rem]"}`}
        onClick={() => {
          setClickk(true);
        }}
      >
        <div className="w-[20rem] h-[100%] flex justify-center items-center z-[10]">
          <img src={backFrame} alt="Background" className="h-full w-full object-cover" />
        </div>
        <div className="absolute w-[100%] h-[100%] flex justify-center items-center z-[15]">
          <img src={frame} alt="Frame" className="w-full h-full" />
        </div>
        <div className="absolute w-[100%] h-[100%] flex justify-center items-center z-[12]">
          <img src={photoLink} alt="" className="w-full h-full object-cover" />
        </div>
        <div
          className={`absolute w-[100%] h-[100%] flex flex-col justify-center items-center  z-[20]  ${clickk ? "top-[6.7rem] leading-[1.3rem]" : "top-[4.9rem] leading-[1.1rem]"}`}
        >
          <div
            className={`font-semibold ${clickk ? "text-[1.3rem]" : "text-[1rem]"}`}
            style={{ color: "#B02227" }}
          >
            {name}
          </div>
          <div className="text-[.7rem]" style={{ color: "#B02227" }}>
            {profession}
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col gap-[1.5rem] flex-wrap h-full justify-center items-center px-[1rem] md:px-[3rem] transition-all duration-500 ease-in-out ${clickk ? "opacity-100 relative" : "absolute opacity-0"}`}
      >
        <div
          className="text-[3rem] font-bold"
          style={{ color: "#B02227", fontFamily: "Abril Fatface" }}
        >
          {name}
        </div>
        <div
          className={`text-[.8rem] text-center transition-all ease-in-out duration-[3000ms] ${clickk ? "opacity-100" : "opacity-0"}`}
          style={{ color: "#5F1516", fontFamily: "Alata" }}
        >
          {assameseContent}
        </div>
        <div
          className={`text-[.8rem] text-center transition-all ease-in-out duration-[3000ms]  ${clickk ? "opacity-100" : "opacity-0"}`}
          style={{ color: "#5F1516", fontFamily: "Alata" }}
        >
          {englishContent}
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
