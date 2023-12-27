import MainContainer from "@/src/components/containers/MainContainer"
import PageContainer from "@/src/components/containers/PageContainer"
import PageHeader from "@/src/components/ui/Headers/PageHeader"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'BNE | Сервис',
}

const FeaturePage = () => {
  return (
    <PageContainer>
      <MainContainer el="div">
        <PageHeader text="Сервис" />
        <p>
          Тут нужна информация про процесс покупки, доставки и прочих деталей заказа и получения товара
        </p>
      </MainContainer>
    </PageContainer>
  )
}

export default FeaturePage