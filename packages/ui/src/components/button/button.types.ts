import type * as Stitches from '@stitches/react'

import { config } from '@/styles'

import { Button } from './button.styles'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Stitches.VariantProps<typeof Button> & {
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    css?: Stitches.CSS<typeof config>
  }
