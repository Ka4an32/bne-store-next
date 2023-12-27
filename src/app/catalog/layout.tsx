'use client'

import MainContainer from "@/src/components/containers/MainContainer";
import PageContainer from "@/src/components/containers/PageContainer";
import PageHeader from "@/src/components/ui/Headers/PageHeader";

import s from './style.module.scss'
import CategoryListNode from "@/src/components/nodes/CategoryListNode";
import { useParams } from "next/navigation";


const CatalogLayout = ({
  children
}) => {

  const params = useParams()
  const category = params['categories'] as string

  return (
    <PageContainer>
      <MainContainer el="section">
        <PageHeader text="Каталог" />
        <div className={s["catalog-container"]}>
          <div className={s["category-product-list"]}>
            <CategoryListNode category={category} />
          </div>
          <div className={s["catalog-product-list"]}>
            {children}
          </div>
        </div>
      </MainContainer>
    </PageContainer>
  );
}

export default CatalogLayout