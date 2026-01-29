import { useAuth } from "../../context/AuthContext";

export const HomePage = () => {
  const { user } = useAuth();
  
  return (
    <>
      <h1>Home Page, {user?.username}</h1>
    </>
  );
};
