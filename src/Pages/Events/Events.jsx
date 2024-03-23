/* eslint-disable no-console */
import { React, useState, useEffect } from "react";
import styles from "./Events.module.scss";
import data from "../../assets/Events.json";
// import {  } from "react";
// width: `${current === item.id ? '100vw' : '12rem'}`,
// height: `${current === item.id ? '100vh' : '12rem'}`,
const ExtendedView = ({ mode, current, setCurrent }) => {
  // console.log(mode, current);
  console.log("mode", mode);
  console.log("current", current);
  console.log("src", data[current].src);
  console.log("typeof current", typeof current);
  console.log("typeof data.length", typeof data.length);
  const [allIndex, setAllIndex] = useState([]);

  useEffect(() => {
    // const arr = []
    // for (let i = 0; i < data.length; i += 1) {
    //   if (i !== current - 1) {
    //     arr.push(i)
    //   }
    // }
    // setAllIndex(arr)
    if (current === 0) {
      setAllIndex([1, 2, 3]);
    } else if (current === 1) {
      setAllIndex([2, 3, 0]);
    } else if (current === 2) {
      setAllIndex([3, 0, 1]);
    } else if (current === 3) {
      setAllIndex([0, 1, 2]);
    }
  }, [current]);

  console.log("allIndex", allIndex);
  console.log("data.length", data.length);

  const [thatIndexData, setThatIndexData] = useState([]);
  useEffect(() => {
    const arr = [];
    allIndex.forEach((index) => {
      arr.push(data[index]);
    });
    setThatIndexData(arr);
  }, [allIndex]);
  console.log("thatIndexData", thatIndexData);

  return (
    <div
      className={styles.ExtendedView}
      style={{
        transform: `translateX(${mode * 100}vw)`,
        transition: `linear ${mode === 0 ? "500ms" : "10ms"}`,
        transitionDelay: `${mode === 0 ? "500ms" : "0ms"}`,
        backgroundColor: "#000000",
        width: `${mode === 1 ? "0vw" : "100vw"}`,
      }}
    >
      <div className={styles.innerFilter}>
        <div className={styles.writtenContent}>
          <h1 className={styles.h1}>{data[current].name}</h1>
          <p className={styles.description}>{data[current].description}</p>
          <div className={styles.sliderBtnCont}>
            {/* previous button */}
            {current > 0 && (
              <button
                onClick={() => setCurrent(current - 1)}
                className={styles.sliderBtn}
              >
                <img
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1710773641/posua/arrow_btn_left_jtj4x2.svg"
                  alt="slide to left"
                />
              </button>
            )}
            {/* forward button */}
            {current !== data.length - 1 && (
              <button
                onClick={() => setCurrent(current + 1)}
                className={styles.sliderBtn}
              >
                <img
                  src="https://res.cloudinary.com/dhry5xscm/image/upload/v1710773630/posua/arrow_btn_right_c3iviw.svg"
                  alt="slide to right"
                />
              </button>
            )}
          </div>
        </div>

        {/* show all the events card except the current one */}
        <div
          className={styles.carouselParent}
          style={{
            background: `url(${data[current].src}) no-repeat center / cover`,
            transition: "linear 500ms",
            // transform: `translateX(${-(current - 1) * 100}vw)`,
          }}
        >
          {/* {thatIndexData.map((item) => ( */}
          <main id={styles.carouselcardholder}>
            {thatIndexData.map((item) => (
              <img
                key={item.id}
                src={item.src}
                alt={item.name}
                style={
                  {
                    // transform: `translateX(${-(current - 1) * 2}%)`,
                    // transition: "linear 1000ms",
                    // scale: `${current === item.id - 1 ? 15 : 1}`,
                    //   display: `${current === item.id ? "none" : "block"}`,
                  }
                }
                className={styles.eachItem}
              />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const [extended, setExtended] = useState(1);
  const [current, setCurrent] = useState(0);
  return (
    <div className={styles.superParent}>
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
              />
              <h1 className={styles.viewDetails}>VIEW DETAILS</h1>
            </button>
          </div>
        </div>
      </div>
      <ExtendedView mode={extended} current={current} setCurrent={setCurrent} />
    </div>
  );
};

export default Events;
