import React from 'react'

import { Text } from '@/atoms'

import * as S from './shared/style'

export type Props = {
  label: string
  helperText?: string
  icon?: React.ReactNode
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, icon, name, helperText, error, ...props }, ref) => (
    <S.Wrapper data-invalid={error ? true : undefined}>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputWrapper>
        {icon}
        <S.Input aria-invalid={!!error} ref={ref} name={name} {...props} />
      </S.InputWrapper>
      {error && (
        <Text
          as="small"
          size="sm"
          css={{
            marginTop: '$2',
            color: '$errorRed400',
          }}
        >
          {error}
        </Text>
      )}
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
)
