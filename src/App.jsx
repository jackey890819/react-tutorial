import { UserProfile } from "./components/UserProfile";

export default function App() {
  const callMe = () => {
    console.log("call me...");
  };
  return (
    <>
      <h1>Root Component</h1>
      <UserProfile
        username="Mark"
        age={24}
        isLoggedIn={false}
        favoriteFoods={[
          {
            name: "Sushi",
            id: "Sushi",
          },
          {
            name: "Pizza",
            id: "Pizza",
          },
        ]}
        callMe={callMe}
      />
    </>
  );
}
