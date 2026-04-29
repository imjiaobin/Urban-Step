import ProductBreadCrumb from "../components/Products/ProductBreadCrumb/ProductBreadCrumb";
import ProductAside from "../components/Products/ProductAside/ProductAside";
import ProductList from "../components/Products/ProductList/ProductList";
import Pagination from "../components/common/Pagination/Pagination";
import styles from "./Products.module.scss";

// 取得商品資料

// 整理商品資料
const products = [
  {
    id: 1,
    category: "滑板鞋",
    productName: "PLATFORM 404",
    color: "深邃藍",
    price: 2600,
    imageUrl: "/Products/platform404_darkblue.png",
  },
  {
    id: 2,
    category: "滑板鞋",
    productName: "PLATFORM 404",
    color: "大地黃",
    price: 2600,
    imageUrl: "/Products/platform404_GroundYellow.png",
  },
  {
    id: 3,
    category: "滑板鞋",
    productName: "VM001",
    color: "灰色",
    price: 2600,
    imageUrl: "/Products/VM001_LightGrey.png",
  },
  {
    id: 4,
    category: "限定 / 聯名企劃",
    productName: "Melty Kiss",
    color: "粉嫩紫",
    price: 4000,
    imageUrl: "/Products/MeltyKiss_LightPurple.png",
  },
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

// 取得商品分類
const categories = [
  { id: 1, category: "所有商品" },
  { id: 2, category: "慢跑鞋" },
  { id: 3, category: "滑板鞋" },
  { id: 4, category: "厚底鞋" },
  { id: 5, category: "限定 / 聯名企劃" },
];

const breadcrumbItems = [{ label: "首頁", to: "/" }, { label: "所有商品" }];

export default function Products() {
  return (
    <>
      <div className="container mb-32">
        <ProductBreadCrumb items={breadcrumbItems} />
        <div className={`${styles.productsHeader} py-7 px-md-0 mb-24`}>
          <h3 className="h3 h4-md ">所有商品</h3>
          <select className={styles.categorySelect}>
            {categories.map((cat) => (
              <option className="" key={cat.id} value={cat.category}>
                {cat.category}
              </option>
            ))}
          </select>
        </div>
        <div className="row px-md-12">
          <aside className="col-2 d-md-none">
            <ProductAside categories={categories} />
          </aside>
          <div className="col-10 col-md-4">
            <ProductList products={products} />
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}
