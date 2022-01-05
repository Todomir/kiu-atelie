import React from 'react'

import { Icon, Stack } from '@/components'

import { Text } from '../../text'
import * as S from '../shared/style'
import { InputProps } from './input.types'

const generateDescribedBy = (
  helperText: string | undefined,
  error: string | undefined,
  name: string
) => {
  if (!helperText && !error) return undefined
  return error ? `${name}-error` : `${name}-helper`
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, name, helperText, error, ...props }, ref) => {
    const containsHelperOrError = !!helperText || !!error
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
            aria-describedby={generateDescribedBy(helperText, error, name)}
            ref={ref}
            name={name}
            id={name}
            {...props}
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
