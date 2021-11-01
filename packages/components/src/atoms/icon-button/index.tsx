import type * as Stitches from '@stitches/react'

import * as S from '@/atoms/button/style'

type Props = {
  icon?: React.ReactNode
  css?: Stitches.CSS
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  Stitches.VariantProps<typeof S.Button>

export function IconButton({ icon, type, ...props }: Props) {
  return (
    <S.Button className="icon-button" data-icon-button type={type} {...props}>
      {icon}
    </S.Button>
  )
}

IconButton.toString = () => '.icon-button'
