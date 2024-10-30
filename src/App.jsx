import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState({
    value: 0,
  });

  useEffect(() => {
    console.log("Rendering...");
    document.title = "React Tutorial " + counter;
    return () => {
      console.log("cleaning...");
    };
  }, [sync, counter]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: "GET",
          },
        );
        const json = await response.json();
        console.log(json);
        return json;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUsers();
  }, []);

  function doSync() {
    console.log(sync);
    setSync((current) => ({ ...current, value: current.value + 1 }));
    console.log(sync);
  }

  return (
    <div>
      <div>You clicked the button {counter} times</div>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Click Me
      </button>
      <button onClick={() => doSync()}>Sync</button>
    </div>
  );
}
