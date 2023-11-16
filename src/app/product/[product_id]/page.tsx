import "swiper/css";

import PageHeader from "@/src/components/ui/Headers/PageHeader";

import s from "./style.module.scss";
import ProductSlider from "@/src/components/nodes/ProductSlider";
import { data } from "@data/index";
import ProductBuyBlock from "@/src/components/nodes/ProductBuyBlock";

import Breadcrumbs from "@marketsystems/nextjs13-appdir-breadcrumbs";

const { products } = data

const CatalogPage = ({ params }) => {
  const product = products.find(({ product_id }) => product_id == params['product_id'])

  if (!product) {
    return 'notfound'
  }

  return (
    <>
      {/* <Breadcrumbs /> */}
      <PageHeader text={product.title} />
      <section className={s["product-section"]}>
        <div className={s['product-section__slider-column']}>
          <ProductSlider images={product.images} />
        </div>
        <div className={s['product-section__buy-block']}>
          <ProductBuyBlock articul={product.article_number} price={product.price} />
        </div>
        <div className={s['product-section__info-block']}>
        </div>
      </section>
    </>

  );
};

export default CatalogPage;
