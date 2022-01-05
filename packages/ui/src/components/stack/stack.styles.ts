import { styled } from '@/styles'

export const Stack = styled('div', {
  display: 'flex',
  alignItems: 'center',

  variants: {
    direction: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
  },
  defaultVariants: {
    direction: 'horizontal',
  },
})
