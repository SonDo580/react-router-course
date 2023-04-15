import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./NavBar";
import Loading from "./Loading";

const Article = React.lazy(() => import("./Article"));
const Articles = React.lazy(() => import("./Articles"));
const Home = React.lazy(() => import("./Home"));
const Player = React.lazy(() => import("./Player"));
const Players = React.lazy(() => import("./Players"));
const Team = React.lazy(() => import("./Team"));
const TeamPage = React.lazy(() => import("./TeamPage"));
const Teams = React.lazy(() => import("./Teams"));

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />

        <Suspense fallback={<Loading />}>
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
                element={
                  <div className="sidebar-instruction">Select a team</div>
                }
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
        </Suspense>
      </div>
    </BrowserRouter>
  );
}
