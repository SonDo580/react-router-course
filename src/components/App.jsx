import { BrowserRouter, Route, Routes } from "react-router-dom";
import Article from "./Article";
import Articles from "./Articles";
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
            <Route
              path=""
              element={
                <div className="sidebar-instruction">Select a player</div>
              }
            />
          </Route>

          <Route path="/teams" element={<Teams />}>
            <Route path=":teamId" element={<Team />} />
            <Route
              path=""
              element={<div className="sidebar-instruction">Select a team</div>}
            />
          </Route>

          <Route path="/:teamId" element={<TeamPage />} />

          {/* No nested route here because TeamPage isn't in charge of rendering Articles */}
          <Route path="/:teamId/articles" element={<Articles />}>
            <Route path=":articleId" element={<Article />} />
            <Route
              path=""
              element={
                <div className="sidebar-instruction">Select an article</div>
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
