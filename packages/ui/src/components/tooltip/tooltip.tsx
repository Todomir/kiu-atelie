import * as RTooltip from '@radix-ui/react-tooltip'
import React from 'react'

import * as S from './tooltip.styles'

type Props = {
  tooltip: React.ReactNode
} & React.ComponentProps<typeof RTooltip.Root> &
  React.ComponentProps<typeof RTooltip.Content>

export const Tooltip = ({
  children,
  tooltip,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration,
  ...props
}: WithChildren<Props>) => (
  <RTooltip.Root
    open={open}
    defaultOpen={defaultOpen}
    onOpenChange={onOpenChange}
    delayDuration={delayDuration}
  >
    <RTooltip.Trigger asChild>{children}</RTooltip.Trigger>
    <S.Content side="top" align="center" {...props}>
      <S.Arrow />
      {tooltip}
    </S.Content>
  </RTooltip.Root>
)
