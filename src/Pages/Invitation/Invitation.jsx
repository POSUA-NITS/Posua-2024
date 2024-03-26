import styles from "./Invitation.module.scss";
// import InvitationPepa from "./InvitationPepa";
import ScrollerJapi from "./ScrollerJapi";
const Invitation = () => {
  return (
    <div className={styles.superParent}>
      <div className={styles.InvitationClass}>
        <div id={styles.pepaimgholder}>
          <img
            src="https://res.cloudinary.com/dl0knguhb/image/upload/v1711283241/Frame_5_1_tapnex.png"
            alt=""
          />
        </div>
        <div className={styles.InvitationImage}>
          <img
            alt=""
            src="https://res.cloudinary.com/dl0knguhb/image/upload/v1711283239/Invitation_2024_1_1_vg3kjj.png"
            className={styles.img}
          />
        </div>
        <ScrollerJapi />
      </div>
    </div>
  );
};
export default Invitation;
