/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable sonarjs/no-duplicate-string */
import { styled } from '@/styles'

import { Icon } from '../../icon'
import { IconButton } from '../../icon-button'

export const Label = styled('label', {
  fontSize: '$base',
  fontWeight: '$semibold',
  fontFamily: '$sans',
  color: '$spaceDark900',
  marginBottom: '$8',
})

export const InputWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$10',

  background: '$$inputBgColor',
  padding: '$16',

  $$outline: '$colors$spaceDark200',
  border: '1px solid $$outline',
  borderRadius: '$lg',
  willChange: 'box-shadow outline',
  transition: 'box-shadow 0.2s ease',

  [`& ${Icon}`]: {
    color: '$$placeholderColor',
    flexShrink: 0,
  },

  [`& ${IconButton}`]: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-$space$16, -50%)',
    right: 0,
    color: '$$placeholderColor',
  },

  '&:focus-within': {
    $$outline: '$colors$melrose500',
    borderColor: '$$outline',
    boxShadow: '$$outlineOutside',
    backgroundColor: '$$inputBgColorFocus',
    color: '$errorRed400',
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
    '&::placeholder': {
      color: '$spaceDark400',
    },
  },

  '&::placeholder': {
    fontFamily: '$sans',
    fontSize: '$base',
    fontWeight: '$regular',
    color: '$$placeholderColor',
  },
})

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  $$outline: '$colors$melrose500',
  $$outlineOutside: '0px 0px 0px 4px rgba(159, 135, 255, 0.2)',
  $$inputBgColor: '$colors$spaceDark50',
  $$inputBgColorFocus: '$colors$white',
  $$placeholderColor: '$colors$spaceDark400',
  '&[data-invalid]': {
    [`& ${InputWrapper}`]: {
      $$outline: '$colors$errorRed400',
      $$outlineOutside: '0px 0px 0px 4px rgba(227, 0, 0, 0.2)',
      $$inputBgColor: 'rgba(227, 0, 0, 0.06)',
      $$placeholderColor: '$colors$errorRed400',
    },
  },
})
