import { styled } from "@/styles";

import { Icon } from "../../icon";
import { IconButton } from "../../icon-button";

export const Label = styled("label", {
  fontSize: "$base",
  fontWeight: "$semibold",
  fontFamily: "$sans",
  color: "$spaceDark900",
  marginBottom: "$8",
});

export const InputWrapper = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "$10",

  background: "$spaceDark50",
  padding: "$16",

  borderRadius: "$lg",

  [`& ${Icon}`]: {
    color: "inherit",
    flexShrink: 0,
  },

  [`& ${IconButton}`]: {
    position: "absolute",
    top: "50%",
    transform: "translate(-$space$16, -50%)",
    right: 0,
  },

  "&:focus-within": {
    outline: "2px solid black",
  },
});

export const Input = styled("input", {
  position: "relative",
  border: "none",

  fontFamily: "$sans",
  fontSize: "$base",
  fontWeight: "$semibold",
  background: "transparent",

  width: "100%",
  flexGrow: 1,
  flexShrink: 9999,

  "&:focus": {
    outline: "none",
  },

  "&::placeholder": {
    fontFamily: "$sans",
    fontSize: "$base",
    fontWeight: "$regular",
    color: "$spaceDark400",
  },

  "&[aria-invalid]": {
    "&::placeholder": {
      color: "$colors$errorRed400",
    },
  },
});

export const Wrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  position: "relative",

  "&[data-invalid]": {
    [`& ${Label}`]: {
      color: "$errorRed400",
    },
    [`& ${InputWrapper}`]: {
      outline: "2px solid $errorRed400",
    },
  },
});
