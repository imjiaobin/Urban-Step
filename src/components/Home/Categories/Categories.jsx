import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Categories.module.scss";

export default function Categories({ categoryList }) {
  return (
    <section className={`${styles.categories} py-64 container`}>
      <h2 className="h2 mb-16">依系列選購</h2>
      <div className={styles.swiperWrapper}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000 }}
          slidesPerView={4}
          spaceBetween={24}
          loop
        >
          {categoryList.map((category) => (
            <SwiperSlide key={category.id}>
              <NavLink to="">
                <div className={styles.categoryText}>
                  <span className={styles.engText}>{category.engName}</span>
                  <span>{category.name}</span>
                </div>
                <img src={category.imageUrl} alt={category.name} />
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
