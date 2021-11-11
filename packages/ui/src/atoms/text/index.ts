import { styled } from '@/styles'

const Text = styled('p', {
  fontWeight: '$regular',
  lineHeight: '$normal',
  fontFamily: '$sans',

  variants: {
    size: {
      base: {
        fontSize: '$base',
        letterSpacing: '$regular',
      },
      sm: {
        fontSize: '$sm',
        letterSpacing: '$wide',
        fontWeight: '$semibold',
      },
    },
  },

  defaultVariants: {
    size: 'base',
  },
})

export { Text }
