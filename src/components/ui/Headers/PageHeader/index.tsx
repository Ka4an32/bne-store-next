import s from "./style.module.scss";

const PageHeader: React.FC<{ text: string } | any> = ({ text, ...props }) => {
  return <h1 className={s["page-title"]} {...props}>{text}</h1>;
};

export default PageHeader;
