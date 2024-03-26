import Pepa from "./Pepa";
import styles from "./Borhomthuri.module.scss";
// import Film from "./Filmy";
// import Card from "./Card";
import data from "../../assets/Edition.json";
// import ScrolBar from "./ScrolBar";
// import FrontCover from "./FrontCover";
const Borhomthuri = () => {
  return (
    <div className={styles.superParent}>
      <div className={styles.ParentClass}>
        <Pepa />
        {/* <Film /> */}
        {/* <Card/> */}
        {/* <FrontCover/> */}
        <div className={styles.Child1}>
          <div className={styles.text}>
            <p>
              Borhomthuri is the annual souvenir of POSUA.It enfolds indispensable parts
              of Assamese Culture and also the emotions of students in the form of
              enthralling articles,poems,stories and sketches.Borhomthuri reflects the
              ardour of NITS Family towards POSUA and provides an opportunity for the
              literary skills of students to get revived
            </p>
          </div>

          <div className={styles.cameraImg}>
            <img
              alt="Camera"
              src="https://res.cloudinary.com/dl0knguhb/image/upload/v1711485113/FILM_1_lum7nf.svg"
            />
          </div>
        </div>

        <div className={styles.child2}>
          <div className={styles.HiddenText}>
            <p>
              Borhomthuri is the annual souvenir of POSUA.It enfolds indispensable parts
              of Assamese Culture and also the emotions of students in the form of
              enthralling articles,poems,stories and sketches.Borhomthuri reflects the
              ardour of NITS Family towards POSUA and provides an opportunity for the
              literary skills of students to get revived
            </p>
          </div>
          {/* <ScrolBar /> */}
          {/* <div className={styles.movingCards}>
            {
              data.map((item)=>(
                <Card imgSrc={item.src} srcMag={item.link} />
              ))
            }
          </div> */}
          <div className={styles.galleryBorhomthuri}>
            {data.map((item) => (
              <a href={item.link} style={{ margin: "1.2rem" }}>
                <img src={item.src} alt="magazine" />
                <img src={item.edition_num} alt="Edition" />
              </a>
            ))}
          </div>
          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ratione, perspiciatis vitae sit asperiores quia sunt quasi maxime. Nihil, officia qui fuga reprehenderit obcaecati ipsam alias vel hic laudantium pariatur aliquam mollitia reiciendis explicabo? */}
        </div>
      </div>
    </div>
  );
};

export default Borhomthuri;
