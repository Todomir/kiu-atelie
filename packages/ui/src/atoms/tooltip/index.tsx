import * as RTooltip from '@radix-ui/react-tooltip'

import * as S from './style'

type Props = {
  tooltip: React.ReactNode
} & React.ComponentProps<typeof RTooltip.Root> &
  React.ComponentProps<typeof RTooltip.Content>

export function Tooltip({
  children,
  tooltip,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration,
  skipDelayDuration,
  ...props
}: WithChildren<Props>) {
  return (
    <RTooltip.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
    >
      <RTooltip.Trigger asChild>{children}</RTooltip.Trigger>
      <S.Content side="top" align="center" {...props}>
        <S.Arrow />
        {tooltip}
      </S.Content>
    </RTooltip.Root>
  )
}
