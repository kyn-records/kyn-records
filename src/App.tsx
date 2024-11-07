// src/App.tsx
import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import ArtistPage from './components/ArtistPage';


const AppContent: React.FC = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <ArtistPage />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
