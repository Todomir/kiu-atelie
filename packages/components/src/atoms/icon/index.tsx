import { styled } from '@/styles'

import icons from './names'

type Props = {
  name: keyof typeof icons
}

const Svg = styled('svg', {
  width: '1.15em',
  height: '1.15em',
})

export function Icon({ name }: Props) {
  const Path = icons[name as keyof typeof icons]
  return (
    <Svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path />
    </Svg>
  )
}
