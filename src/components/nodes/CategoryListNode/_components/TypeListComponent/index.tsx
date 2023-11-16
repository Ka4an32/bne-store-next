import { data } from '@data/index';

import s from './style.module.scss'
import TypeLink from './TypeLink';

const TypeListComponent: React.FC<{
  category: typeof data.categories[number]
  typesList: typeof data.types
}> = ({ typesList, category }) => {
  return (
    <ul className={s['types-list']}>
      {typesList.map(({
        name, slug, id
      }) => {
        return (
          <li className={s['types-list__item']} key={`types-${id}`}>
            <TypeLink name={name} scroll={false} shallow as={`/catalog/${category.slug}/${slug}`} href={`/catalog/${category.slug}/${slug}`} />
          </li>
        )
      })}
    </ul>
  )
}



export default TypeListComponent