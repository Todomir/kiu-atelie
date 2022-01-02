import type * as Stitches from '@stitches/react'

import { config } from '@/styles'

export type LinkProps = {
  href: string
  underline?: boolean
  css?: Stitches.CSS<typeof config>
}
