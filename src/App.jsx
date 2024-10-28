// import { UserProfile } from "./components/UserProfile";
import { UserDetails } from "./components/UserDetails";

export default function App() {
  const mockUsers = [
    {
      id: 1,
      username: "Mark",
      email: "asdfghj@gmail.com",
    },
    {
      id: 2,
      username: "Jane",
      email: "qwertyui@gmail.com",
    },
    {
      id: 3,
      username: "Mark",
      email: "asdfghj@gmail.com",
    },
    {
      id: 4,
      username: "Jane",
      email: "qwertyui@gmail.com",
    },
  ];

  return (
    <>
      {mockUsers.map((user) => {
        return <UserDetails key={user.id} user={user} />;
      })}
    </>
  );
}
