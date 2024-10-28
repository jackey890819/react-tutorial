import LoginForm from "./components/LoginForm";
export default function App() {
  window.addEventListener('resize', (event) => {
    console.log(`window's width: ${window.innerWidth}px.`);
    console.log(`window's height: ${window.innerHeight}px.`);
  })
  return (
    <div>
      <LoginForm />
    </div>
  );
}
