import { data } from "@data/index";

import CategoryAccordion from "@components/ui/AccardeonButtonList/_instance/CategoryAccordeon";
import TypeListComponent from "./_components/TypeListComponent";

const InstrumentsTypes = () => {
  const category = data.categories[0]
  const types: typeof data.types = [];

  category.types.forEach((type_id) => {
    const type = data.types.find(({ id }) => id === type_id);
    if (type) types.push(type)
  })

  return (
    <TypeListComponent category={data.categories[0]} typesList={types} />
  )
}

const CategoryListNode: React.FC<{ category?: string }> = ({ category }) => {

  const categoriesItems = [
    {
      name: data.categories[0].name,
      slug: data.categories[0].slug,
      content: <InstrumentsTypes />,
    },
    {
      name: data.categories[1].name,
      slug: data.categories[1].slug,
      content: `
        Подставки для мототехники
      `,
    },
  ];


  const activeCategory = category && categoriesItems.findIndex(({ slug }) => slug === category)

  return (
    <CategoryAccordion
      initialActiveItem={activeCategory}
      item={categoriesItems.map(({ name, content, ...props }) => ({ item: [name, content], ...props }))}
    />
  )
};

export default CategoryListNode;
