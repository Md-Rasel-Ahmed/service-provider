import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Allpages from "./components/AllPages/Allpages";
import Singup from "./components/Singup/Singup";
import Checkout from "./components/Checkout/Checkout";
import Thakyou from "./components/Thakyou/Thakyou";
import Blog from "./components/Blog/Blog";
import RequirAuth from "./components/RequirAuth/RequirAuth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import About from "./components/About/About";
import ResetPass from "./components/ResetPass";
import Notfound from "./components/Notfound/Notfound";
import { useEffect, useState } from "react";

function App() {
  const [services, setServices] = useState([]);
  const [clickService, setClickService] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const navigate = useNavigate();
  const buyBtn = (id) => {
    navigate("/checkout");
    let clikedServices = services.find((service) => service.id === id);
    setClickService(clikedServices);
  };
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/"
            element={<Allpages buyBtn={buyBtn}></Allpages>}
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/singup" element={<Singup></Singup>}></Route>
          <Route
            path="/checkout"
            element={
              <RequirAuth>
                <Checkout clickService={clickService}></Checkout>
              </RequirAuth>
            }
          ></Route>
          <Route path="/thankyou" element={<Thakyou></Thakyou>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/reset" element={<ResetPass></ResetPass>}></Route>
          <Route path="*" element={<Notfound></Notfound>}></Route>
        </Routes>

        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
