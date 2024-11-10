import { useState } from "react";
import Cart from "../Cart/Cart";
import Wish from "../Wish/Wish";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const [cartActive, setCartActive] = useState(true);
  const [wishActive, setWishActive] = useState(false);

  const location = useLocation();
  const { active } = location.state || { active: "cart" };
  useEffect(() => {
    document.title = "Dashborad | Gadget Heaven";
  }, []);
  const handleCartActive = () => {
    setCartActive(true);
    setWishActive(false);
  };
  const handleWishlistActive = () => {
    setCartActive(false);
    setWishActive(true);
  };
  useEffect(() => {
    if (active === "cart") {
      handleCartActive();
    } else if (active === "wish") {
      handleWishlistActive();
    }
  }, [active]);
  return (
    <div className="container mx-auto text-white">
      <div className="bg-[#9538E2] relative py-5">
       
        <div className="text-center mb-5">
          <h1 className="font-bold text-3xl mb-3">Dashboard</h1>
          <p className="text-gray-300 w-[90%] md:w-1/2 mx-auto">
            Get insights and manage your favorite gadgets with ease. Stay
            updated on the latest additions to enhance your tech experience!
          </p>
        </div>
        <div className="flex w-fit mx-auto gap-5">
          <button
            onClick={handleCartActive}
            className={`px-3 py-1 ${
              cartActive
                ? "bg-white text-[#9538E2] font-bold"
                : "bg-none font-normal text-white border-2 border-white"
            }  rounded-lg text-lg`}
          >
            Cart
          </button>
          <button
            onClick={handleWishlistActive}
            className={`px-3 py-1 ${
              wishActive
                ? "bg-white text-[#9538E2] font-bold"
                : "bg-none font-normal text-white border-2 border-white"
            } rounded-lg text-lg`}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div className="text-black">
        {cartActive ? <Cart></Cart> : <Wish></Wish>}
      </div>
    </div>
  );
};

export default Dashboard;
