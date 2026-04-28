import { NavLink } from "react-router-dom";
import styles from "./Restock.module.scss";

export default function Restock({ restockItems }) {
  return (
    <>
      <section className={`${styles.restock} py-64 py-sm-40`}>
        <h2 className="h2 h4-md mb-16">熱銷補貨</h2>
        <div className="row">
          {restockItems.map((item) => (
            <NavLink key={item.id} className={`${styles.restockItem} col-3 col-md-2 mb-sm-12`}>
              <span className={styles.badge}>人氣 NO.1</span>
              <img src={item.imageUrl} alt="" />
            </NavLink>
          ))}
        </div>
      </section>
    </>
  );
}
