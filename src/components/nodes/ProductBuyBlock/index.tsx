import Link from 'next/link'
import MediaButton from '../../ui/Button/MediaButton'
import TagButton from '../../ui/Button/TagButton'
import s from './style.module.scss'

const ProductBuyBlock: React.FC<{ price: number, articul: string }> = ({
  articul,
  price,
}) => {
  return (
    <>
      <h2 itemProp="offers" itemScope itemType="http://schema.org/Offer" className={s['price']}>
        <meta itemProp="priceCurrency" content="RUB" />
        <span itemProp="price">{price} &#8381;</span>
      </h2>
      <div className={s['product-ident']}>
        <span className={s['product-ident__articul']}>Артикул: {articul} </span>
        <span className={s['product-ident__brand']}>Бренд: <TagButton aria-label='BNE CORPORATION' itemProp="brand">BNE CORPORATION</TagButton></span>
      </div>
      <div className={s['add-basket']}>
        <h3 className={s['add-basket__title']}>Купить:</h3>
        <ul className={s['social-list']}>
          <li>
            <Link href={'https://vk.com/im?media=&sel=-218373677'} target='_blank' rel='noreferrer'>
              <MediaButton socialMedia='vk' />
            </Link>
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