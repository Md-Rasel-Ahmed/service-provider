import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Allpages from "./components/AllPages/Allpages";
import Singup from "./components/Singup/Singup";
import Checkout from "./components/Checkout/Checkout";
import Thakyou from "./components/Thakyou/Thakyou";
import { ToastContainer } from "react-toastify";
import RequirAuth from "./components/RequirAuth/RequirAuth";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Allpages></Allpages>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/singup" element={<Singup></Singup>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route
          path="/thankyou"
          element={
            <RequirAuth>
              <Thakyou></Thakyou>
            </RequirAuth>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
