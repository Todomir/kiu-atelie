import type * as Stitches from '@stitches/react'

import { config } from '@/styles'

import { Button } from '../button/button.styles'

export type IconButtonProps = {
  icon?: React.ReactNode
  css?: Stitches.CSS<typeof config>
  'aria-label': string
  tooltip?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  Stitches.VariantProps<typeof Button>

export type IconButtonWrapperProps = {
  tooltip?: React.ReactNode
}
