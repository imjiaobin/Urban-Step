import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <>
      <footer className={`bg-neutral-100 py-64`}>
        <div className="container">
        <div className={`${styles.footerTop}  mb-24`}>
          <div>
            <NavLink to="/">
              <img className="py-12" src={logo} alt="" />
            </NavLink>
          </div>
          <div>
            <NavLink className={`link-underline me-40 py-12`} to="/">
              品牌故事
            </NavLink>
            <NavLink className={`link-underline me-40 py-12`} to="/products">
              商品列表
            </NavLink>
          </div>
        </div>
        <div className={`${styles.footerBottom} pt-32`}>
          <p>Copyright ©2025 URBANSTYLE</p>
          <p>All Rights Reserved.</p>
        </div>
        </div>
      </footer>
    </>
  );
}
