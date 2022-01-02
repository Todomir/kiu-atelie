import React from 'react'

import { useToggle } from '@/hooks'

import { Icon } from '../../icon'
import { IconButton } from '../../icon-button'
import { Text } from '../../text'
import * as S from '../shared/style'
import { PasswordProps } from './password.types'

export const Password = React.forwardRef<HTMLInputElement, PasswordProps>(
  ({ label, icon, name, helperText, error, ...props }, ref) => {
    const [show, toggle] = useToggle()
    return (
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
            id={name}
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
            id={`${name}-helper`}
            data-testid={`${name}-helper`}
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
  }
)
