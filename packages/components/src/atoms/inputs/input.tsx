import React from 'react'

import * as S from './shared/style'

type Props = {
  label: string
  icon?: React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>

export function Input({ label, icon, name, ...props }: Props) {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputWrapper>
        {icon}
        <S.Input name={name} {...props} />
      </S.InputWrapper>
    </S.Wrapper>
  )
}
