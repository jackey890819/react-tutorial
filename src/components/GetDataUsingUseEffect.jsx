import { useState, useEffect } from "react";

export default function GetDataUsingUseEffect() {
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
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: "GET",
            signal: controller.signal,
          },
        );
        const json = await response.json();
        console.log(json);
        console.log(controller.signal);
        return json;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
    // clean up
    return () => {
      controller.abort();
      console.log(controller.signal);
    };
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
