import { useState } from "react";
import useSetTitle from "../../Hooks/SetTitle";
import Borhomthuri from "../../Components/Borhomthuri/Borhomthuri";
import About from "../About/About";
import styles from "./Home.module.scss";
import Invitation from "../Invitation/Invitation";
import Hero from "../../Components/Hero/Hero";
const Home = () => {
  useSetTitle("Home | Posua");
  const [delay, setDelay] = useState(false);
  setTimeout(() => {
    setDelay(true);
  }, 4000);
  return (
    <div className={`${styles.home}`}>
      <Hero />
      {delay && (
        <div>
          <About />
          <Invitation />
          <Borhomthuri />
        </div>
      )}
    </div>
  );
};

export default Home;
