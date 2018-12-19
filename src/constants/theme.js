import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#0E79B2', light: '#118AB2' },
    secondary: { main: '#06D6A0' }
  },
  common: {
    black: '#191923',
    white: '#FBFEF9'
  }
});

export default theme;
