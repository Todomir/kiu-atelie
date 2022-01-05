import React from 'react'

import { Stack } from '@/components'
import { useToggle } from '@/hooks'

import { Icon } from '../../icon'
import { IconButton } from '../../icon-button'
import { Text } from '../../text'
import * as S from '../shared/style'
import { PasswordProps } from './password.types'

export const Password = React.forwardRef<HTMLInputElement, PasswordProps>(
  ({ label, icon, name, helperText, error, ...props }, ref) => {
    const containsHelperOrError = !!helperText || !!error

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
            icon={
              <Icon
                label="Toggle password"
                name={show ? 'eye-slashed' : 'eye'}
              />
            }
          />
        </S.InputWrapper>
        {containsHelperOrError && (
          <Stack
            gap="$4"
            css={{
              color: error ? '$errorRed400' : '$spaceDark600',
              marginTop: '$8',
            }}
          >
            {error && <Icon label="Error indicator" name="info" size={16} />}
            <Text
              as="small"
              size="sm"
              data-testid={error ? `${name}-error` : `${name}-helper`}
              id={error ? `${name}-error` : `${name}-helper`}
              role={error ? 'alert' : undefined}
            >
              {error || helperText}
            </Text>
          </Stack>
        )}
      </S.Wrapper>
    )
  }
)
