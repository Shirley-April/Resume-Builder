import { createTheme } from "@mui/material/styles";
import MuiButton from "./MuiButton";
import colors from "./colors";
import { green, orange } from "@mui/material/colors";

const theme = createTheme({
  // palette: {
  //     type: "light",
  //   },
  //   typography: {
  //     fontFamily: ["Roboto", "sans-serif"].join(","), // to be discussed
  //   },
  // palette: {
  //   primary: {
  //     main: green[500],
  //   },
  // },
  colors,
  components: {MuiButton},
});

export default theme;
