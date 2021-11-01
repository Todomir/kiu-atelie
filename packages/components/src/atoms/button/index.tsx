import type * as Stitches from '@stitches/react'

import { Icon } from '..'
import * as S from './style'

type Props = {
  leftIcon?: React.ReactElement<typeof Icon>
  rightIcon?: React.ReactElement<typeof Icon>
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
