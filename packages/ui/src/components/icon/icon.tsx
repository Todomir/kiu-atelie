import React from "react";

import { styled } from "@/styles";

import { IconProps } from "./icon.types";
import icons from "./names";

const Svg = styled("svg");

export const Icon = ({ name, size = 20 }: IconProps) => {
  const Path = icons[name as keyof typeof icons];
  return (
    <Svg
      className="icon"
      css={{ width: `${size}px`, height: `${size}px` }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path />
    </Svg>
  );
};

Icon.toString = () => ".icon";
