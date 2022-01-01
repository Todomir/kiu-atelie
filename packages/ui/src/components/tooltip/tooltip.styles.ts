import * as Tooltip from "@radix-ui/react-tooltip";
import { keyframes } from "@stitches/react";

import { styled } from "@/styles";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const Content = styled(Tooltip.Content, {
  background: "$spaceDark50",
  borderRadius: "$md",

  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  fontFamily: "$sans",
  fontWeight: "$regular",
  fontSize: "$base",
  color: "$spaceDark1000",

  px: "$10",
  py: "$6",

  boxShadow:
    "5.36111px 4.50095px 22px rgba(0, 0, 0, 0.1), 2.71406px 2.27861px 9.59062px rgba(0, 0, 0, 0.0675), 1.07222px 0.90019px 3.575px rgba(0, 0, 0, 0.05), 0.234548px 0.196917px 1.27188px rgba(0, 0, 0, 0.0325)",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});
export const Arrow = styled(Tooltip.Arrow, {
  fill: "$spaceDark50",
  borderRadius: "$xl",
});
