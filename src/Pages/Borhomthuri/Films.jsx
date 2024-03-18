import styles from "./films.module.scss";
import FilmImg from "./FILM.svg";
const Film = () => {
  return (
    <div>
      <div className={styles.FilmClass}>
        <img alt="" src={FilmImg} />
      </div>
    </div>
  );
};
export default Film;
