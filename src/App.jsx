import RegisterForm from "./components/RegisterForm";

export default function App() {
  window.addEventListener("resize", (event) => {
    console.log(`window's width: ${window.innerWidth}px.`);
    console.log(`window's height: ${window.innerHeight}px.`);
  });

  return (
    <div>
      <RegisterForm />
    </div>
  );
}
