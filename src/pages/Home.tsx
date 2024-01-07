import { useAuth } from "../context/Auth";

export default function Home() {
  const { user } = useAuth();

  return (
    <div>
      <h1>{user.username}</h1>
    </div>
  );
}
