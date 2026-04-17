import { GoArrowUpRight } from "react-icons/go";
import styles from "./BrandStories.module.scss";
export default function BrandStories() {
  return (
    <>
      <section className={`${styles.brandStories} mb-48`}>
        <h4 className="h4 mb-24">品牌故事</h4>
        <div className={`${styles.storyLink}`}>
          <GoArrowUpRight size={18} />
          <a className="py-8" href="">
            創辦人筆記：我們為什麼想做鞋？
          </a>
        </div>
        <div className={`${styles.storyLink}`}>
          <GoArrowUpRight size={18} />
          <a className="py-8" href="">
            穿上 URBNSTEP 的他們
          </a>
        </div>
        <div className={`${styles.storyLink}  mb-48`}>
          <GoArrowUpRight size={18} />
          <a className="py-8" href="">
            URBNSTEP 鞋履的誕生過程
          </a>
        </div>
      </section>
    </>
  );
}
