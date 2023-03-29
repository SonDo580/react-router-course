import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Player from "./Player";
import Players from "./Players";
import Team from "./Team";
import TeamPage from "./TeamPage";
import Teams from "./Teams";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/players" element={<Players />}>
            <Route path=":playerId" element={<Player />} />
          </Route>
          <Route path="/teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
          </Route>
          <Route path="/:teamId" element={<TeamPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
