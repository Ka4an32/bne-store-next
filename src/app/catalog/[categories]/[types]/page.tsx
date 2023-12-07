import { data } from "@/src/assets/data";
import ProductList from "@/src/components/nodes/ProductList";
import CategoryTypeFilter from "@/src/utils/filter/CategoryTypeFilter";
import { Metadata } from "next";

export async function generateMetadata(
  { params },
): Promise<Metadata> {
  const typeSlug = params['types']
  const type = data.types.find(({ slug }) => slug === typeSlug)
  return {
    title: `BNE | ${type?.name}`,
    description: ''
  }
}

const CatalogCategoriesPage = ({ params }) => {
  return (
    <ProductList initialProduct={CategoryTypeFilter(data.products, params['categories'], params['types'])} />

  );
};

export default CatalogCategoriesPage;
