import styles from "./components/style.module.css"

export default function App() {
  const isAuthenticated = true;

  return (
    <div>
      <h1
        className={isAuthenticated ? styles.test : undefined}
        style={{ color: isAuthenticated ? "green" : "red" }}
      >{isAuthenticated ? "Welcome, User!" :"You are not logged in." }</h1>
    </div>
  );
}
