import s from "./style.module.scss";

const PageHeader: React.FC<{ text: string }> = ({ text }) => {
  return <h1 className={s["page-title"]}>{text}</h1>;
};

export default PageHeader;
