import type { CSS } from '@stitches/react'

import * as S from './style'

export type Props = {
  href: string
  underline?: boolean
  css?: CSS
}

export function Link({
  children,
  underline = true,
  ...props
}: WithChildren<Props>) {
  return (
    <S.Anchor data-underline={underline ? true : undefined} {...props}>
      {children}
    </S.Anchor>
  )
}
