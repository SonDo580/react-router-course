import useTeamNames from "../hooks/useTeamNames";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

export default function Teams() {
  const { loading, response: teamNames } = useTeamNames();

  if (loading) {
    return null;
  }

  return (
    <div className="container two-column">
      <SideBar title="Teams" list={teamNames} />
      <Outlet />
    </div>
  );
}
