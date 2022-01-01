import { Heading } from '@kiuatelie/ui'

import type { DataCardProps } from '.'
import * as S from './data-card.styles'

export const DataCard = ({ title, data }: DataCardProps) => (
  <S.Card>
    <Heading size="md">{title}</Heading>
    <Heading as="h2" size="2xl">
      {data}
    </Heading>
  </S.Card>
)
