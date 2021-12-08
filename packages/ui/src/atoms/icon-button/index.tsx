import type * as Stitches from '@stitches/react'

import { Tooltip } from '@/atoms'
import * as S from '@/atoms/button/style'

export type Props = {
  icon?: React.ReactNode
  css?: Stitches.CSS
  'aria-label': string
  tooltip?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  Stitches.VariantProps<typeof S.Button>

const Wrapper = ({
  tooltip,
  children,
}: WithChildren<{ tooltip?: React.ReactNode }>) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!tooltip) return <>{children}</>
  return <Tooltip tooltip={tooltip}>{children}</Tooltip>
}

export function IconButton({ icon, tooltip, type, ...props }: Props) {
  return (
    <Wrapper tooltip={tooltip}>
      <S.Button className="icon-button" data-icon-button type={type} {...props}>
        {icon}
      </S.Button>
    </Wrapper>
  )
}

IconButton.toString = () => '.icon-button'
