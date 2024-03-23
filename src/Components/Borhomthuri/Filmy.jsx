import styles from "./Filmy.module.scss";
// import FilmImg from "./FILM.svg";
const Film = () => {
  return (
    <div>
      <div className={styles.FilmClass}>
        <img
          alt=""
          src="https://res.cloudinary.com/dl0knguhb/image/upload/v1711138935/Vector_yz2omx.png"
          className={styles.cam}
        />
      </div>
    </div>
  );
};
export default Film;
