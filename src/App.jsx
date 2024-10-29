import { useState } from "react";
import { UserDetails } from "./components/UserDetails";

export default function App() {
  const [addUserForm, setAddUserForm] = useState({
    username: "",
    email: "",
  });
  const [counter, setCounter] = useState(2);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "mark",
      email: "mark@gmail.com",
    },
    {
      id: 2,
      username: "mike",
      email: "mike@gmail.com",
    },
  ]);

  return (
    <div>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          // console.log(`${addUserForm.username} ${addUserForm.email}`);
          const nuwUser = {
            id: counter + 1,
            username: addUserForm.username,
            email: addUserForm.email,
          };
          setUsers((prev) => [...prev, nuwUser]);
          setCounter(counter + 1);
        }}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={addUserForm.username}
              onChange={(e) => {
                setAddUserForm((prev) => ({
                  ...prev,
                  username: e.target.value,
                }));
              }}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={addUserForm.email}
              onChange={(e) => {
                setAddUserForm((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
            />
          </div>
          <button>Add User</button>
        </form>
      </div>
      <br />
      {users.map((user) => (
        <UserDetails key={user.id} user={user} setUsers={setUsers} />
      ))}
    </div>
  );
}
