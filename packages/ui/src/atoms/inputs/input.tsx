import React from 'react'

import { Text } from '@/atoms'

import * as S from './shared/style'

export type Props = {
  label: string
  helperText?: string
  icon?: React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>

export function Input({ label, icon, name, helperText, ...props }: Props) {
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputWrapper>
        {icon}
        <S.Input name={name} {...props} />
      </S.InputWrapper>
      {helperText && (
        <Text
          size="sm"
          css={{
            color: '$spaceDark400',
          }}
        >
          {helperText}
        </Text>
      )}
    </S.Wrapper>
  )
}
