import type * as Stitches from '@stitches/react'
import { createStitches } from '@stitches/react'

import * as tokens from './tokens'

const { styled, css, theme, getCssText, globalCss } = createStitches({
  prefix: 'kiu',
  theme: { ...tokens },
  utils: {
    px: (value: Stitches.ScaleValue<'space'>) => ({
      paddingInline: value,
    }),
    py: (value: Stitches.ScaleValue<'space'>) => ({
      paddingBlock: value,
    }),
    mx: (value: Stitches.ScaleValue<'space'>) => ({
      marginInline: value,
    }),
    my: (value: Stitches.ScaleValue<'space'>) => ({
      marginBlock: value,
    }),
  },
})

const globalStyles = globalCss({
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    background: '$white',
    color: '$spaceDark1000',

    fontFamily: theme.fonts.sans,
    fontSize: theme.fontSizes.base,
    lineHeight: theme.lineHeights.normal,
    fontWeight: theme.fontWeights.regular,
  },
})

export { styled, css, getCssText, theme, globalStyles }
