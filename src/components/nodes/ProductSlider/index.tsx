"use client";

import s from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const ProductSlider: React.FC<{
  images: string[]
}> = ({ images }) => {
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        pagination={{
          enabled: true,
          clickable: true,
          horizontalClass: s['pagination'],
          bulletActiveClass: s['pagination-bullet_active'],
          renderBullet: (index, className) => {
            return `<div class="${s['pagination-bullet']} ${className}"><img src="${images[index]}" /></div>`
          },
        }}
        className={s["product-slider"]}
      >
        {images.map((src) => (
          <SwiperSlide key={src}>
            <div className={s["product-slider__slide"]}>
              <Image
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
                alt="prodcut"
                src={src}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div >
  );
};

export default ProductSlider;
