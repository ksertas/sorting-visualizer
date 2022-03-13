import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainLayout from './components/MainLayout';
import Navbar from './components/Navbar';

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
      <div className='bg-blue-20 dark:bg-black h-screen'>
        <Navbar />
        <MainLayout />
      </div>
    </ThemeProvider>
  );
}
