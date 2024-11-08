// src/App.tsx
import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import ArtistPage from "./components/artist/artist-page";
import { Route, Switch } from "wouter";
import RoomView from "./components/home/room-view";
import { Header } from "./components/home/header";

const AppContent: React.FC = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={"bg-neutral-900 h-full w-full " + (isDarkMode ? "dark" : "")}>
      <Header />
      <Switch>
        <Route path="/" component={RoomView} />
        <Route path="/artist" component={ArtistPage} />

        {/* Default route in a switch */}
        <Route>404: No such page!</Route>
      </Switch>
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
