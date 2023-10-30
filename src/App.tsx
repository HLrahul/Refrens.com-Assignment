import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import classes from "./App.module.css";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import EpisodesPage from "./pages/EpisodesPage";
import LocationsPage from "./pages/LocationsPage";
import CharactersPage from "./pages/CharactersPage";

function App() {
  return (
    <div className={classes.app}>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
