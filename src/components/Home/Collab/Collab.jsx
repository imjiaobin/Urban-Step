import styles from "./Collab.module.scss";
import star from "../../../assets/collab/star.svg";
import spark from "../../../assets/collab/sparkle.svg";
export default function Collab() {
  return (
    <>
      <section className={`${styles.collab} my-48`}>
        <div className={`${styles.collabContent}`}>
          <span className={`${styles.collabText} d-md-block position-relative`}>
            <img className={styles.star} src={star} alt="" />
            URBANSTEP
          </span>
          <span className={`${styles.collabSign} d-md-block my-sm-8`}>X</span>
          <span className={`${styles.collabText} d-md-bloc`}>Kevin Chen</span>
          <h2 className={`h2 mb-32`}>跨界聯名，限量發售</h2>
          <p className={`${styles.collabSubtitle} position-relative mb-48`}>
            新銳漫畫家 Kevin Chen 親自操刀設計，街頭能量全面引爆！
            <img className={styles.sparkle} src={spark} alt="" />
          </p>
          <button>立即搶購</button>
        </div>
      </section>
    </>
  );
}
