import styles from "./BrandValues.module.scss";
export default function BrandValues() {
  return (
    <>
      <section className={`col-8 col-md-4  ${styles.brandValues} mb-48 mb-md-32`}>
        <h4 className="h4 mb-24">品牌理念</h4>
        <ul className="mb-md-32">
          <li className="mb-12 px-12">
            機能先行：輕量、透氣、防潑水
          </li>
          <li className="mb-12 px-12">
            <span>2021</span>首款【Urban Flow
            系列】誕生，結合針織鞋面與城市靈感。
          </li>
          <li className=" px-12 ">
            <span>2025</span>永續材料：選用環保合成皮革與可回收包裝
          </li>
        </ul>
      </section>
    </>
  );
}