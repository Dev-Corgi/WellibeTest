import hexToRgba from 'hex-to-rgba';

/* fonts */
export const FontFamily = {
    font: "Pretendard",
    interRegular: "Inter-Regular",
    PretendardBold : "PretendardBold",
    PretendardRegular : "PretendardRegular",
    PretendardSemiBold : "PretendardSemiBold",
    PretendardLight : "PretendardLight",
    PretendardMedium : "PretendardMedium"
  };
  /* font sizes */
  export const FontSize = {
    font_size: 16,
    font6_size: 14,
    font5_size: 20,
    font4_size: 12,
    size_3xl: 22,
    size_lg: 18,
    font3_size: 24,
  };
  /* Colors */

  const ColorConverter = (colorCode,opacity = 1) => {
    return hexToRgba(colorCode, opacity);
}

  export const Color = {
    white: (opacity = 1) => ColorConverter("#ffffff",opacity),
    navy:  (opacity = 1) =>ColorConverter("#071027",opacity),
    gray_100: (opacity = 1) => ColorConverter("#FBFBFB",opacity),
    gray_200: (opacity = 1) => ColorConverter("#E6E6E6",opacity),
    gray_300: (opacity = 1) => ColorConverter("#CCCCCC",opacity),
    gray_400: (opacity = 1) => ColorConverter("#B3B3B3",opacity),
    gray_500: (opacity = 1) => ColorConverter("#999999",opacity),
    gray_600: (opacity = 1) => ColorConverter("#808080",opacity),
    gray_700: (opacity = 1) => ColorConverter("#4D4D4D",opacity),
    gray_800: (opacity = 1) => ColorConverter("#333333",opacity),
    gray_900: (opacity = 1) => ColorConverter("#1A1A1A",opacity),
    primary_100: (opacity = 1) => ColorConverter("#FEF6E1",opacity),
    primary_200: (opacity = 1) => ColorConverter("#FCEDC3",opacity),
    primary_300: (opacity = 1) => ColorConverter("#FBE4A6",opacity),
    primary_400: (opacity = 1) => ColorConverter("#FADB88",opacity),
    primary_500: (opacity = 1) => ColorConverter("#F8d26A",opacity),
    primary_600: (opacity = 1) => ColorConverter("#F7C94D",opacity),
    primary_700: (opacity = 1) => ColorConverter("#F5C02F",opacity),
    primary_800: (opacity = 1) => ColorConverter("#E4AD14",opacity),
    primary_900: (opacity = 1) => ColorConverter("#C39000",opacity),
    primary_1000: (opacity = 1) => ColorConverter("#936100",opacity),
    secondary_100: (opacity = 1) => ColorConverter("#D6DFEA",opacity),
    secondary_200: (opacity = 1) => ColorConverter("#ADC0D6",opacity),
    secondary_300: (opacity = 1) => ColorConverter("#84A0C1",opacity),
    secondary_400: (opacity = 1) => ColorConverter("#5A80AD",opacity),
    secondary_500: (opacity = 1) => ColorConverter("#436286",opacity),
    secondary_600: (opacity = 1) => ColorConverter("#2F445D",opacity),
    secondary_700: (opacity = 1) => ColorConverter("#1A2634",opacity),
    secondary_800: (opacity = 1) => ColorConverter("#111923",opacity),
    secondary_900: (opacity = 1) => ColorConverter("#0A1018",opacity),
    secondary_1000: (opacity = 1) => ColorConverter("#060E16",opacity),
    system_100: (opacity = 1) => ColorConverter("#B844FF",opacity),
    system_200: (opacity = 1) => ColorConverter("#FF68DE",opacity),
    system_300: (opacity = 1) => ColorConverter("#009DFF",opacity),
    system_400: (opacity = 1) => ColorConverter("#FF6174",opacity),
    black: (opacity = 1) => ColorConverter("#000000",opacity),
    kakaoYellow: (opacity = 1) => ColorConverter("#fee500",opacity),
  };

  /* Paddings */
  export const Padding = {
    p_3xs: 10,
    p_44xl: 63,
    p_4xl: 23,
    p_sm: 14,
    p_xs: 12,
  };
  /* border radiuses */
  export const Border = {
    br_base: 16,
    br_xs: 12,
    br_3xs: 10,
    br_xl: 20,
    br_11xl: 30,
  };
  