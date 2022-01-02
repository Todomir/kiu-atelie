import type * as Stitches from '@stitches/react'

import { config } from '@/styles'

import { Stack } from './stack.styles'

export type StackProps = {
  gap?: Stitches.ScaleValue<'space', typeof config>
  css?: Stitches.CSS<typeof config>
} & Stitches.VariantProps<typeof Stack>
