import Borhomthuri from "../../Components/Borhomthuri/Borhomthuri";
import About from "../About/About";
import styles from "./Home.module.scss";
import Invitation from "../Invitation/Invitation";
const Home = () => {
  return (
    <div className={styles.home}>
      <Borhomthuri />
      <About />
      <Invitation />
    </div>
  );
};

export default Home;
