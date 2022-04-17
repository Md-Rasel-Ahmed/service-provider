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
import Blog from "./components/Blog/Blog";
import RequirAuth from "./components/RequirAuth/RequirAuth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import About from "./components/About/About";
import ResetPass from "./components/ResetPass";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Allpages></Allpages>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/singup" element={<Singup></Singup>}></Route>
          <Route
            path="/checkout"
            element={
              <RequirAuth>
                <Checkout></Checkout>
              </RequirAuth>
            }
          ></Route>
          <Route path="/thankyou" element={<Thakyou></Thakyou>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/reset" element={<ResetPass></ResetPass>}></Route>
        </Routes>

        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
