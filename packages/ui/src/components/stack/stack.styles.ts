import { styled } from '@/styles'

export const Stack = styled('div', {
  display: 'flex',
  alignItems: 'center',

  '& > *': {
    flexGrow: '1',
    width: '100%',
  },

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
