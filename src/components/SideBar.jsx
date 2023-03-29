import { Link, useLocation } from "react-router-dom";
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
    <Link
      style={{ ...styles }}
      to={{
        pathname: to,
        search: location.search,
      }}
    >
      {children}
    </Link>
  );
}

export default function SideBar({ title, list }) {
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
