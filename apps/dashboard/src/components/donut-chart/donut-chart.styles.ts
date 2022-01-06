import { styled, Text } from '@kiuatelie/ui'

export const ProductIndicator = styled('span', {
  width: '16px',
  height: '16px',
  borderRadius: '50%',
})

export const LegendWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
})

export const Legend = styled(Text, {
  fontWeight: '$semibold',
  color: '$spaceDark800',
})
