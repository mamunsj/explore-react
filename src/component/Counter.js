// import React, { Component } from "react";

import { useState } from "react";

// export default class Counter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       counter: 0,
//     };
//   }
//   increment() {
//     this.setState({
//       counter: this.state.counter + 4,
//     });
//   }
//   decrement() {
//     this.setState({
//       counter: this.state.counter - 2,
//     });
//   }

//   render() {
//     return (
//       <div className="counter">
//         <h2>Counter value is : {this.state.counter}</h2>
//         <button onClick={() => this.increment()}>Increment</button>
//         <button onClick={() => this.decrement()}>decrement</button>
//       </div>
//     );
//   }
// }

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((preVal) => preVal + 4);
  };
  const decrement = () => {
    setCount((preVal) => preVal - 3);
  };
  return (
    <div className="counter">
      <h2> Counter value is : {count} </h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
