import useSetTitle from "../../Hooks/SetTitle";
import Borhomthuri from "../../Components/Borhomthuri/Borhomthuri";
import About from "../About/About";
import styles from "./Home.module.scss";
import Invitation from "../Invitation/Invitation";
const Home = () => {
  useSetTitle("Home | Posua");
  return (
    <div className={styles.home}>
      <About />
      <Invitation />
      <Borhomthuri />
    </div>
  );
};

export default Home;
