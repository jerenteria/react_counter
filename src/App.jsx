import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  // takes in the number that the user inputs we called it newCount, used to update chosenCount with new value
  function handleSetCount(newCount) {
    // sets the number that the user inputs(named newCount) as state in setChosenCount, if there is already a value there set it to the user inputted value
    setChosenCount(newCount);
  }

  return (
    <>
      <Header />

      <main>
        {/* set the prop using "onSet"(whatever number user inputs) the value of this prop is in handleSetCount function called "newCount", we are passing this function 
        called "handleSetCount" using "onSet" prop to ConfigureCounter.jsx
        does not update the state with every key stroke like in ConfigureCounter.jsx bc state changes and reexecutions of child components dont trigger parent component executions
    */}
        <ConfigureCounter onSet={handleSetCount} />
        {/* Counter.jsx takes in the value inputted from user as initialCount and inputs it to the chosenCount state above */}
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
