import { styled } from '@kiuatelie/ui'

export const Card = styled('div', {
  px: '$24',
  py: '$36',

  backgroundColor: '$spaceDark50',
  borderRadius: '$2xl',

  color: '$spaceDark1000',

  '& h1': {
    color: '$spaceDark700',
    fontWeight: '$semibold',
  },
  '& h2': {
    fontWeight: '$black',
  },
})
