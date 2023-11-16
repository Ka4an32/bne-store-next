import MainContainer from "@/src/components/containers/MainContainer";
import PageContainer from "@/src/components/containers/PageContainer";
import "@marketsystems/nextjs13-appdir-breadcrumbs/dist/styles.css";

const CatalogPage = ({ children }) => {
  return (
    <PageContainer>
      <MainContainer el="div">
        {children}
      </MainContainer>
    </PageContainer>
  );
};

export default CatalogPage;
