/** @format */

import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
