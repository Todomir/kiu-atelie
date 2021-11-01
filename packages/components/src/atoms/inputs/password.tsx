import React from 'react'

import { Icon, IconButton } from '@/atoms'
import { useToggle } from '@/utils/hooks'

import * as S from './shared/style'

type Props = {
  label: string
  icon?: React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>

export function Password({ label, icon, name, ...props }: Props) {
  const [show, toggle] = useToggle()
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputWrapper>
        {icon}
        <S.Input name={name} {...props} type={show ? 'text' : 'password'} />
        <IconButton
          onClick={toggle}
          color="ghost"
          icon={<Icon name={show ? 'eye-slashed' : 'eye'} />}
        />
      </S.InputWrapper>
    </S.Wrapper>
  )
}
