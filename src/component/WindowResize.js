// import React, { Component } from "react";

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

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount((preVal) => preVal + 4);
//   };
//   const decrement = () => {
//     setCount((preVal) => preVal - 3);
//   };
//   return (
//     <div className="counter">
//       <h2> Counter value is : {count} </h2>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>decrement</button>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// export default function WindowResize() {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [windowHeight, setWindowHeight] = useState(window.innerHeight);
//   const handlaResize = () => {
//     setWindowWidth(window.innerWidth);
//     setWindowHeight(window.innerHeight);
//   };
//   useEffect(() => {
//     window.addEventListener("resize", handlaResize);
//   }, []);
//   return (
//     <div>
//       {windowWidth} {windowHeight}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
export default function WindowResize() {
  const [contentType, setContentType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${contentType}`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        console.log(items);
      });
  }, [contentType]);
  return (
    <div className="data">
      <button onClick={() => setContentType("Posts")}>Posts</button>
      <button onClick={() => setContentType("Users")}>Users</button>
      <button onClick={() => setContentType("Comments")}>Comments</button>
      <button onClick={() => setContentType("Photos")}>Photos</button>
      <h2>{contentType}</h2>

      {items.map((item) => {
        return (
          <div className="item">
            <p> Id: {item.id}</p>
            <p> Email: {item.email}</p>
            <p> Body : {item.body}</p>
            <p> Name : {item.name}</p>
            <p> url: {item.url}</p>
            <p> Title: {item.title}</p>
            <p> AlbumId: {item.albumId}</p>
          </div>
        );
      })}
    </div>
  );
}
