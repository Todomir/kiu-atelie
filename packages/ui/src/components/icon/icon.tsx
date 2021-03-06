import React from 'react'

import { styled } from '@/styles'

import { IconProps } from './icon.types'
import icons from './names'

const Svg = styled('svg')

export const Icon = ({ name, label, size = 20 }: IconProps) => {
  const Path = icons[name]
  return (
    <Svg
      role="img"
      aria-label={label}
      className="icon"
      data-icon={name}
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
