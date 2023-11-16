import { data } from "@data/index";

import CopyRightBlock from "./_components/CopyRightBlock";
import MenuBlock from "./_components/MenuBlock";

import MainContainer from "@components/containers/MainContainer";

import s from "./style.module.scss";

const Footer = () => (
  <footer className={s.footer}>
    <MainContainer className={s.footer__head} el="section">
      <h3 className={s.footer__name}>{data.name}</h3>
    </MainContainer>
    <MenuBlock />
    <CopyRightBlock />
  </footer>
);

export default Footer;
