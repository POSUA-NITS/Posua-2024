// SponsporsPage
import React from "react";
import "./sponsors.scss";
import useSetTitle from "../../Hooks/SetTitle";
import LottieHeading from "../../Components/LottieHeading/LottieHeading";

const SponsorPage = () => {
  useSetTitle("Sponsors | Posua");

  const jaapi2 =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711053903/OBJECTS_1_gvgj7g.jpg?_s=public-apps";

  const topImage =
    "https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711024939/magh_bihu_1_2_t4nl8t.jpg?_s=public-apps";

  return (
    <div>
      <main>
        <div className="first pb-20">
          {/* <div className="heading">
            <img
              src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711041756/OBJECTS_y61orj.png"
              alt=""
            />
          </div> */}
          <LottieHeading title="SPONSORS" />
          <div className="sponsorContainer">
            <div className="sponsor">
              <img
                src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711098244/Hyundai_Logo_zqyig4.png"
                alt=""
              />
            </div>
            <div className="sponsor">
              <img
                src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711098243/Pran_Logo_qkebp4.png"
                alt=""
              />
            </div>
            <div className="sponsor">
              <img
                src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711098241/Oil_India-Logo_zwjxl7.png"
                alt=""
              />
            </div>
            <div className="sponsor">
              <img
                src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711098241/NRL_Logo_sja6jq.png"
                alt=""
              />
            </div>
            <div className="sponsor" id="Indian_Oil">
              <img
                src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711099239/Indian_Oil_Logo1_gx89of.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="second relative">
          <div className="w-[100%] z-[2]">
            <img src={topImage} alt="Top img" className="w-full h-full object-fill" />
          </div>
          <div
            className="w-[100%] md:h-[9rem] mb-[2rem] md:mb-[3rem] relative bottom-[.2rem] md:bottom-[1rem] z-[2]"
            style={{ overflowX: "unset" }}
          >
            <img
              src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711041758/Group_2608570_lbnsan.png"
              alt=""
            />
            {/* <img src={teamTopLogo} alt="Top logo" className="w-full h-full object-fill" /> */}
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
          <div className="sponsorContainer">
            <div className="sponsor">
              <img
                src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711098244/Hyundai_Logo_zqyig4.png"
                alt=""
              />
            </div>
            <div className="sponsor">
              <img
                src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711098243/Pran_Logo_qkebp4.png"
                alt=""
              />
            </div>
            <div className="sponsor">
              <img
                src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711098241/Oil_India-Logo_zwjxl7.png"
                alt=""
              />
            </div>
            <div className="sponsor">
              <img
                src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711098241/NRL_Logo_sja6jq.png"
                alt=""
              />
            </div>
            <div className="sponsor" id="Indian_Oil">
              <img
                src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711099239/Indian_Oil_Logo1_gx89of.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="cardContainer">
          <div className="card">
            <div className="inner">
              <div className="number">
                <p>01</p>
              </div>
              <div className="title">
                <p>Marketing Opportunities</p>
              </div>
              <div className="content">
                <p>
                  National Institute of Technology,Silchar,an institute of national
                  importance is pleased to announce that the institute is organising
                  POSUA’22, the Rongali Bihu Festival of Assam.
                  <br />
                  <br />
                  The entire team of POSU 2024 is dedicated to ensure maximum reach of our
                  sponsors through the basic framework of the festival. We will make the
                  best of efforts to promote our sponsoring organisations across a wide
                  audience.
                  <br />
                  <br />
                  The team will be popularizing the generous sponsors among students as
                  well as faculty so that they can avail the services rendered by your
                  organization. Your presence will be highly appreciated and would greatly
                  help us in making this annual event of the Institute a grand success.The
                  Institute will be grateful for your support and faith in us and would
                  surely extend our gratitude towards your organisation.
                  <br />
                  <br />
                  Hence,we entire team of POSUA 2022 cordially invite you for sponsorship
                  in this Annual Cultural Fest.
                </p>
              </div>
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711041820/Frame_26086392_nyx2rp.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="inner">
              <div className="number">
                <p>02</p>
              </div>
              <div className="title">
                <p>Reasons To Get Associated With Posua 2024</p>
              </div>
              <div className="content">
                <p>
                  As POSUA is the Rongali Bihu festival organised with great pomp and joy
                  ,and Bihu being the state festival of Assam ,the annual event with
                  splendid grandeur captures a large audience ,and hence has vast public
                  outreach.This provides a good opportunity of promotion to our associated
                  partners across a wider audience.
                  <br />
                  <br />
                  The association would cast a brand image of your organisation among the
                  students of the institute.As a good percentage of our students are
                  placed with heightened job opportunities,they could be potential
                  associates of your organisation in future endeavours.
                  <br />
                  <br />
                  Your organisation would have greater reach as POSUA captures a large
                  community of people from across North-Eastern India,students and faculty
                  of NIT Silchar as well as other premier institutes like NITs,IIMs and
                  other colleges.
                  <br />
                  Hence, a huge promising market comprising of prospective customers is
                  waiting for you.
                </p>
              </div>
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711041768/Frame_26086391_sgjt4z.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="inner">
              <div className="number">
                <p>03</p>
              </div>
              <div className="title">
                <p>Sponsorship Entitlements</p>
              </div>
              <div className="content">
                <p>
                  1)There will be banners and posters with mention of our sponsors put up
                  in the college campus as well as across the city during POSUA’22.
                  <br />
                  <br />
                  2)We will be sending brochures,posters and flash presentations with the
                  logos of our sponsors to several engineering and science colleges across
                  the nation.
                  <br />
                  <br />
                  3)Publicity pamphlets or any other material provided by sponsors would
                  also be popularised in the campus during the fest,
                  <br />
                  <br />
                  4) There will be special mention of sponsors on the official website of
                  POSUA.Since the day of sponsorship confirmation, the logo and link of
                  official websites of our respective sponsors will be featured in our
                  website
                  <br />
                  <br />
                  <br />
                  5)There will be special arrangements made for the sponsors who would
                  prefer marketing their products and services by setting up stalls and
                  kiosks.
                </p>
              </div>
              <div className="image">
                <img
                  src="https://res.cloudinary.com/dex25uzgp/image/upload/v1711041752/Frame_2608639_hwrfdx.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SponsorPage;
