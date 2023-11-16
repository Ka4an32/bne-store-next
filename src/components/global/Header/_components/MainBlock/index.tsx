import MainContainer from "@/src/components/containers/MainContainer";
import HeaderMenu from "./HeaderMenu";

import HeaderLogo from "./Logo/HeaderLogo";

import s from "./style.module.scss";

const MainHeaderBlock: React.FC = () => (
  <section className={s["main-header-block"]}>
    <MainContainer el="div" className={s["main-header-block__container"]}>
      <HeaderLogo />
      <HeaderMenu />
    </MainContainer>
  </section>
);

export default MainHeaderBlock;
