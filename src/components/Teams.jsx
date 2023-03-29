import useTeamNames from "../hooks/useTeamNames";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Loading from "./Loading";

export default function Teams() {
  const { loading, response: teamNames } = useTeamNames();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container two-column">
      <SideBar title="Teams" list={teamNames} />
      <Outlet />
    </div>
  );
}
