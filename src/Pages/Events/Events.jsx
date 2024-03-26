import { React, useState } from "react";
import Lottie from "lottie-react";
import styles from "./Events.module.scss";
import styles2 from "./EventCarousel.module.scss";
import Pokhila from "../../assets/pokhila.json";
import data from "../../assets/Events.json";
// width: `${current === item.id ? '100vw' : '12rem'}`,
// height: `${current === item.id ? '100vh' : '12rem'}`,
const Carousel = ({ active }) => {
  const MAX_VISIBILITY = 1;
  return (
    <div className={styles2.outerParent}>
      <div className={styles2.carouselCont}>
        <div className={styles2.carousel}>
          {data.map((d, i) => (
            <div
              className={styles2.cardContainer}
              style={{
                "--active": i === active ? 1 : 0,
                "--offset": (active - i + 1) / 3,
                "--direction": Math.sign(active - i),
                "--abs-offset": Math.abs(active - i) / 3,
                "pointer-events": active === i ? "auto" : "none",
                opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0.5" : "1",
                display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
                zIndex: `${i === active ? 5 : 0}`,
              }}
            >
              <div className={styles2.cardParent}>
                <div className={styles2.card}>
                  <img src={d.src} alt="event" className={styles2["card-img"]} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const ExtendedView = ({ mode, setExtended, extended }) => {
  const [active, setActive] = useState(1);
  return (
    <div
      className={styles.ExtendedView}
      style={{
        backgroundImage: `url(${data[active - 1].src})`,
        transform: `translateX(${mode * 100}vw)`,
        transition: `linear ${mode === 0 ? "100ms" : "10ms"}`,
        // transitionDelay: `${mode === 0 ? "500ms" : "0ms"}`,
        backgroundColor: "#000000",
        width: `${mode === 1 ? "0vw" : "100vw"}`,
      }}
    >
      <div className={styles.innerFilter}>
        <div className={styles.writtenContent}>
          <h1 className={styles.h1}>{data[active - 1].name}</h1>
          <p className={styles.description}>{data[active - 1].description}</p>
          <div className={styles.sliderBtnCont}>
            {active > 1 && (
              <button
                onClick={() => setActive((i) => i - 1)}
                className={styles.sliderBtn}
              >
                <img
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1710773641/posua/arrow_btn_left_jtj4x2.svg"
                  alt="slide to left"
                />
              </button>
            )}
            {active < data.length - 1 && (
              <button
                onClick={() => setActive((i) => i + 1)}
                className={styles.sliderBtn}
              >
                <img
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1710773630/posua/arrow_btn_right_c3iviw.svg"
                  alt="slide to right"
                />
              </button>
            )}
            <button onClick={() => setExtended(extended === 0 ? 1 : 0)}>
              <img
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1710584144/posua/arrow_ketmkt.svg"
                alt="arrow"
                className={styles.imgExit}
              />
            </button>
          </div>
        </div>
        <Carousel active={active} />
        {/* <div className={styles.carouselParent}>
          {data.map((item) => (
            <img
              key={item.id}
              src={item.src}
              alt={item.name}
              style={{
                transform: `translateX(${-(current - 1) * 20}%)`,
                transition: "linear 250ms",
                zIndex: `${current === item.id ? 1 : 0}`,
                scale: `${current === item.id ? 1.2 : 1}`
              }}
              className={styles.eachItem}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};
const Events = () => {
  const [extended, setExtended] = useState(1);
  return (
    <div className={styles.superParent}>
      <Lottie animationData={Pokhila} className={styles.pokhila} />
      <img
        src="https://res.cloudinary.com/dhry5xscm/image/upload/v1711312009/posua/center-circle_vs9g1x.svg"
        alt="center rangoli"
        className={styles.centreRangoli}
      />
      <div className={styles.jaapiCont}>
        <div className={styles.jaapi2}>
          <img
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1711282085/posua/jaapi-hanger2_wcjvap.svg"
            alt="hanger2"
            className={styles.hanger2}
          />
          <img
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1711284088/posua/jaapi2_r9war4.svg"
            alt="jaapi2"
            className={styles.jaapiCircle2}
          />
        </div>
        <div className={styles.jaapi3}>
          <img
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1711282087/posua/jaapi-hanger3_qrurkq.svg"
            alt="hanger3"
            className={styles.hanger3}
          />
          <img
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1711284006/posua/jaapi3_xe04tl.svg"
            alt="jaapi3"
            className={styles.jaapiCircle3}
          />
        </div>
        <div className={styles.jaapi1}>
          <img
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1711282083/posua/jaapi-hanger1_ftqzsn.svg"
            alt="hanger1"
            className={styles.hanger1}
          />
          <img
            src="https://res.cloudinary.com/dhry5xscm/image/upload/v1711283928/posua/jaapi1_lrsip6.svg"
            alt="jaapi1"
            className={styles.jaapiCircle1}
          />
        </div>
      </div>
      <div className={styles.parent}>
        <div className={styles.innerCont}>
          <h1 className={styles.heading}>EVENTS</h1>
          <p className={styles.description}>
            Posua, the wind that brings rain to the dry and parched earth, an aroma of
            sweetness which brings the promise of spring. The advent of Posua ushers a
            sense of brotherhood in us, the richness of our region united under the same
            shed. We, the students of NITS, through Posua, aim to demonstrate our rich
            cultural heritage, showcase different segments and bless the stage with the
            fragrance of our uniqueness, to show everyone the pride that we feel as
            offsprings of our motherland.
          </p>
          <div className={styles.arrowCont}>
            <button
              className={styles.arrowInner}
              onClick={() => setExtended(extended === 0 ? 1 : 0)}
            >
              <img
                src="https://res.cloudinary.com/dhry5xscm/image/upload/v1710584144/posua/arrow_ketmkt.svg"
                alt="arrow"
                className={styles.img}
              />
              <h1 className={styles.viewDetails}>VIEW EVENTS</h1>
            </button>
          </div>
        </div>
      </div>
      <ExtendedView mode={extended} extended={extended} setExtended={setExtended} />
    </div>
  );
};

export default Events;
