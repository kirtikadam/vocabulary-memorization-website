import { CssBaseline, ThemeProvider } from '@mui/material';
import { AddLanguage } from './components/AddLanguage';
import { theme } from './styles/AppTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <AddLanguage />
      </div>
    </ThemeProvider>
  );
}

export default App;
