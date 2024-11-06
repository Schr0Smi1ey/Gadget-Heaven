import { CartContext } from "../../Contexts/CartContext";
import { useContext, useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = () => {
  const {
    wishItemList,
    setWishItemList,
    handleCartItemPrice,
    handleCartItemList,
    products,
  } = useContext(CartContext);
  const [selectedItem, setSelectedItem] = useState(wishItemList);
  useEffect(() => {
    setSelectedItem(wishItemList || []);
  }, [wishItemList]);

  const removeFromWish = (product) => {
    const updatedCartList = wishItemList.filter((item) => item !== product);
    products.map((item) => {
      if (item.product_id === product.product_id) {
        item.wished = false;
      }
    });
    setWishItemList(updatedCartList);
  };
  const handleAddToCart = (item) => {
    handleCartItemPrice(item.price);
    handleCartItemList(item);
  };

  return (
    <div className="my-20 max-w-5xl mx-auto container">
      <div className="text-center">
        <h1 className="font-bold text-4xl">WishList</h1>
      </div>
      {selectedItem.length == 0 ? (
        <div className="text-center mt-10 border-2 border-gray-200 rounded-xl p-5">
          <h1 className="text-3xl text-red-500 font-bold">
            No items in WishList
          </h1>
        </div>
      ) : (
        <div className="mt-10">
          {selectedItem.map((item) => {
            const {
              product_id,
              product_image,
              product_title,
              description,
              price,
            } = item;
            return (
              <div
                key={product_id}
                className="flex flex-col md:flex-row justify-around items-center max-w-5xl mx-auto border-2 border-gray-300 rounded-xl mb-5 p-4"
              >
                <div className="md:w-1/4 mr-5 flex justify-center items-center mb-4 md:mb-0">
                  <img
                    src={product_image}
                    alt=""
                    className="h-[150px] rounded-xl"
                  />
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h1 className="font-semibold text-2xl mb-3">
                    {product_title}
                  </h1>
                  <p className="w-[80%] md:w-full mx-auto text-lg text-[#09080F99] mb-3">
                    {description}
                  </p>
                  <h1 className="font-semibold text-lg text-[#09080FCC] mb-3">
                    Price: ${price}
                  </h1>
                  <div className="flex justify-center md:justify-start mb-3 md:mb-0">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="flex items-center gap-2 bg-[#9538E2] px-3 py-1 text-white rounded-xl font-bold"
                    >
                      Add to Cart
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => removeFromWish(item)}
                    className="text-3xl text-red-600"
                  >
                    <RiDeleteBin5Line />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cart;
