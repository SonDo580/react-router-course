import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";
import { slugify } from "../utils";

function CustomLink({ to, children }) {
  const location = useLocation();
  const playerId = location.pathname.split("/")[2];
  const match = playerId === to;

  const styles = match
    ? {
        fontWeight: 900,
        color: "var(--white)",
      }
    : {};

  return (
    <Link style={{ ...styles }} to={to}>
      {children}
    </Link>
  );
}

function SideBar({ title, list }) {
  return (
    <div>
      <h3 className="header">{title}</h3>
      <ul className="sidebar-list">
        {list.map((item) => (
          <li key={item}>
            <CustomLink to={`${slugify(item)}`}>
              {item.toUpperCase()}
            </CustomLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Players() {
  const [searchParams] = useSearchParams();

  const teamId = searchParams.get("teamId");

  const { response: names, loading } = usePlayerNames(teamId);

  if (loading) {
    return null;
  }

  return (
    <div className="container two-column">
      <SideBar title="Players" list={names} />
      <Outlet />
    </div>
  );
}
