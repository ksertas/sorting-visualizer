import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import OptionsBar from './components/OptionsBar';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Source Sans Pro',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='h-screen bg-white dark:bg-black'>
        <Navbar />
        <OptionsBar />
      </div>
    </ThemeProvider>
  );
}
