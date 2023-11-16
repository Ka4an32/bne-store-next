import Image from "next/image";
import Link from "next/link";

import s from "./style.module.scss";
import { ProductType } from "@/src/types/product";
import { data } from "@/src/assets/data";


const ProductCard: React.FC<ProductType> = ({
  title, price, article_number, category_id, type_id, product_id, images
}) => {
  const category = data.categories.find(({ id }) => id === category_id)
  const type = data.types.find(({ id }) => id === type_id)

  return (
    <Link className={s["product-card"]} href={`/product/${product_id}`}>
      <div className={s["product-card__image"]}>
        <Image priority sizes="350px" alt={title} src={images[0]} fill style={{ objectFit: 'contain' }} />
      </div>
      <p className={s["product-card__name"]}>{title}</p>
      <p className={s["product-card__article-number"]}>Артикул: <button onClick={(e) => { e.preventDefault(); }}>{article_number}</button></p>
      <p className={s["product-card__price"]}>{price} &#8381;</p>
    </Link>
  )
};

export default ProductCard;
