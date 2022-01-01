import { Heading } from '@kiuatelie/ui'

import * as S from './styles'

export type Props = {
  title: string
  data: string
}

const DataCard = ({ title, data }: Props) => (
  <S.Card>
    <Heading size="md">{title}</Heading>
    <Heading as="h2" size="2xl">
      {data}
    </Heading>
  </S.Card>
)

export default DataCard
