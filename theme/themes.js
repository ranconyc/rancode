const styles = {
  fonts: {
    heading: `"Orbitron", sans-serif`,
    primary: `"Montserrat", sans-serif`,
  },
};
// Dark Theme
export const darkTheme = {
  title: "Dark",
  primary: `#0c9468`,
  secondary: ``,
  text: `#fff`,
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
  secondary: `#000`,
  text: `#000`,
  bgColor: `linear-gradient(344deg, #FCFCFC 0%, #F9F9F9 100%);`,
  ...styles,
};
