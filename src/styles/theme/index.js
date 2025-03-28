import { createTheme } from "@mui/material";

export const Colors = {
  color1: "#072408",
  color2: "#113C10",
  color3: "#1D5618",
  color4: "#29752C",
  color5: "#229E1F",
  color6: "#49B937",
  color7: "#FFDD2E",
  color8: "#F38A00",

  white: "#FFF",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.color1,
    },
    //     secondary: {
    //       main: "Colors.",
    //     },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
  typography: {
    fontFamily: ' "Readex Pro", sans-serif',
  },
});

export default theme;
