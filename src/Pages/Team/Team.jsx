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

  const hospitality = [
    {
      id: 3,
      name: "Dibyajyoti Bora",
      designation: "Hospitality Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711657371/posua/Dibyajyoti_-_CE_038_Dibyajyoti__Bora_ghv2of.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 8,
      name: "Janarddan Borah",
      designation: "Hospitality Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711655471/posua/IMG-20240225-WA0026-012_-_CE_044_JANARDDAN_BORAH_jba7j9.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 21,
      name: "Preetima Das",
      designation: "Hospitality Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711658765/posua/IMG-20240313-WA0367-CEB099-Preetima-Das_iyctke.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
  ];
  const decoration = [
    {
      id: 9,
      name: "Jahnabi Devi",
      designation: "Decoration Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711658749/posua/IMG_20240325_194021-CEB110-Jahnabi-DEVI_jv3szn.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 10,
      name: "Alvina Das",
      designation: "Decoration Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711658765/posua/IMG-20240313-WA0248-ME-B-141-ALVINA-DAS_pz8yxe.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
  ];
  const design = [
    {
      id: 5,
      name: "Nilabh Das",
      designation: "Design Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711655461/posua/Nilabh_Das_-_ME_A_001_Nilabh_Das_opdg27.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
  ];
  const content = [
    {
      id: 18,
      name: "Srutishmita Das",
      designation: "Content Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711655454/posua/photo_2_-_EE-A_080_Srutishmita_Das_u7r36y.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 23,
      name: "Gitartha Pratim Borah",
      designation: "Content Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711655482/posua/8ce76305-4a11-4e05-91a8-7ba10267555e_-_ME_A_064_Gitartha_Pratim_Borah_jsttpi.webp",
      facebook: "https://www.facebook.com/johndoe",
      github: "https://github.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
  ];
  const Infra = [
    {
      id: 11,
      name: "Bikash Sharma",
      designation: "Infra & Logistics Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711658741/posua/IMG_20240315_210734_596-EI18Bikash-sharma_rouwwt.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 13,
      name: "Krishnav Choudhury",
      designation: "Infra & Logistics Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711655483/posua/WhatsApp_Image_2024-03-25_at_11.43.32_PM_-_CE_056_Krishnav__Choudhury_nvrfxc.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 17,
      name: "Ranjan Kumar Mandal",
      designation: "Infra & Logistics Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711655458/posua/b7ae00b3-51f9-4e68-8177-ff1b6941c9c1_-_CE_041_RANJAN_KUMAR___MANDAL_fihdpa.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 30,
      name: "Hannan Afridi",
      designation: "Infra & Logistics",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711661195/posua/Passport1_-_ME_A_012_Hannan_Afridi_jncyka.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 30,
      name: "Sinaan Khanikar",
      designation: "Infra & Logistics",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711661173/posua/IMG_20240225_032139_-_EI15_SINAAN_KHANIKAR_wa2h2m.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
  ];
  const Rally = [
    {
      id: 4,
      name: "Reetom Rana Dutta",
      designation: "Cultural Rally Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711658744/posua/Artboard1-EE-A-037-Reetom-Rana-Dutta_qvqxfs.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 6,
      name: "Partha Pratim Bhuyan",
      designation: "Design Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711655479/posua/IMG_0149_-_EI44_Parthapratim_Bhuyan_pm5ja2.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 24,
      name: "Chiranjit Borah",
      designation: "Cultural Rally Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711655486/posua/WhatsApp_Image_2024-03-27_at_12.56.04_AM_-_ME_B_085_Chiranjit_BORAH_s8godf.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
  ];
  const Publicity = [
    {
      id: 7,
      name: "Nabarun Gathiri",
      designation: "Publicity Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711655471/posua/A5F9ADFF-23DE-4B87-9BEA-70014F8D12C5_-_ME_A_007_Nabarun_Gathiri_hqzfbz.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
  ];
  const eventManagement = [
    {
      id: 12,
      name: "Mridusmita Choudhury",
      designation: "Event Management Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711658766/posua/Mridu-EI30-Mridusmita-Choudhury_afd0fq.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 15,
      name: "Debalina Borah",
      designation: "Event Management Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711655462/posua/WhatsApp_Image_2024-03-25_at_6.41.26_PM_-_EE-A_077_Debalina_Borah_guntot.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 19,
      name: "Amlan Jyoti Mahanta",
      designation: "Event Management Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711658735/posua/IMG_20230628_181108_088-CE_026_Amlan_Jyoti_Mahanta_wgg2b0.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 25,
      name: "Uddipta Borah",
      designation: "Event Management Head",
      photoLink:
        "https://res.cloudinary.com/dp92qug2f/image/upload/v1711681895/Screenshot_2024-03-27-15-59-08-516_com.miui.gallery_-_CE_035_Uddipta_Borah_2_ydxzd0.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 28,
      name: "Nabasmita Borah",
      designation: "Event Management Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711655462/posua/IMG_2717_-_CE_072_Nabasmita__Borah._t2qm9i.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
  ];
  const Food = [
    {
      id: 27,
      name: "Sudipto Dey",
      designation: "Head (Food)",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711659948/posua/Screenshot_20240328_185126_Gallery_-_ME_A_063_Sudipto_Dey_r0usvw.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 29,
      name: "Agnibh Rajkonwar",
      designation: "Head (Food)",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711655473/posua/IMG_20240325_124706_-_EI27_Agnibh_Rajkonwar_o58gfq.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
  ];
  const photography = [
    {
      id: 16,
      name: "Bishal Thakur",
      designation: "Photography & Videography Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711655482/posua/IMG-20231120-WA0062_1_-01_2_-_CE_005_Bishal__Thakur_qhr7no.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
  ];
  const Marketing = [
    {
      id: 20,
      name: "Mainur Islam Ahmed",
      designation: "Marketing Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711658771/posua/mainur_x1xxzo.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 26,
      name: "Chandan Mahato",
      designation: "Marketing Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711655484/posua/11_-_EE-A_035_Chandan_Mahato_q6uth5.webp",
      facebook: "https://www.facebook.com/janesmith",
      github: "https://github.com/janesmith",
      linkedin: "https://www.linkedin.com/in/janesmith",
    },
  ];

  const UnionData = [
    {
      id: 1,
      name: "Amlandeep Dutta",
      designation: "Chief Coordinator",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711655462/posua/IMG-20240326-WA0021_-_CE_067_Amlandeep__Dutta_w52mmp.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 2,
      name: "Dhiraj deka",
      designation: "Chief Coordinator",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711657351/posua/IMG_20240328_185159_-_ME_A_077_Dhiraj_deka_b6duvt.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 14,
      name: "Sasanka Shayamol Saikia",
      designation: "Executive Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711658786/posua/IMG20211017150443-_1_-01-01-CSE-190-Sasanka-Shayamol-Saikia_nyx984.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 22,
      name: "Hrishikesh Choudhury",
      designation: "Executive Head",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711655476/posua/WhatsApp_Image_2024-03-26_at_11.49.41_PM_-_CE_060_Hrishikesh__Choudhury_gagzba.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
  ];

  const developerData = [
    {
      id: 1,
      name: "Manish Sarmah",
      photoLink:
        "https://res.cloudinary.com/draptrzrc/image/upload/v1708265097/techTeam2/gojaldydoehwty1i3tiz.webp",
      facebook: "https://www.facebook.com/manish.sarmah.9",
      github: "https://github.com/manisarmah",
      linkedin: "https://www.linkedin.com/in/manish-sarmah/",
    },
    {
      id: 2,
      name: "Himangshu Sarma",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711661232/posua/My_PFP_1_-_ECE_013_Himangshu_Sarma_dzv28b.webp",
      facebook: "https://www.facebook.com/johndoe",
      github: "https://github.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      id: 3,
      name: "Aditya Ranjan",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711661209/posua/1679759309003_-_CE070_Aditya_Ranjan_hfavuz.webp",
      facebook: "https://www.facebook.com/janesmith",
      github: "https://github.com/janesmith",
      linkedin: "https://www.linkedin.com/in/janesmith",
    },
    {
      id: 4,
      name: "Pragya Annesha Baruah",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711661249/posua/IMG_20240302_020246_170_-_132_Pragya_Annesha_Baruah_cwgfs2.webp",
      facebook: "https://www.facebook.com/michaeljohnson",
      github: "https://github.com/michaeljohnson",
      linkedin: "https://www.linkedin.com/in/michaeljohnson",
    },
    {
      id: 5,
      name: "Arindom Sarmah",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711662554/posua/Screenshot_20240328_213350_Gallery_-_ECE_106_ARINDOM_SARMAH_twg7ag.webp",
      facebook: "https://www.facebook.com/johndoe",
      github: "https://github.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      id: 6,
      name: "Satya Prakash Upadhyaya",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711662228/posua/IMG-20240226-WA0001_-_CSE_104_Satya_mgtrbx.webp",
      facebook: "https://www.facebook.com/johndoe",
      github: "https://github.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      id: 7,
      name: "Debisma Priya Borah",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711662234/posua/IMG-20240328-WA0099_-_CSE_116__Debisma_wuklaz.webp",
      facebook: "https://www.facebook.com/johndoe",
      github: "https://github.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      id: 8,
      name: "Pragya Prabir Ranjan Deka",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711662980/posua/Profile_Pragya_-_CSE_130_PRAGYAPRABIR_j39ks8.webp",
      facebook: "https://www.facebook.com/johndoe",
      github: "https://github.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      id: 9,
      name: "Barnil Sarma",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711665742/posua/barnil_sarma_photo_rkuclc.webp",
      facebook: "https://www.facebook.com/johndoe",
      github: "https://github.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      id: 10,
      name: "Anurag Tamuli",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711662257/posua/IMG_20240211_212609_042_-_EE_081_AnuragTamuli_h5znma.webp",
      facebook: "https://www.facebook.com/johndoe",
      github: "https://github.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      id: 11,
      name: "Kaustav Deb",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711662253/posua/IMG-20230731-WA0061_-_ME_026_Kaustav_ravlle.webp",
      facebook: "https://www.facebook.com/johndoe",
      github: "https://github.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      id: 12,
      name: "Gracie G Rabha",
      photoLink:
        "https://res.cloudinary.com/dhry5xscm/image/upload/v1711662290/posua/IMG-20240328-WA0031_-_CSE_012__Gracie_xjvqg3.webp",
      facebook: "https://www.facebook.com/johndoe",
      github: "https://github.com/johndoe",
      linkedin: "https://www.linkedin.com/in/johndoe",
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
    <div className="flex flex-col justify-center items-center m-0 p-0 relative overflow-x-hidden overflow-y-hidden mb-[4rem]">
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
        className="text-center md:text-[1.4rem] px-[2rem] sm:px-[7rem]  md:px-[10rem] z-[2]"
        style={{
          color: "#9B2125",
          fontFamily: "DM Serif Display | serif",
          lineHeight: "1.8",
          fontStyle: "italic",
        }}
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
        {UnionData.map((profile, i) => {
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
          {UnionData.map((profile) => {
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
                  <div className="w-[100%] flex justify-center  items-center">
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

      <LottieHeading title="HOSPITALITY" />

      {/* *****************TeamCard for desktop view start1***************** */}
      <div className="my-[4rem] md:grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-[7rem] gap-y-[3rem] z-[10] hidden">
        {hospitality.map((profile, i) => {
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
          {hospitality.map((profile) => {
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
      {/* <TeamCard /> */}
      {/* *****************TeamCard for mobile view end2***************** */}
      <LottieHeading title="DECORATION" />

      {/* *****************TeamCard for desktop view start1***************** */}
      <div className="my-[4rem] md:grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-[7rem] gap-y-[3rem] z-[10] hidden">
        {decoration.map((profile, i) => {
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
          {decoration.map((profile) => {
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

      <LottieHeading title="MANAGEMENT" />

      {/* *****************TeamCard for desktop view start1***************** */}
      <div className="my-[4rem] md:grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-[7rem] gap-y-[3rem] z-[10] hidden">
        {eventManagement.map((profile, i) => {
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
          {eventManagement.map((profile) => {
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
      <LottieHeading title="CONTENT" />

      {/* *****************TeamCard for desktop view start1***************** */}
      <div className="my-[4rem] md:grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-[7rem] gap-y-[3rem] z-[10] hidden">
        {content.map((profile, i) => {
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
          {content.map((profile) => {
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

      <LottieHeading title="DESIGN" />

      {/* *****************TeamCard for desktop view start1***************** */}
      <div className="my-[4rem] md:grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-[7rem] gap-y-[3rem] z-[10] hidden">
        {design.map((profile, i) => {
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
          {design.map((profile) => {
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

      <LottieHeading title="LOGISTICS" />

      {/* *****************TeamCard for desktop view start1***************** */}
      <div className="my-[4rem] md:grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-[7rem] gap-y-[3rem] z-[10] hidden">
        {Infra.map((profile, i) => {
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
          {Infra.map((profile) => {
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
      <LottieHeading title="FOOD" />

      {/* *****************TeamCard for desktop view start1***************** */}
      <div className="my-[4rem] md:grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-[7rem] gap-y-[3rem] z-[10] hidden">
        {Food.map((profile, i) => {
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
          {Food.map((profile) => {
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
      <LottieHeading title="MARKETING" />

      {/* *****************TeamCard for desktop view start1***************** */}
      <div className="my-[4rem] md:grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-[7rem] gap-y-[3rem] z-[10] hidden">
        {Marketing.map((profile, i) => {
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
          {Marketing.map((profile) => {
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
      <LottieHeading title="PHOTOGRAPHY" />

      {/* *****************TeamCard for desktop view start1***************** */}
      <div className="my-[4rem] md:grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-[7rem] gap-y-[3rem] z-[10] hidden">
        {photography.map((profile, i) => {
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
          {photography.map((profile) => {
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
      <LottieHeading title="RALLY" />

      {/* *****************TeamCard for desktop view start1***************** */}
      <div className="my-[4rem] md:grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-[7rem] gap-y-[3rem] z-[10] hidden">
        {Rally.map((profile, i) => {
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
          {Rally.map((profile) => {
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
      <LottieHeading title="PUBLICITY" />

      {/* *****************TeamCard for desktop view start1***************** */}
      <div className="my-[4rem] md:grid sm:grid-cols-2 md:grid-cols-3 md:gap-x-[7rem] gap-y-[3rem] z-[10] hidden">
        {Publicity.map((profile, i) => {
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
          {Publicity.map((profile) => {
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
      {/* *****************TeamCard for desktop view end3***************** */}

      {/* *****************TeamCard for mobile view end4***************** */}

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
