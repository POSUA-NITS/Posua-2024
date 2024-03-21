import TeamCard from "../../Components/TeamPageUI/Teamcard";
import PatronCard from "../../Components/TeamPageUI/PatronCard";

const Team = () => {
  const teamTopLogo =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711024474/Group_2608570_tr75j3.jpg?_s=public-apps";
  const topImage =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711024939/magh_bihu_1_2_t4nl8t.jpg?_s=public-apps";
  const unionBodyImg =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711025427/OBJECTS_t50kgh.jpg?_s=public-apps";
  const coreTeamImg =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711025427/Frame_2608666_in8fmz.jpg?_s=public-apps";
  const techTeamImg =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711025427/Frame_2608668_xnvc5t.jpg?_s=public-apps";
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
    <div className="flex flex-col justify-center items-center m-0 p-0">
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
      <div className="w-[100%]">
        <img src={topImage} alt="Top img" className="w-full h-full object-fill" />
      </div>
      <div className="w-[100%] h-[11rem] mb-[5rem]">
        <img src={teamTopLogo} alt="Top logo" className="w-full h-full object-fill" />
      </div>
      <div className="text-center md:text-[1.4rem] px-[1rem]  md:px-[18rem]">
        With the arrival of spring and the departure of winter days, our Mother Nature
        expresses her joy of welcoming the calming rejuvenation via greenery and
        brightness all around her. Our Spring Fest, Posua is that venture which nurtures
        this celebration. This spree witnesses everyone coming together to work as a team,
        be it the students, the faculty members and the entire fraternity of NIT Silchar
        into its circle of gaiety and also ensures of breaking all the barriers among the
        crowd and bringing everyone together.
      </div>
      <div className="mt-[10rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-[7rem] gap-y-[2rem]">
        {patronData.map((profile, i) => {
          return <PatronCard key={profile.id} {...profile} index={i} />;
        })}
      </div>
      <div className="mx-auto my-[4rem] w-[25rem]">
        <img src={unionBodyImg} alt="Union Body" className="w-full" />
      </div>
      <div className="my-[4rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-[7rem] gap-y-[2rem]">
        {developerData.map((profile, i) => {
          return <TeamCard key={profile.id} {...profile} index={i} />;
        })}
      </div>
      <div className="mx-auto my-[4rem] w-[25rem]">
        <img src={coreTeamImg} alt="Core Team" className="w-full" />
      </div>
      <div className="my-[4rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-[7rem] gap-y-[2rem]">
        {developerData.map((profile, i) => {
          return <TeamCard key={profile.id} {...profile} index={i} />;
        })}
      </div>
      <div className="mx-auto my-[4rem] w-[25rem]">
        <img src={techTeamImg} alt="Tech Team" className="w-full" />
      </div>
      <div className="my-[4rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-[7rem] gap-y-[2rem]">
        {developerData.map((profile, i) => {
          return <TeamCard key={profile.id} {...profile} index={i} />;
        })}
      </div>
    </div>
  );
};

export default Team;
