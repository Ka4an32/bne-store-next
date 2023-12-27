import Image from "next/image";
import Link from "next/link";

import s from "./style.module.scss";
import { ProductType } from "@/src/types/product";
import { data } from "@/src/assets/data";


const ProductCard: React.FC<ProductType> = ({
  title, price, article_number, category_id, type_id, product_id, images
}) => {
  // const category = data.categories.find(({ id }) => id === category_id)
  // const type = data.types.find(({ id }) => id === type_id)

  return (
    <Link className={s["product-card"]} href={`/product/${product_id}`}>
      <article itemScope itemType="http://schema.org/Product">
        <div className={s["product-card__image"]}>
          <Image itemProp="image" priority sizes="350px" alt={title} src={images[0]} fill style={{ objectFit: 'contain' }} />
        </div>
        <h2 itemProp="name" className={s["product-card__name"]}>{title}</h2>
        <p className={s["product-card__article-number"]}>Артикул: <button aria-label={article_number} itemProp="mpn" onClick={(e) => { e.preventDefault(); }}>{article_number}</button></p>
        <p itemProp="offers" itemScope itemType="http://schema.org/Offer" className={s["product-card__price"]}>
          <meta itemProp="priceCurrency" content="RUB" />
          <span itemProp="price">{price} &#8381;</span></p>
      </article>
    </Link>
  )
};

export default ProductCard;
