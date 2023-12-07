import "swiper/css";

import PageHeader from "@/src/components/ui/Headers/PageHeader";

import { Metadata } from "next";
import s from "./style.module.scss";
import ProductSlider from "@/src/components/nodes/ProductSlider";
import { data } from "@data/index";
import ProductBuyBlock from "@/src/components/nodes/ProductBuyBlock";
import TagButton from "@/src/components/ui/Button/TagButton";

const { products } = data

export async function generateMetadata(
  { params },
): Promise<Metadata> {
  const productId = params['product_id']
  const product = products.find(({ product_id }) => product_id == productId)
  return {
    title: `BNE | ${product?.title}`,
    description: product?.description
  }
}

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
          {product.description &&
            <div className={s['description-block']}>
              <h3 className={s['description-block__header']} >Описание:</h3>
              <p dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
          }
          {product.forModel && (
            <div className={s['for-model-block']}>
              <h3 className={s['for-model-block__header']}>Модели: </h3>
              <ul className={s['for-model-block__list']}>
                {product.forModel.map((item) => {
                  return (
                    <li key={item}>
                      <TagButton>
                        {item}
                      </TagButton>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>

  );
};

export default CatalogPage;
