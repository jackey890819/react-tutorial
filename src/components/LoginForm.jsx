export default function LoginForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get("username");
        const password = formData.get("password");
        // 例子。非有效
        fetch("localhost:3001/api/login", {
          body: {
            username,
            password,
          },
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
      }}
    >
      <label htmlFor="username">Username</label>
      <br />
      <input
        type="text"
        id="username"
        name="username"
        onChange={(event) => {
          console.log(`${event.target.value}`);
        }}
      />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input
        type="password"
        id="password"
        name="password"
        onChange={(event) => {
          console.log(`${event.target.value}`);
        }}
      />
      <br />
      <button>Login</button>
    </form>
  );
}
