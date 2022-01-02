import React from 'react'

import { Text } from '../../text'
import * as S from '../shared/style'
import { InputProps } from './input.types'

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, name, helperText, error, ...props }, ref) => (
    <S.Wrapper
      data-testid={`${name}-wrapper`}
      data-invalid={error ? true : undefined}
    >
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputWrapper>
        {icon}
        <S.Input
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${name}-error` : `${name}-helper`}
          ref={ref}
          name={name}
          id={name}
          {...props}
        />
      </S.InputWrapper>
      {error && (
        <Text
          as="small"
          size="sm"
          id={`${name}-error`}
          role="alert"
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
          data-testid={`${name}-helper`}
          id={`${name}-helper`}
          tabIndex={-1}
          css={{
            marginTop: '$2',
            color: '$spaceDark400',
          }}
        >
          {helperText}
        </Text>
      )}
    </S.Wrapper>
  )
)
