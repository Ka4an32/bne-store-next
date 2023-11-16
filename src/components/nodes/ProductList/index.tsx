'use client'

import { data } from "@/src/assets/data"
import ProductCard from "../../ui/ProductCard"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

const ProductList: React.FC<{ initialProduct: typeof data.products }> = ({ initialProduct }) => {
  const params = useParams()
  const [products, setProducts] = useState(initialProduct)

  useEffect(() => {
    if (params.types) {
      setProducts(data.products.filter(({ type_id }) => {
        const type = data.types.find(({ id }) => id === type_id)
        return type?.slug === params.types
      }))
    }
  }, [params.types])

  return (
    <>
      {products.map(({ ...props }) => {
        return (
          <ProductCard key={props.product_id} {...props} />
        )
      })}
    </>
  )
}

export default ProductList