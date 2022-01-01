import React from "react";

import * as S from "@/components/button/button.styles";

import { Tooltip } from "../tooltip";
import { IconButtonProps, IconButtonWrapperProps } from "./icon-button.types";

const Wrapper = ({
  tooltip,
  children,
}: WithChildren<IconButtonWrapperProps>) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!tooltip) return <>{children}</>;
  return <Tooltip tooltip={tooltip}>{children}</Tooltip>;
};

export const IconButton = ({
  icon,
  tooltip,
  type,
  ...props
}: IconButtonProps) => (
  <Wrapper tooltip={tooltip}>
    <S.Button className="icon-button" data-icon-button type={type} {...props}>
      {icon}
    </S.Button>
  </Wrapper>
);

IconButton.toString = () => ".icon-button";
