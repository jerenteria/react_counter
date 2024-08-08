import { useState } from "react";

// function takes in onSet from App.jsx by destructuring(this acutally means we are taking in the handleSetCount function in App.jsx)
export default function ConfigureCounter({ onSet }) {
 // state changes on every key stroke(good to keep in seperate component so that the whole app doesnt refresh on every key stroke)
 // handles its own state for the input field
  const [enteredNumber, setEnteredNumber] = useState(0);

  // keeps track of the change in value with every key stroke
  function handleChange(event) {
    setEnteredNumber(+event.target.value);
  }

  // sets the enteredNumber by calling onSet(handleSetCount function in App.jsx) with the current enteredNumber when you click the "set" button
  function handleSetClick() {
    onSet(enteredNumber);
    setEnteredNumber(0);
  }

  return (
    <main>
      <section id="configure-counter">
        <h2>Set Counter</h2>
        <input type="number" onChange={handleChange} value={enteredNumber} />
        <button onClick={handleSetClick}>Set</button>
      </section>
    </main>
  );
}
