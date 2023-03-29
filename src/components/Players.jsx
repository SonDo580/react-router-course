import { Outlet, useSearchParams } from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";
import Loading from "./Loading";
import SideBar from "./SideBar";

export default function Players() {
  const [searchParams] = useSearchParams();

  const teamId = searchParams.get("teamId");

  const { response: names, loading } = usePlayerNames(teamId);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container two-column">
      <SideBar title="Players" list={names} />
      <Outlet />
    </div>
  );
}
