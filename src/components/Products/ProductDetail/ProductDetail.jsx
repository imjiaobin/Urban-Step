import { useLocation } from "react-router-dom";
import styles from "./ProductDetail.module.scss";
import ProductBreadCrumb from "../ProductBreadCrumb/ProductBreadCrumb";
export default function ProductDetail() {
  const { state } = useLocation();
  const { productName, price, detailImgs, colors } = state?.product;
  // {
  //   id: 1,
  //   category: "滑板鞋",
  //   productName: "PLATFORM 404",
  //   color: "深邃藍",
  //   price: 2600,
  //   imageUrl: "/Products/platform404_darkblue.png",
  //   detailImgs: [
  //     "/Product/PLATFORM404/Platform404_1.png",
  //     "/Product/PLATFORM404/Platform404_2.png",
  //     "/Product/PLATFORM404/Platform404_3.png",
  //     "/Product/PLATFORM404/Platform404_4.png",
  //     "/Product/PLATFORM404/Platform404_5.png",
  //     "/Product/PLATFORM404/Platform404_6.png",
  //     "/Product/PLATFORM404/Platform404_7.png",
  //     "/Product/PLATFORM404/Platform404_8.png",
  //   ],
  //   colors: [{color:"藍色", images:["/Product/PLATFORM404/Platform404_1.png"]}, {color:"褐色", images:["/Product/PLATFORM404/Platform404_brown_1.png"]}],
  // }
  const breadcrumbItems = [
    { label: "首頁", to: "/" },
    { label: "女鞋" },
    { label: "滑板鞋" },
    { label: "Platform 404" },
  ];
  return (
    <>
      <div className="container py-64 pt-md-0 pb-md-24">
        <div className={`${styles.productDetail} row `}>
          {/* 左側圖片區塊 */}
          <section className={`${styles.productImage} col-7 col-md-4 mb-md-24`}>
            {detailImgs.map((img) => {
              return <img className="" key={img} src={img} alt="" />;
            })}
          </section>
          {/* 右側商品資訊 + 其他資訊 */}
          <section className={`${styles.productInfo} col-5  col-md-4`}>
            <ProductBreadCrumb items={breadcrumbItems} />
            {/* 商品說明 */}
            <section>
              <h2 className="h2 h4-md">{productName}</h2>
              <h5 className="text-primary-400 h6-md mb-16 mb-md-12">
                NT ${price}
                <span className={`${styles.beforeDiscount} ms-8`}>
                  NT $3,200
                </span>
              </h5>
              <p className="mb-12">
                Platform 404
                以柔和奶白為底，搭配深藍色皮革點綴，走在街上自帶回頭率。鞋型採用復古運動風輪廓，結合輕量厚底與柔軟泡棉鞋舌，兼顧美感與舒適。
              </p>
              <p className="mb-32">
                鞋身選用柔軟皮革材質，打造出清新卻不失個性的氛圍，並以鞋面透氣孔設計提升穿著體驗，兼顧質感與舒適度，適合日常長時間著用。無論是街頭穿搭、日常通勤或週末出遊都能輕鬆駕馭。
              </p>
            </section>
            {/* 顏色選項 */}
            <section>
              <h6 className="mb-8">顏色</h6>
              <div className={styles.colorInfo}>
                {colors.map((color) => {
                  return (
                    <div key={color.color} className={styles.colorCard}>
                      <img src={color.images[0]} alt="" />
                      <p>{color.color}</p>
                    </div>
                  );
                })}
              </div>
            </section>
            {/* 尺寸選項 */}
            <section></section>
            {/* 加入購物車 + 試穿按鈕 */}
            <section></section>
            {/* 商品材質 */}
            <section></section>
            {/* 購買須知 */}
            <section></section>
            {/* 保養方式 */}
            <section></section>
          </section>
          {/* 下方user 可能還會喜歡的選項 */}
          <section></section>
        </div>
      </div>
    </>
  );
}
