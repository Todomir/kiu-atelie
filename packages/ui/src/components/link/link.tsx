import React from "react";

import * as S from "./link.styles";
import { LinkProps } from "./link.types";

export const Link = ({
  children,
  underline = true,
  ...props
}: WithChildren<LinkProps>) => (
  <S.Anchor data-underline={underline ? true : undefined} {...props}>
    {children}
  </S.Anchor>
);
