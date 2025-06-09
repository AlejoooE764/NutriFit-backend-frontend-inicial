// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

 import React from "react";
 import PlanesAlimentacion from "./components/PlanesAlimentacion.js";

 function App() {
   return (
     <div className="App">
       <PlanesAlimentacion />
     </div>
   );
 }

export default App; 


// import PlanesAlimentacion from "./components/PlanesAlimentacion"; // ✅ correcto

// function App() {
//   return (
//     <div>
//       <PlanesAlimentacion />
//     </div>
//   );
// }

// export default App;

