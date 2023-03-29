import { useParams, Outlet } from "react-router-dom";
import useTeamsArticles from "../hooks/useTeamsArticles";
import SideBar from "./SideBar";

export default function Articles() {
  const { teamId } = useParams();

  const { loading, response: articles } = useTeamsArticles(teamId);

  if (loading) {
    return <p>LOADING...</p>;
  }

  return (
    <div className="container two-column">
      <SideBar
        title="Articles"
        list={articles.map((article) => article.title)}
      />

      <Outlet />
    </div>
  );
}
