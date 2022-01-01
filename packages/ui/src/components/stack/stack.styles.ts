import { styled } from "@/styles";

export const Stack = styled("div", {
  display: "flex",
  variants: {
    direction: {
      horizontal: {
        flexDirection: "row",
      },
      vertical: {
        flexDirection: "column",
      },
    },
  },
  defaultVariants: {
    direction: "horizontal",
  },
});
