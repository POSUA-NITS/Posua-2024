// import Borhomthuri from "../../Components/Borhomthuri/Borhomthuri";
import About from "../About/About";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <div className={styles.home}>
      {/* <Borhomthuri /> */}
      <About />
    </div>
  );
};

export default Home;
