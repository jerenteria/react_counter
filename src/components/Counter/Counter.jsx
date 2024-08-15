import { useState, memo, useCallback, useMemo } from 'react';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';

function isPrime(number) {
  log(
    'Calculating if is prime number',
    2,
    'other'
  );
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// memo() compares prop values(if old prop val and new prop val are equal, Counter function will not execute; only executes if initialCount changes)
// initalCount is from App.jsx which is the new value the user set in ConfigureCounter.jsx 
const Counter = memo(function Counter({ initialCount }) {
  log('<Counter /> rendered', 1);
  // useMemo is used when you want to render regular functions like isPrime above making calculations for prime numbers
  // here since isPrime was being executed every time we pressed the increment/decrement button since its inside the counter function
  // now it executs when the item in the depency array changes which is the intial count
  // now isPrime will only execute when the intialCount value changes
  const initialCountIsPrime = useMemo(() => isPrime(initialCount), [initialCount]);

  const [counter, setCounter] = useState(initialCount);

  // handleDecrement and handleIncrement will rerender when clicked bc theyre nested in Counter function
  // which will render whenever the value inputted changes causing these functions to rerender as well(will become new object in memory than last execution)
  const handleDecrement = useCallback(function handleDecrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }, []); 

  const handleIncrement = useCallback(function handleIncrement() {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It{' '}
        <strong>is {initialCountIsPrime ? 'a' : 'not a'}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
    </section>
  );
})

export default Counter;