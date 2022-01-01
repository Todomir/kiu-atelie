import React from "react";

import { Text } from "../../text";
import * as S from "../shared/style";
import { InputProps } from "./input.types";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, icon, name, helperText, error, ...props }, ref) => (
    <S.Wrapper data-invalid={error ? true : undefined}>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputWrapper>
        {icon}
        <S.Input
          aria-invalid={error ? true : undefined}
          ref={ref}
          name={name}
          {...props}
        />
      </S.InputWrapper>
      {error && (
        <Text
          as="small"
          size="sm"
          css={{
            marginTop: "$2",
            color: "$errorRed400",
          }}
        >
          {error}
        </Text>
      )}
      {helperText && (
        <Text
          size="sm"
          css={{
            marginTop: "$2",
            color: "$spaceDark400",
          }}
        >
          {helperText}
        </Text>
      )}
    </S.Wrapper>
  )
);