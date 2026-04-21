import styles from "./Inspiration.module.scss";
import MouseDrift from "../../common/MouseDrift";
import img1 from "../../../assets/Inspiration/inspiration-1.png";
import img2 from "../../../assets/Inspiration/inspiration-2.png";
import img3 from "../../../assets/Inspiration/inspiration-3.png";
import img4 from "../../../assets/Inspiration/inspiration-4.png";
import img5 from "../../../assets/Inspiration/inspiration-5.png";
import img6 from "../../../assets/Inspiration/inspiration-6.png";
import img7 from "../../../assets/Inspiration/inspiration-7.png";
import img8 from "../../../assets/Inspiration/inspiration-8.png";
import img9 from "../../../assets/Inspiration/inspiration-9.png";
import img10 from "../../../assets/Inspiration/inspiration-10.png";
import img11 from "../../../assets/Inspiration/inspiration-11.png";
import img12 from "../../../assets/Inspiration/inspiration-12.png";

export default function Inspiration() {
  return (
    <section className="py-64 mb-48">
      <h2 className="h2 mb-16">穿搭靈感</h2>
      <div className={styles.inspiration}>
        <MouseDrift className={styles.imgWrapper}><img src={img1} alt="inspiration-1" className={styles.img} /></MouseDrift>
        <MouseDrift className={styles.imgWrapper}><img src={img2} alt="inspiration-2" className={styles.img} /></MouseDrift>
        <MouseDrift className={styles.imgWrapper}><img src={img4} alt="inspiration-4" className={styles.img} /></MouseDrift>
        <MouseDrift className={styles.imgWrapper}><img src={img5} alt="inspiration-5" className={styles.img} /></MouseDrift>
        <MouseDrift className={`${styles.imgWrapper} ${styles.tall} ${styles.wide}`}>
          <img src={img3} alt="inspiration-3" className={styles.img} />
        </MouseDrift>

        <MouseDrift className={`${styles.imgWrapper} ${styles.tall} ${styles.wide}`}>
          <img src={img10} alt="inspiration-10" className={styles.img} />
        </MouseDrift>
        <MouseDrift className={styles.imgWrapper}><img src={img6} alt="inspiration-6" className={styles.img} /></MouseDrift>

        <MouseDrift className={styles.imgWrapper}><img src={img7} alt="inspiration-7" className={styles.img} /></MouseDrift>
        <MouseDrift className={styles.imgWrapper}><img src={img8} alt="inspiration-8" className={styles.img} /></MouseDrift>
        <MouseDrift className={styles.imgWrapper}><img src={img9} alt="inspiration-9" className={styles.img} /></MouseDrift>
        <MouseDrift className={styles.imgWrapper}><img src={img11} alt="inspiration-11" className={styles.img} /></MouseDrift>
        <MouseDrift className={styles.imgWrapper}><img src={img12} alt="inspiration-12" className={styles.img} /></MouseDrift>
      </div>
    </section>
  );
}
