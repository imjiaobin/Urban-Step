import styles from "./Header.module.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LuUser } from "react-icons/lu";
import logo from "../../assets/logo.svg";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);
  const toggleDrawer = () => setIsOpen((prev) => !prev); // ← 新增
  const navLinks = [
    { to: "/", label: "首頁" },
    { to: "/brandstory", label: "品牌故事" },
    { to: "/products", label: "商品列表" },
  ];
  return (
    <>
      <header className="container">
        <nav className={`${styles.navbar}`}>
          <div>
            <NavLink to="/">
              <img className="py-12" src={logo} alt="" />
            </NavLink>
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                className="d-sm-none link-underline me-40 py-12"
                to={to}
              >
                {label}
              </NavLink>
            ))}
          </div>
          <div className={styles.rightGroup}>
            <NavLink className={`d-sm-none ${styles.userIcon} p-12`} to="">
              <LuUser size={24} />
            </NavLink>
            <button
              className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ""} mb-12`}
              onClick={toggleDrawer} 
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      {/* 手機板 nav 背景遮罩：點擊可關閉 */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer 主體 */}
      <div className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}>
        
        <nav className={styles.drawerNav}>
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              className="link-underline"
              to={to}
              onClick={closeDrawer}
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            className="link-underline"
            to="/usercenter"
            onClick={() => setIsOpen(false)}
          >
            使用者中心
          </NavLink>
        </nav>
      </div>
      
    </>
  );
}
