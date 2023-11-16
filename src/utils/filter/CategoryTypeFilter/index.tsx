import { data } from '@data/index'

const CategoryTypeFilter = (products: typeof data['products'], categorySlug?: string, typeSlug?: string) => {
  if (!categorySlug) {
    return products
  }

  return products.filter(({ category_id }) => {
    const category = data.categories.find(({ id }) => id == category_id)
    return category?.slug === categorySlug
  }).filter(({ type_id }) => {
    if (!typeSlug) {
      return true
    }
    const type = data.types.find(({ id }) => id === type_id)
    return type?.slug === typeSlug
  })
}

export default CategoryTypeFilter