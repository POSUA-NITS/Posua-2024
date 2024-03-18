import { useState } from "react";
import styles from "./Events.module.scss";

const ExtendedView = ({ mode }) => {
  return (
    <div
      className={styles.ExtendedView}
      style={{ transform: `translateX(${mode * 100}vw)`, transition: "ease 1000ms" }}
    >
      ExtendedView
    </div>
  );
};
const Events = () => {
  const [extended, setExtended] = useState(1);
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
            </button>
          </div>
        </div>
      </div>
      <ExtendedView mode={extended} />
    </div>
  );
};

export default Events;
