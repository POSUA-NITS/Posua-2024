import styles from "./Pepa.module.scss";
import PepaImg from "../../assets/Pepa.svg";
const Pepa = () => {
  return (
    <div>
      <div className={styles.PepaClass}>
        <img alt="" src={PepaImg}></img>
      </div>
    </div>
  );
};
export default Pepa;
