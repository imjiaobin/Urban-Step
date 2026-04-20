import styles from "./Collab.module.scss";
export default function Collab() {
  return (
    <>
      <section className={`${styles.collab} my-48`}>
        <div className={`${styles.collabContent}`}>
          <span className={`${styles.collabText}`}>URBANSTEP</span>
          <span className={`${styles.collabSign}`}>X</span>
          <span className={`${styles.collabText}`}>Kevin Chen</span>
          <h2 className={`h2 mb-32`}>跨界聯名，限量發售</h2>
          <p className={`${styles.collabSubtitle} mb-48`}>
            新銳漫畫家 Kevin Chen 親自操刀設計，街頭能量全面引爆！
          </p>
          <button>立即搶購</button>
        </div>
      </section>
    </>
  );
}
