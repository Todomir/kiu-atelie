import type * as Stitches from '@stitches/react'

import * as S from './style'

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Stitches.VariantProps<typeof S.Button> & {
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
  }

export function Button({
  leftIcon,
  rightIcon,
  type,
  children,
  ...rest
}: WithChildren<Props>) {
  return (
    <S.Button type={type} {...rest}>
      {leftIcon}
      {children}
      {rightIcon}
    </S.Button>
  )
}
