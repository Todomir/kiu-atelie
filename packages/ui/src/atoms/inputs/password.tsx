import React from 'react'

import { Icon, IconButton, Text } from '@/atoms'
import { useToggle } from '@/utils/hooks'

import * as S from './shared/style'

export type Props = {
  label: string
  icon?: React.ReactNode
  helperText?: string
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Password = React.forwardRef<HTMLInputElement, Props>(
  ({ label, icon, name, helperText, error, ...props }, ref) => {
    const [show, toggle] = useToggle()
    return (
      <S.Wrapper data-invalid={error ? true : undefined}>
        <S.Label htmlFor={name}>{label}</S.Label>
        <S.InputWrapper>
          {icon}
          <S.Input
            aria-invalid={error ? true : undefined}
            ref={ref}
            name={name}
            {...props}
            type={show ? 'text' : 'password'}
          />
          <IconButton
            aria-label="Alternar visibilidade da senha"
            role="switch"
            aria-checked={show}
            aria-describedby={name}
            onClick={toggle}
            color="ghost"
            type="button"
            icon={<Icon name={show ? 'eye-slashed' : 'eye'} />}
          />
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
  }
)
