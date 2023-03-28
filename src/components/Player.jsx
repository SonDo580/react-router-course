import { useParams } from "react-router-dom";
import usePlayer from "../hooks/usePlayer";

export default function Player() {
  const { playerId } = useParams();

  const { response: player, loading } = usePlayer(playerId);

  if (loading) {
    return null;
  }

  if (!player) {
    return null;
  }

  return <div className="panel">{JSON.stringify(player, null, 2)}</div>;
}
