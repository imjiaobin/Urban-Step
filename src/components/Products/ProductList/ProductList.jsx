import { NavLink } from "react-router-dom";
import styles from "./ProductList.module.scss";
import { formatMoney } from '../../../utils/formatMoney';
export default function ProductList({ products }) {
  return (
    <>
      <section className={`row ${styles.productList} mb-48`}>
        {products.map((product) => {
          return (
            <NavLink  key={product.id} className={`${styles.productCard} col-4 col-md-2 mb-48`} to="">
                <img className="mb-12" src={product.imageUrl} alt="" />
                <h6 className="h6 mb-4">{product.productName}</h6>
                <span className={`${styles.productPrice}`}>
                  NT { formatMoney(product.price)}
                </span>
            </NavLink>
          );
        })}
      </section>
    </>
  );
}
