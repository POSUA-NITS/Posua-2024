import Pepa from "./Pepa";
import styles from "./Borhomthuri.module.scss";
import Film from "./Films";
const Borhomthuri = () => {
  return (
    <div>
      <div className={styles.ParentClass}>
        <Pepa />
        <Film />
        <div className={styles.text}>
          Borhomthuri is the annual souvenir of POSUA.It enfolds indispensable parts of
          Assamese Culture and also the emotions of students in the form of enthralling
          articles,poems,stories and sketches.Borhomthuri reflects the ardour of NITS
          Family towards POSUA and provides an opportunity for the literary skills of
          students to get revived
        </div>
      </div>
    </div>
  );
};

export default Borhomthuri;
