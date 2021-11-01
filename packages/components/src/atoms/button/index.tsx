import type * as Stitches from '@stitches/react'

import * as S from './style'

type Props = {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  css?: Stitches.CSS
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  Stitches.VariantProps<typeof S.Button>

export function Button({
  leftIcon,
  rightIcon,
  type,
  children,
  ...props
}: WithChildren<Props>) {
  return (
    <S.Button type={type} {...props}>
      {leftIcon}
      {children}
      {rightIcon}
    </S.Button>
  )
}
