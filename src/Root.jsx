import { Outlet } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { CartProvider } from "../src/Contexts/CartContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <div className="container mx-auto">
      <CartProvider>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </CartProvider>
      <ToastContainer />
    </div>
  );
};

export default Root;
