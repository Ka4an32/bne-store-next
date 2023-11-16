import { data } from "@/src/assets/data";
import ProductList from "@/src/components/nodes/ProductList";
import CategoryTypeFilter from "@/src/utils/filter/CategoryTypeFilter";

const CatalogCategoriesPage = ({ params }) => {
  return (
    <ProductList initialProduct={CategoryTypeFilter(data.products, params['categories'])} />
  );
};

export default CatalogCategoriesPage;
