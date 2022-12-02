import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddLanguage } from './components/Add/AddLanguage';
import { TranslateLanguage } from './components/Translate/TranslateLanguage';
import { theme } from './styles/AppTheme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AddLanguage />} />
            <Route path="translate" element={<TranslateLanguage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
