import ContactInfoBlock from "./_components/ContactInfoBlock";
import MainHeaderBlock from "./_components/MainBlock";

const Header = () => (
  <header style={{ position: "relative", zIndex: 9 }}>
    <ContactInfoBlock />
    <MainHeaderBlock />
  </header>
);

export default Header;
