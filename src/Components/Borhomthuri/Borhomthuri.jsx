import styles from "./Borhomthuri.module.scss";
// import Film from "./Filmy";
// import Card from "./Card";
import data from "../../assets/Edition.json";
import LottieHeading from "../LottieHeading/LottieHeading";
// import ScrolBar from "./ScrolBar";
// import FrontCover from "./FrontCover";
const Borhomthuri = () => {
  return (
    <div className={styles.superParent}>
      <div className={styles.ParentClass}>
        {/* <Pepa /> */}
        <div id={styles.pepaholder}>
          <LottieHeading title="BORHOMTHURI" />
        </div>
        {/* <Film /> */}
        {/* <Card/> */}
        {/* <FrontCover/> */}
        <div className={styles.Child1}>
          <div className={styles.text}>
            <p className={styles.p}>
              Borhomthuri is the annual souvenir of POSUA.It enfolds indispensable parts
              of Assamese Culture and also the emotions of students in the form of
              enthralling articles,poems,stories and sketches.Borhomthuri reflects the
              ardour of NITS Family towards POSUA and provides an opportunity for the
              literary skills of students to get revived
            </p>
            <div className={styles.galleryBorhomthuri}>
              {data.map((item) => (
                <a
                  href={item.link}
                  rel="noopener"
                  target="_blank"
                  style={{ margin: "1.2rem" }}
                >
                  <img src={item.src} alt="magazine" />
                  <img
                    src={item.edition_num}
                    alt="Edition"
                    style={{
                      margin: "0 auto",
                      padding: ".5rem",
                    }}
                  />
                </a>
              ))}
            </div>
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
          <div className={styles.galleryBorhomthurimobile}>
            {data.map((item) => (
              <a
                href={item.link}
                rel="noopener"
                target="_blank"
                style={{ margin: "1.2rem" }}
              >
                <img src={item.src} alt="magazine" />
                <img
                  src={item.edition_num}
                  alt="Edition"
                  style={{
                    margin: "0 auto",
                    padding: ".5rem",
                  }}
                />
              </a>
            ))}
          </div>
          {/* <ScrolBar /> */}
          {/* <div className={styles.movingCards}>
            {
              data.map((item)=>(
                <Card imgSrc={item.src} srcMag={item.link} />
              ))
            }
          </div> */}

          {/* <div id={styles.random}>
<img src="https://res.cloudinary.com/dhpqjrbha/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1711056519/Group_2608667_reshtk.jpg?_s=public-apps" alt="" />
          </div> */}
          {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ratione, perspiciatis vitae sit asperiores quia sunt quasi maxime. Nihil, officia qui fuga reprehenderit obcaecati ipsam alias vel hic laudantium pariatur aliquam mollitia reiciendis explicabo? */}
        </div>
      </div>
    </div>
  );
};

export default Borhomthuri;
