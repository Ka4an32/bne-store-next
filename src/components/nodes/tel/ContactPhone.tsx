import { data } from "@/src/assets/data";

const ContactPhone: React.FC<{
  containerClassName?: string;
  telClassName?: string;
  withoutText?: boolean;
}> = ({ containerClassName, telClassName, withoutText = false }) => {
  const telLabel = `${data.contact.tel.slice(0, 1)} ${data.contact.tel.slice(
    1,
    4
  )} ${data.contact.tel.slice(4, 7)}-${data.contact.tel.slice(
    7,
    9
  )}-${data.contact.tel.slice(9, 11)}`;
  return (
    <div className={containerClassName}>
      {!withoutText && "Интернет магазин:"}{" "}
      <a className={telClassName} href={`tel:+7${data.contact.tel.slice(1)}`}>
        {telLabel}
      </a>
    </div>
  );
};

export default ContactPhone;
