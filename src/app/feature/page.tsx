import MainContainer from "@/src/components/containers/MainContainer"
import PageContainer from "@/src/components/containers/PageContainer"
import PageHeader from "@/src/components/ui/Headers/PageHeader"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'BNE | 404',
}

const FeaturePage = () => {
  return (
    <PageContainer>
      <MainContainer el="div">
        <PageHeader text="Страница временно недоступна" />
        <p>
          Раздел находится на стадии разработки и станет доступен позже
        </p>
      </MainContainer>
    </PageContainer>
  )
}

export default FeaturePage