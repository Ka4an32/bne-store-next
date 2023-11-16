import clsx from "clsx";

import s from "./style.module.scss";

const SearchField: React.FC<{
  className?: string;
}> = ({ className }) => (
  <div className={clsx(s["search-input-container"], className)}>
    <input
      placeholder="Наименование, артикул или бренд"
      className={clsx(s["search-field"])}
      type="search"
      inputMode="search"
    />
  </div>
);

export default SearchField;
