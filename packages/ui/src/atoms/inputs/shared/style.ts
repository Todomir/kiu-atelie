import { Icon, IconButton } from '@/atoms'
import { styled } from '@/styles'

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
})

export const InputWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',

  background: '$spaceDark50',
  px: '$4',
  py: '$4',

  borderRadius: '$lg',

  [`& ${Icon}`]: {
    color: 'inherit',
    flexShrink: 0,
  },

  [`& ${IconButton}`]: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-$space$4, -50%)',
    right: 0,
  },

  '&:focus-within': {
    outline: '2px solid black',
  },
})

export const Input = styled('input', {
  position: 'relative',
  border: 'none',

  fontFamily: '$sans',
  fontSize: '$base',
  fontWeight: '$semibold',
  background: 'transparent',

  width: '100%',
  flexGrow: 1,
  flexShrink: 9999,

  '&:focus': {
    outline: 'none',
  },

  '&::placeholder': {
    fontFamily: '$sans',
    fontSize: '$base',
    fontWeight: '$regular',
    color: '$spaceDark400',
  },
})
export const Label = styled('label', {
  fontSize: '$base',
  fontWeight: '$semibold',
  fontFamily: '$sans',
  color: '$spaceDark900',
  marginBottom: '$4',
})
