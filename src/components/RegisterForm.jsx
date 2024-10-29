import { useState } from "react";

export default function RegisterForm() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [displayName, setDisplayName] = useState("");
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    displayName: "",
  });
  const isDisabled =
    !formFields.username || !formFields.password || !formFields.displayName;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={formFields.username}
          onChange={(e) => {
            setFormFields((prev) => ({ ...prev, username: e.target.value }));
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formFields.password}
          onChange={(e) => {
            setFormFields((prev) => ({ ...prev, password: e.target.value }));
          }}
        />
      </div>
      <div>
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          id="displayName"
          value={formFields.displayName}
          onChange={(e) => {
            setFormFields((prev) => ({ ...prev, displayName: e.target.value }));
          }}
        />
      </div>
      <div>
        <span>Username: {formFields.username}</span>
      </div>
      <div>
        <span>Password: {formFields.password}</span>
      </div>
      <div>
        <span>DisplayName: {formFields.displayName}</span>
      </div>
      <button disabled={isDisabled}>Sign Up</button>
    </form>
  );
}
