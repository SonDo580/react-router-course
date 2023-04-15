import React, { Suspense } from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";

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

function Routes() {
  return useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/players",
      element: <Players />,
      children: [
        {
          path: "",
          element: <div className="sidebar-instruction">Select a player</div>,
        },
        { path: ":playerId", element: <Player /> },
      ],
    },
    {
      path: "/teams",
      element: <Teams />,
      children: [
        {
          path: "",
          element: <div className="sidebar-instruction">Select a team</div>,
        },
        { path: ":teamId", element: <Team /> },
      ],
    },
    {
      path: "/:teamId",
      element: <TeamPage />,
    },
    {
      path: "/:teamId/articles",
      element: <Articles />,
      children: [
        {
          path: "",
          element: <div className="sidebar-instruction">Select an article</div>,
        },
        { path: ":articleId", element: <Article /> },
      ],
    },
  ]);
}

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />

        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}
