import { NavLink } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import styles from "./HomeHero.module.scss";

export default function HomeHero() {
  return (
    <>
      <section className={`${styles.HomeHero} mb-64`}>
        <div className={`${styles.heroTop} mb-48 mb-md-32`}>
          <h1 className="display1 display2-sm mb-16">URBANSTEP</h1>
          <h3 className="h3 h5-md h5-sm">Your Step, Your Statement</h3>
        </div>
        <div className={`${styles.heroBottom}  `}>
          <NavLink className={`${styles.heroBtn} `}>
            立即選購
            <GoArrowRight size={18} />
          </NavLink>
        </div>
      </section>
    </>
  );
}
