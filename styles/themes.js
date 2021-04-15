const styles = {
  fonts: {
    heading: `"Orbitron", sans-serif`,
    primary: `"Montserrat", sans-serif`,
  },
  fontSize: {
    h1: "4.209rem",
    h2: "3.157rem",
    h3: "2.369rem",
    h4: "1.777rem",
    h5: "1.333rem",
    h6: "1rem",
    subtitle1: "1rem",
    subtitle2: "0.833rem",
    body1: "1rem",
    body2: "0.833rem",
  },
  radius: {
    s: "0.25rem",
    m: "0.5rem",
    l: "0.75rem",
  },
  breakpoints: {
    s: "only screen and (max-width: 37.5rem)",
    m: "only screen and (max-width: 52.5rem)",
    l: "only screen and (max-width: 62rem)",
  },
};
// Dark Theme
export const darkTheme = {
  title: "Dark",
  primary: `#0c9468`,
  secondary: `#000`,
  textPrimary: `#fff`,
  textSecondary: `#F9F9F9`,
  bgColor: `linear-gradient(
    344deg,
    rgba(6, 6, 6, 1) 0%,
    rgba(20, 20, 20, 1) 100%
  )`,
  ...styles,
};

// Light Theme
export const lightTheme = {
  title: "Light",
  primary: `#0c9468`,
  secondary: `#fff`,
  textPrimary: `#000`,
  textSecondary: `#fff`,
  bgColor: `linear-gradient(344deg, #FCFCFC 0%, #F9F9F9 100%);`,
  ...styles,
};

// TruCircle Theme
export const truTheme = {
  title: "tricircle",
  primary: `#14498F`,
  secondary: `#14498F`,
  textPrimary: `#fff`,
  textSecondary: `#89C4E5`,
  bgColor: `linear-gradient(180deg, #2D7EC1 0%, #14488E 100%);)`,
  ...styles,
};

// Branger Theme
export const branTheme = {
  title: "Branger",
  primary: `#14498F`,
  secondary: `#14498F`,
  textPrimary: `#fff`,
  textSecondary: `#89C4E5`,
  bgColor: `linear-gradient(180deg, #0C9468 0%, #055B37 100%)`,
  ...styles,
};

// Travel Theme
export const travelTheme = {
  title: "Branger",
  primary: `#14498F`,
  secondary: `#14498F`,
  textPrimary: `#fff`,
  textSecondary: `#89C4E5`,
  bgColor: `linear-gradient(180deg, #EF9E15 0%, #DB6509 100%)`,
  ...styles,
};
