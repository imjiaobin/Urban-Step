import styles from "./NewArrivals.module.scss";

export default function NewArrivals({ newProducts }) {
  return (
    <>
      <section className={`col-md-4 ${styles.newArrivals} mb-32 py-sm-40`}>
        <h2 className="display2 h2-md h2-sm mb-12">New Arrival</h2>
        <h2 className="h2  h4-md h4-sm mb-32">新品上市</h2>
        <div className="row">
          {newProducts.map((product) => {
            return (
              <div key={product.id} className={`${styles.card} col-6 mb-40`}>
                <img className="mb-12" src={product.imageUrl} alt="" />
                <h5 className="h5 h6-md h6-sm mb-4">{product.productName}</h5>
                <p className="mb-4">NT$ {product.price}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
