import { styled } from '@/styles'

export const Anchor = styled('a', {
  display: 'inline-flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$8',

  fontFamily: '$sans',
  fontSize: '$regular',
  fontWeight: '$semibold',

  color: 'currentColor',
  textDecoration: 'none',

  transition: 'all 0.6s ease',

  '&[data-underline]': {
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,

      display: 'block',
      width: '100%',
      height: '2px',

      background: 'currentColor',

      transform: 'scaleY(0)',

      transition: 'all 0.6s ease',
    },

    '&:hover': {
      '&::after': {
        transition: 'all 0.25s ease',
        transform: 'scaleY(1) translateY(1px)',
      },
    },
  },
})
