import styles from "./NewArrivals.module.scss";

export default function NewArrivals({ newProducts }) {
  return (
    <>
      <section className={`${styles.newArrivals} mb-32`}>
        <h2 className="display2 mb-12">New Arrival</h2>
        <h2 className="h2 mb-32">新品上市</h2>
        <div className="row">
          {newProducts.map((product) => {
            return (
              <div key={product.id} className={`${styles.card} col-6 mb-40`}>
                <img className="mb-12" src={product.imageUrl} alt="" />
                <h5 className="h5 mb-4">{product.productName}</h5>
                <p className="mb-4">NT$ {product.price}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
