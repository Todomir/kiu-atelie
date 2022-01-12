import { styled } from '@kiuatelie/ui'

export const Container = styled('main', {
  width: 'min(1626px, 100vw - $space$16)',
  margin: '0 auto',
  px: '$20',
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$40',
})
