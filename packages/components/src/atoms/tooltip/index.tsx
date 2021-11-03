import * as RTooltip from '@radix-ui/react-tooltip'

import * as S from './style'

type Props = {
  tooltip: React.ReactNode
}

export function Tooltip({ children, tooltip }: WithChildren<Props>) {
  return (
    <RTooltip.Root>
      <RTooltip.Trigger asChild>{children}</RTooltip.Trigger>
      <S.Content>
        <S.Arrow />
        {tooltip}
      </S.Content>
    </RTooltip.Root>
  )
}
