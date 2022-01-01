import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";

const tokens = {
  colors: {
    melrose300: "#e1ccff",
    melrose400: "#cfb1ff",
    melrose500: "#c29dff",
    freshAir300: "#DFF0FF",
    freshAir400: "#b8dfff",
    freshAir500: "#7fcaff",
    aeroGreen300: "#EAFFF1",
    aeroGreen400: "#c3ffd9",
    aeroGreen500: "#98fec1",
    goldenrodYellow300: "#FEFFAE",
    goldenrodYellow400: "#f9ff74",
    goldenrodYellow500: "#eaf15c",
    spaceDark50: "#F9FAFB",
    spaceDark100: "#ECEEF1",
    spaceDark200: "#D0D5DC",
    spaceDark300: "#B5BDC8",
    spaceDark400: "#9BA5B4",
    spaceDark500: "#7F8C9F",
    spaceDark600: "#657389",
    spaceDark700: "#546072",
    spaceDark800: "#424C5A",
    spaceDark900: "#343C47",
    spaceDark1000: "#292F38",
    white: "#FFFFFF",
    errorRed300: "#F86463",
    errorRed400: "#f35052",
    errorRed500: "#da3740",
    successGreen300: "#3DA862",
    successGreen400: "#2f9f5e",
    successGreen500: "#1f7d4c",
  },
  fonts: {
    sans: "HK Grotesk, -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif",
  },
  fontSizes: {
    "3xl": "3.062rem",
    "2xl": "2.438rem",
    xl: "1.938rem",
    lg: "1.562rem",
    md: "1.25rem",
    base: "1rem",
    sm: "0.812rem",
  },

  fontWeights: {
    regular: 400,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  letterSpacings: {
    wide: "1.5%",
    regular: "0%",
    tight: "-0.5%",
    tighter: "-2%",
  },
  lineHeights: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },
  radii: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  space: {
    2: "2px",
    4: "4px",
    6: "6px",
    8: "8px",
    10: "10px",
    12: "12px",
    14: "14px",
    16: "16px",
    20: "20px",
    24: "24px",
    28: "28px",
    32: "32px",
    36: "36px",
    40: "40px",
    48: "48px",
    56: "56px",
    64: "64px",
    80: "80px",
    96: "96px",
    112: "112px",
    128: "128px",
    144: "144px",
    160: "160px",
    176: "176px",
    192: "192px",
    208: "208px",
    224: "224px",
    240: "240px",
    256: "256px",
    288: "288px",
    320: "320px",
    384: "384px",
  },
};

const { styled, css, theme, getCssText, globalCss } = createStitches({
  prefix: "kiu",
  theme: { ...tokens },
  utils: {
    px: (value: Stitches.ScaleValue<"space">) => ({
      paddingInline: value,
    }),
    py: (value: Stitches.ScaleValue<"space">) => ({
      paddingBlock: value,
    }),
    mx: (value: Stitches.ScaleValue<"space">) => ({
      marginInline: value,
    }),
    my: (value: Stitches.ScaleValue<"space">) => ({
      marginBlock: value,
    }),
  },
});

const globalStyles = globalCss({
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    background: "$white",
    color: "$spaceDark1000",

    fontFamily: theme.fonts.sans,
    fontSize: theme.fontSizes.base,
    lineHeight: theme.lineHeights.normal,
    fontWeight: theme.fontWeights.regular,
  },
});

export { styled, css, getCssText, theme, globalStyles };
