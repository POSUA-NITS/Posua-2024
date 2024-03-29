import useSetTitle from "../../Hooks/SetTitle";
import Borhomthuri from "../../Components/Borhomthuri/Borhomthuri";
import About from "../About/About";
import styles from "./Home.module.scss";
import Invitation from "../Invitation/Invitation";
import Hero from "../../Components/Hero/Hero";
const Home = () => {
  useSetTitle("Home | Posua");
  return (
    <div className={`${styles.home}`}>
      <Hero />
      <About />
      <Invitation />
      <Borhomthuri />
    </div>
  );
};

export default Home;
