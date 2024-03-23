import AboutPepa from "./AboutPepa";
import styles from "./About.module.scss";
const About = () => {
  return (
    <div>
      <div className={styles.AboutClass}>
        <AboutPepa />
        <div className={styles.AboutText}>
          Posua, the wind that brings rain to the dry and parched earth, an aroma of
          sweetness which brings the promise of spring. The advent of Posua ushers a sense
          of brotherhood in us, the richness of our region united under the same shed. We,
          the students of NITS, through Posua, aim to demonstrate our rich cultural
          heritage, showcase different segments and bless the stage with the fragrance of
          our uniqueness, to show everyone the pride that we feel as offsprings of our
          motherland. It’s an exhibition of our love towards our land and its people, a
          homage to our roots, humble yet unique in every aspect,a source of pride and
          ecstasy. Posua isn’t just a festival, it has evolved into something bigger, a
          statement to all the people, a platform for self-actualisation, embracement of
          our identity. This time ,like every other time we aim to raise the bar and salve
          the ambiance with mirth and solace
        </div>
      </div>
    </div>
  );
};
export default About;
