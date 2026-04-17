import { NavLink } from "react-router-dom";
import styles from "./ProductList.module.scss";
export default function ProductList({ products }) {
  return (
    <>
      <section className={`row ${styles.productList}`}>
        {products.map((product) => {
          return (
            <NavLink  key={product.id} className={`${styles.productCard} col-4 mb-48`} to="">
                <img className="mb-12" src={product.imageUrl} alt="" />
                <h6 className="h6 mb-4">{product.productName}</h6>
                <span className={`${styles.productPrice}`}>
                  NT ${product.price}
                </span>
            </NavLink>
          );
        })}
      </section>
    </>
  );
}
