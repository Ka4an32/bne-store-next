import { data } from "@/src/assets/data";
import ProductList from "@/src/components/nodes/ProductList";

const CatalogCategoriesPage = () => {
  return (
    <ProductList initialProduct={data.products} />
  );
};

export default CatalogCategoriesPage;
