import React from 'react'

import { Icon, IconButton, Text } from '@/atoms'
import { useToggle } from '@/utils/hooks'

import * as S from './shared/style'

export type Props = {
  label: string
  icon?: React.ReactNode
  helperText?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export function Password({ label, icon, name, helperText, ...props }: Props) {
  const [show, toggle] = useToggle()
  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputWrapper>
        {icon}
        <S.Input name={name} {...props} type={show ? 'text' : 'password'} />
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
      </S.InputWrapper>{' '}
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
