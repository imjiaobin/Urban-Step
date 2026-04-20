import styles from "./Banner.module.scss";
import { NavLink } from "react-router-dom";
export default function Banner() {
  return (
    <>
      <section className={`${styles.banner} bg-primary-100 py-24`}>
        <h4 className="h4 me-24">加入會員取得 9 折優惠</h4>

        <NavLink className="" to="/signup">
          馬上註冊
        </NavLink>
      </section>
    </>
  );
}
