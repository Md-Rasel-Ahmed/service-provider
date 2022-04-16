import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Service></Service>
    </div>
  );
}

export default App;
