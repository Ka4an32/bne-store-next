import { Metadata } from "next";
import { data } from "@/src/assets/data";
import ProductList from "@/src/components/nodes/ProductList";
import CategoryTypeFilter from "@/src/utils/filter/CategoryTypeFilter";


export async function generateMetadata(
  { params },
): Promise<Metadata> {
  const categorySlug = params['categories']
  const category = data.categories.find(({ slug }) => slug === categorySlug)
  return {
    title: `BNE | ${category?.name}`,
    description: ''
  }
}

const CatalogCategoriesPage = ({ params }) => {
  return (
    <ProductList initialProduct={CategoryTypeFilter(data.products, params['categories'])} />
  );
};

export default CatalogCategoriesPage;
