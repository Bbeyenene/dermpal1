import { createMuiTheme } from "@material-ui/core/styles";


// const font = "'Belleza', sans-serif";

const theme = createMuiTheme({
  
  palette: {
    primary: {
      main: "#CDC2D6",
    },

    secondary: {
      main: "#CDC2D6",
      contrastText: "#2D3142"
    },
  },

  typography: {
   
    h1: {
      fontFamily: "Belleza",
      fontSize: 25,
    },

    h2: {
      fontFamily: 'Montserrat',
      fontSize: 16,
    },
 
 
  },
});

export default theme;
