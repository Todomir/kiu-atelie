import { styled } from '@/styles'

const spaceDark50 = '$colors$spaceDark50'
const spaceDark200 = '$colors$spaceDark200'

export const Button = styled('button', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$1',

  px: '$6',
  py: '$3',

  borderRadius: '$xl',
  border: 'none',

  cursor: 'pointer',

  fontFamily: '$sans',
  fontSize: '$base',
  fontWeight: '$semibold',

  $$primaryBg: spaceDark200,
  $$primaryBgHover: '$colors$spaceDark300',
  $$primaryBgActive: '$colors$spaceDark400',
  $$textColor: '$colors$spaceDark1000',

  color: '$$textColor',
  background: '$$primaryBg',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: '$$primaryBgHover',
    gap: '$2',
  },
  '&:active': {
    transition: 'all 0.15s ease',
    background: '$$primaryBgActive',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    $$primaryBg: spaceDark200,
    $$primaryBgHover: spaceDark200,
    $$primaryBgActive: spaceDark200,
    $$textColor: '$colors$spaceDark400',
  },
  '&[data-error]': {
    $$primaryBg: '$colors$errorRed300',
    $$primaryBgHover: '$colors$errorRed400',
    $$primaryBgActive: '$colors$errorRed500',
    $$textColor: spaceDark50,
  },
  '&[data-success]': {
    $$primaryBg: '$colors$successGreen300',
    $$primaryBgHover: '$colors$successGreen400',
    $$primaryBgActive: '$colors$successGreen500',
    $$textColor: spaceDark50,
  },

  variants: {
    color: {
      melrose: {
        $$primaryBg: '$colors$melrose300',
        $$primaryBgHover: '$colors$melrose400',
        $$primaryBgActive: '$colors$melrose500',
      },
      aeroGreen: {
        $$primaryBg: '$colors$aeroGreen300',
        $$primaryBgHover: '$colors$aeroGreen400',
        $$primaryBgActive: '$colors$aeroGreen500',
      },
      freshAir: {
        $$primaryBg: '$colors$freshAir300',
        $$primaryBgHover: '$colors$freshAir400',
        $$primaryBgActive: '$colors$freshAir500',
      },
      goldenrodYellow: {
        $$primaryBg: '$colors$goldenrodYellow300',
        $$primaryBgHover: '$colors$goldenrodYellow400',
        $$primaryBgActive: '$colors$goldenrodYellow500',
      },
      spaceDark: {
        $$primaryBg: '$colors$spaceDark700',
        $$primaryBgHover: '$colors$spaceDark800',
        $$primaryBgActive: '$colors$spaceDark900',
        $$textColor: '$colors$spaceDark50',
      },
    },
    size: {
      full: {
        width: '100%',
      },
      contain: {
        width: 'fit-content',
      },
    },
  },

  defaultVariants: {
    color: 'melrose',
  },
})
