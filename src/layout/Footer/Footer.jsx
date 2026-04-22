import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./Footer.module.scss";
export default function Footer() {
  return (
    <>
      <footer className={`bg-neutral-100`}>
        <div className="d-sm-block container py-64">
          <div className={`d-sm-block  ${styles.footerTop}  mb-24`}>
            <div className={`${styles.footerLogo}`}>
              <NavLink to="/">
                <img className="d-sm-block py-12" src={logo} alt="" />
              </NavLink>
            </div>
            <div className={`${styles.footerLink}`}>
              <NavLink
                className={`d-sm-block link-underline me-40 me-sm-0 ms-sm-16 py-12 `}
                to="/"
              >
                首頁
              </NavLink>
              <NavLink
                className={`d-sm-block link-underline me-40 me-40 me-sm-0 ms-sm-16 py-12`}
                to="/brandstory"
              >
                品牌故事
              </NavLink>
              <NavLink
                className={`d-sm-block link-underline me-40 me-40 me-sm-0 ms-sm-16 py-12`}
                to="/products"
              >
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
