import RootButton from '../../ui/Button/RootButton'
import TagButton from '../../ui/Button/TagButton'
import s from './style.module.scss'

const ProductBuyBlock: React.FC<{ price: number, articul: string }> = ({
  articul,
  price,
}) => {
  return (
    <>
      <h2 className={s['price']}>
        {price} &#8381;
      </h2>
      <div className={s['product-ident']}>
        <span className={s['product-ident__articul']}>Артикул: {articul} </span>
        <span className={s['product-ident__brand']}>Бренд: <TagButton>Apico</TagButton></span>
      </div>
      <div className={s['add-basket']}>
        <RootButton className={s['buy-btn']}>
          В корзину
        </RootButton>
        <RootButton theme='dark' className={s['buy-btn']}>
          Купить в 1 клик
        </RootButton>
      </div>
    </>
  )
}

export default ProductBuyBlock