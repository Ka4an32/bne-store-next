import MediaButton from '../../ui/Button/MediaButton'
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
        <span className={s['product-ident__brand']}>Бренд: <TagButton>BNE CORPORATION</TagButton></span>
      </div>
      <div className={s['add-basket']}>
        <h3 className={s['add-basket__title']}>Купить:</h3>
        <ul className={s['social-list']}>
          <li>
            <MediaButton socialMedia='vk' />
          </li>
          <li>
            <MediaButton socialMedia='whatsapp' />
          </li>
          <li>
            <MediaButton socialMedia='tg' />
          </li>
        </ul>

      </div>
    </>
  )
}

export default ProductBuyBlock