import { useContext, useEffect } from "react";
import { CartContext } from "../../Contexts/CartContext";
import Chart from "./Chart";
import colours from "../../../public/assets/colours.png";

const Statistics = () => {
  const { cartItemList } = useContext(CartContext);
  useEffect(() => {
    document.title = "Statistics | Gadget Heaven";
  }, []);
  return (
    <div className="mb-10 container mx-auto">
      <div className="container mx-auto relative bg-[#9538E2]  py-10 text-white">
        <div className="hidden lg:flex absolute bottom-0 -right-[5%]">
          <img src={colours} alt="" className="opacity-40 w-[70%]" />
        </div>
        <div className="hidden lg:flex absolute bottom-0 -left-[2%]">
          <img
            src={colours}
            alt=""
            className="-rotate-180 w-[70%] opacity-40 hidden sm:flex"
          />
        </div>
        <div className="py-5">
          <div className="text-center mb-5">
            <h1 className="font-bold text-3xl mb-3">Statistics</h1>
            <p className="text-gray-300 w-1/2 mx-auto">
              Discover your top picks and see what’s adding value to your cart!
            </p>
          </div>
        </div>
      </div>
      <div>
        {cartItemList.length === 0 ? (
          <div className="text-center mt-10 border-2 border-gray-200 rounded-xl p-5">
            <h1 className="text-3xl text-red-500 font-bold">
              No items in Cart to show Statistics!
            </h1>
          </div>
        ) : (
          <Chart></Chart>
        )}
      </div>
    </div>
  );
};

export default Statistics;
