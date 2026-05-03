import { useState } from "react";
import { useLocation } from "react-router-dom";
import { TbHeartPlus } from "react-icons/tb";
import { BsHandbag } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import styles from "./ProductDetail.module.scss";
import ProductBreadCrumb from "../ProductBreadCrumb/ProductBreadCrumb";
export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState(null);
  const { state } = useLocation();
  const { productName, price, detailImgs, colors, sizes } =
    state?.product ?? {};
  // const remainQuantity = sizes.reduce((acc, cur) => acc + cur.quantity, 0);
  if (!sizes) return <p>找不到商品資料</p>; // ← 加這行

  const selectedQuantity = sizes.find((s) => s.size === selectedSize)?.quantity;
  const breadcrumbItems = [
    { label: "首頁", to: "/" },
    { label: "女鞋" },
    { label: "滑板鞋" },
    { label: "Platform 404" },
  ];
  const mightLikeList = [
    {
      id: 5,
      category: "滑板鞋",
      productName: "BloomBlok",
      color: "米白",
      price: 3200,
      imageUrl: "/Products/BloomBlok_White.png",
    },
    {
      id: 6,
      category: "滑板鞋",
      productName: "BloomBlok",
      color: "莫蘭迪藍",
      price: 3200,
      imageUrl: "/Products/BloomBlok_Blue.png",
    },
    {
      id: 7,
      category: "慢跑鞋",
      productName: "R:NUER",
      color: "淺褐色",
      price: 4000,
      imageUrl: "/Products/R_NUER_Plain.png",
    },
    {
      id: 8,
      category: "厚底鞋",
      productName: "Sugar Snap",
      color: "黃色",
      price: 4000,
      imageUrl: "/Products/SugarSnap_Yellow.png",
    },
    {
      id: 9,
      category: "慢跑鞋",
      productName: "NeoFoam",
      color: "淺灰色",
      price: 4000,
      imageUrl: "/Products/NeoFoam_Grey.png",
    },
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
            <section className="mb-32 mb-md-24">
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
              <p className="">
                鞋身選用柔軟皮革材質，打造出清新卻不失個性的氛圍，並以鞋面透氣孔設計提升穿著體驗，兼顧質感與舒適度，適合日常長時間著用。無論是街頭穿搭、日常通勤或週末出遊都能輕鬆駕馭。
              </p>
            </section>
            {/* 顏色選項 */}
            <section className="mb-32 mb-md-24">
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
            <section className="mb-48 mb-md-24">
              <h6 className="mb-8">尺寸</h6>
              <div className={`${styles.sizeBtnGroup} mb-8`}>
                {sizes.map((size) => {
                  return (
                    <button
                      key={size.size}
                      onClick={() => setSelectedSize(size.size)}
                      className={`
                        ${styles.sizeBtn} 
                        ${size.quantity === 0 ? styles.sizeBtnEmpty : ""}
                        ${
                          selectedSize === size.size
                            ? size.quantity < 5
                              ? styles.lowStockBtn
                              : styles.sizeBtnActive
                            : ""
                        }
                      `}
                      disabled={size.quantity === 0}
                    >
                      {size.size}
                    </button>
                  );
                })}
              </div>
              {/* <span>還剩下: {selectedSize.quantity} 雙</span> */}
              <span
                className={`${styles.remainQuantity} ${selectedQuantity < 5 ? styles.lowStock : ""} `}
              >
                {selectedSize ? `還剩下: ${selectedQuantity} 雙` : "請選擇尺寸"}
                {/* {!selectedSize
                  ? "請選擇尺寸"
                  : selectedQuantity === 0
                    ? "缺貨"
                    : `還剩下: ${selectedQuantity} 雙`} */}
              </span>
            </section>
            {/* 加入購物車 + 試穿按鈕 */}
            <section className="mb-32 mb-md-24">
              <div className={`${styles.funcBtnGroup}`}>
                <button className={styles.addToWish}>
                  <TbHeartPlus size={20} />
                  加入收藏
                </button>
                <button className={styles.reserveTryOn}>
                  <BsHandbag size={20} />
                  預約門市試穿
                </button>
              </div>
            </section>
            {/* 商品材質 + 購買須知 + 保養方式 */}
            <section>
              <div className={styles.otherInfo}>
                <p className={styles.subtitle}>商品材質</p>
                <p>鞋面：合成皮革（Synthetic Leather）</p>
                <p>內裡：透氣網布材質，提升舒適與排汗性</p>
                <p>鞋底：EVA 輕量發泡橡膠，具備良好緩震與止滑效果</p>
                <p>鞋帶：聚酯纖維，耐拉扯不易鬆脫</p>
              </div>
              <div className={`${styles.otherInfo}`}>
                <p className={styles.subtitle}>購買須知</p>
                <p>商品顏色因螢幕顯示可能略有差異，請以實品為準。</p>
                <p>建議首次穿著前試穿確認尺寸，避免影響退換貨權益。</p>
                <p>
                  本商品為限量發售，庫存有限，如需更換尺寸請儘早聯繫客服協助處理。
                </p>
              </div>
              <div className={`${styles.otherInfo}`}>
                <p className={styles.subtitle}>保養方式</p>
                <p>建議以乾布或微濕軟布擦拭表面汙漬，避免機洗或長時間浸水。</p>
                <p>收納時請放置於乾燥通風處，避免日曬及高溫導致變形或龜裂。</p>
                <p>
                  若需深層清潔，建議使用中性清潔劑並搭配柔刷輕刷，勿使用漂白水或強酸強鹼清潔劑。
                </p>
              </div>
            </section>
          </section>
        </div>
        {/* 下方user 可能還會喜歡的選項 */}
        <section className="py-48 py-md-40">
          <h4 className="h4 h5-md mb-16 mb-md-24">你可能也喜歡...</h4>
          <div className={styles.mightLike}>
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              loop
              breakpoints={{
                577: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
              }}
            >
              {mightLikeList.map((item) => (
                <SwiperSlide key={item.id}>
                  <NavLink className="" to="">
                    <div className={`mb-12 ${styles.imgWrapper}`}>
                      <img src={item.imageUrl} alt={item.productName} />
                    </div>

                    <div className={styles.cardBody}>
                      <h6 className="h6 mb-4">{item.productName}</h6>
                      <span>NT$ {item.price}</span>
                    </div>
                  </NavLink>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </>
  );
}
