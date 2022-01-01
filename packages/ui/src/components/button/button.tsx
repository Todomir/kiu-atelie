import React from "react";

import * as S from "./button.styles";
import { ButtonProps } from "./button.types";

export const Button = ({
  leftIcon,
  rightIcon,
  type,
  children,
  ...rest
}: WithChildren<ButtonProps>) => (
  <S.Button type={type} {...rest}>
    {leftIcon}
    {children}
    {rightIcon}
  </S.Button>
);
