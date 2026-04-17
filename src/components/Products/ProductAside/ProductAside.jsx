import { NavLink } from "react-router-dom";
import styles from "./ProductAside.module.scss";

export default function ProductAside({categories}) {
  return (
    <>
      <ul className={styles.asideList}>
        {categories.map(category => {
          return (
            <li className="py-12 mb-16" key={category.id}>
              <NavLink id={category.id} className="link-underline" to={`/${category.category}`}>{category.category}</NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}
