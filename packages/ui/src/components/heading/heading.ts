import { styled } from '@/styles'

const Heading = styled('h1', {
  fontWeight: '$bold',
  fontFamily: '$sans',
  lineHeight: '$normal',

  variants: {
    size: {
      '3xl': {
        fontSize: '$3xl',
        letterSpacing: '$tighter',
        fontWeight: '$black',
      },
      '2xl': {
        fontSize: '$2xl',
        letterSpacing: '$tighter',
        fontWeight: '$bold',
      },
      xl: {
        fontSize: '$xl',
        letterSpacing: '$tight',
        fontWeight: '$semibold',
      },
      lg: {
        fontSize: '$lg',
        letterSpacing: '$tight',
        fontWeight: '$semibold',
      },
      md: {
        fontSize: '$md',
        letterSpacing: '$regular',
        fontWeight: '$semibold',
      },
    },
  },

  defaultVariants: {
    size: '2xl',
  },
})

export { Heading }
