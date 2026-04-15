import { GoArrowUpRight } from "react-icons/go";
import styles from "./BrandStories.module.scss";
export default function BrandStories() {
  return (
    <>
      <section className={`${styles.brandStories} mb-48`}>
        <h4 className="h4 mb-24">品牌故事</h4>
        <a className="py-8" href=""><GoArrowUpRight size={15} />創辦人筆記：我們為什麼想做鞋？</a>
        <a className="py-8" href=""><GoArrowUpRight size={15} />穿上 URBNSTEP 的他們</a>
        <a className="py-8 mb-48" href=""><GoArrowUpRight size={15} />URBNSTEP 鞋履的誕生過程</a>
      </section>
    </>
  );
}