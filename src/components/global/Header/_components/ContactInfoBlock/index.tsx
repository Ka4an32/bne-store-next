import { data } from "@/src/assets/data";
import MainContainer from "@/src/components/containers/MainContainer";
import ContactPhone from "@/src/components/nodes/tel/ContactPhone";

import s from "./style.module.scss";

const ContactInfoBlock = () => {
  return (
    <section className={s["contact-info"]}>
      <MainContainer el="div" className={s["contact-info__content"]}>
        <h3 className={s["contact-info__name"]}>{data.name}</h3>
        <ContactPhone
          containerClassName={s["contact-info__contact"]}
          telClassName={s["contact-info__tel"]}
        />
      </MainContainer>
    </section>
  );
};

export default ContactInfoBlock;
