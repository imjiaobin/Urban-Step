import styles from "./Header.module.scss";
import { LuUser } from "react-icons/lu";
import logo from "../assets/logo.svg";
export default function Header() {
  return (
    <>
      <header className="header-container">
        <nav className={`${styles.navbar}`}>
          
          <div>
            <img src={logo} alt="" />
            <a className={`${styles.navLink} me-40`} href="">商品列表</a>
            <a className={`${styles.navLink} me-40`} href="">品牌故事</a>
          </div>
          <div>
            <a className="p-12" href=""><LuUser size={24}/></a>
          </div>
        </nav>
      </header>
    </>
  );
}
