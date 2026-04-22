import styles from "./BrandIntro.module.scss";
export default function BrandIntro() {
  return (
    <>
        <section
          className={`col-8 col-md-4 ${styles.intro} bg-primary-100 mb-48 mb-md-32 p-32 p-sm-24`}
        >
          <h5 className="h5 h5-md h5-sm mb-12">
            走出城市的節奏，穿上自己的步調。
          </h5>
          <p>我們相信，每一雙鞋都該帶著個性出場。</p>
          <p>
            在 URBANSTEP，我們認為鞋履不只是穿戴飾品，更是你與世界連結的語言。
          </p>
          <p>
            融合城市結構與機能語彙，我們打造適合都會節奏的風格鞋款，陪你自信穿梭每一場風景。
          </p>
        </section>
    </>
  );
}
