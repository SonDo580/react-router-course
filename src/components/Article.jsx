import { useParams } from "react-router-dom";
import useArticle from "../hooks/useArticle";
import Loading from "./Loading";

export default function Article() {
  const { teamId, articleId } = useParams();

  const { loading, response: article } = useArticle({ teamId, articleId });

  return (
    <div className="panel">
      {loading ? (
        <Loading />
      ) : (
        <article className="article">
          <h1 className="header">{article.title}</h1>
          <p>{article.body}</p>
        </article>
      )}
    </div>
  );
}
