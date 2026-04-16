import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { LuUser } from "react-icons/lu";
import logo from "../assets/logo.svg";
export default function Header() {
  return (
    <>
      <header className="header-container">
        <nav className={`${styles.navbar}`}>
          <div>
            <NavLink to='/'>
              <img className="py-12" src={logo} alt="" />
            </NavLink>
            <NavLink className={`${styles.navLink} me-40 py-12`} to="/">
              品牌故事
            </NavLink>
            <NavLink className={`${styles.navLink} me-40 py-12`} to="/products">
              商品列表
            </NavLink>
          </div>
          <div>
            <NavLink className={`${styles.userIcon} me-40 p-12`} to="">
              <LuUser size={24} />
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
}
