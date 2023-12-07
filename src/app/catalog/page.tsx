import { data } from "@/src/assets/data";
import ProductList from "@/src/components/nodes/ProductList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'BNE | Каталог',
  description: '...',
}

const CatalogCategoriesPage = () => {
  return (
    <ProductList initialProduct={data.products} />
  );
};

export default CatalogCategoriesPage;
