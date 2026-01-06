// // // import { useState, useEffect } from "react";
// // // function App() {
// // //   const [count, setCount] = useState(0);
// // //   const [show, setShow] = useState(true);
// // //   useEffect(() => {
// // //     console.log("Mounted Component");
// // //     return (() => {
// // //       console.log("Unmounted Component");
// // //     });
// // //   }), [];
// // //   useEffect(() => {
// // //     console.log("Count Updated:", count);
// // //   }, [count]);
// // //   return (
// // //     <div style={{ padding: "20px" }}>
// // //       <h2>React Lifestyle Sample</h2>
// // //       <button onClick={() => setCount(count + 1)}>
// // //         Count Increment
// // //       </button>
// // //       <p>Count:{count}</p>
// // //       <button
// // //         onClick={() => setShow(!show)}>
// // //         Component Toggle
// // //       </button>
// // //       {show && <p>Component is Visible</p>}
// // //     </div>
// // //   );

// // // }
// // // export default App;

// // import { useEffect, useState } from "react";

// // export default function App() {
// //   const [time, setTime] = useState(0);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setTime(t => t + 1);
// //     }, 1000);

// //     return () => clearInterval(timer);
// //   }, []);

// //   return <h2>Seconds: {time}</h2>;
// // }

// import { useEffect, useState } from "react";

// export default function App() {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return <h2>Window Width: {width}</h2>;
// }

import { useEffect, useState } from "react";

 function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  useEffect(() => {
    console.log("Count Updated");
  }, [count]);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <input
        placeholder="Change Title"
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}
export default App;

