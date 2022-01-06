/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { styled, Text } from '@kiuatelie/ui'
import { motion } from 'framer-motion'

export const ProductIndicator = styled('span', {
  width: '16px',
  height: '16px',
  borderRadius: '50%',
})

export const LegendWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  cursor: 'pointer',
  maxWidth: 'max-content',
})

export const Legend = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: '$6',
  fontWeight: '$semibold',
  color: '$spaceDark900',
})

export const Product = styled('section', {
  py: '$8',
  px: '$16',

  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const Details = motion(
  styled('section', {
    px: '$24',
    borderRadius: '$md',
    overflow: 'hidden',
    [`& ${Text}`]: {
      color: '$spaceDark900',
      '& strong': {
        fontWeight: '$bold',
        color: '$spaceGray900',
      },
    },
  })
)

export const DetailsTitle = styled('strong', {
  fontWeight: '$bold',
  color: '$spaceGray900',
})
