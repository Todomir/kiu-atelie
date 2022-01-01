import React from "react";

import * as S from "./stack.styles";
import type { StackProps } from "./stack.types";

export const Stack = ({
  children,
  gap = "$8",
  css,
  direction,
}: WithChildren<StackProps>) => (
  <S.Stack
    css={{
      ...css,
      gap,
    }}
    direction={direction}
  >
    {children}
  </S.Stack>
);
