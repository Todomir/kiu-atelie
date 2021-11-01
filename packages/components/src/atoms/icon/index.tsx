import { styled } from '@/styles'

import icons from './names'

type Props = {
  size?: number
  name: keyof typeof icons
}

const Svg = styled('svg')

export function Icon({ name, size = 24 }: Props) {
  const Path = icons[name as keyof typeof icons]
  return (
    <Svg
      className="icon"
      css={{ width: `${size}px`, height: `${size}px` }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path />
    </Svg>
  )
}

Icon.toString = () => '.icon'
