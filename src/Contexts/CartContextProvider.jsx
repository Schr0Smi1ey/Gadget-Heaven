import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext";
import { toast, Flip } from "react-toastify";

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(0);
  const [wishItem, setWishItem] = useState(0);
  const [cartItemList, setCartItemList] = useState([]);
  const [wishItemList, setWishItemList] = useState([]);
  const [cartItemPrice, setCartItemPrice] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    setCartItem(cartItemList.reduce((acc, item) => acc + item.cartCount, 0));
    setCartItemPrice(
      cartItemList.reduce((acc, item) => acc + item.price * item.cartCount, 0)
    );
  }, [cartItemList]);

  useEffect(() => {
    setWishItem(wishItemList.length);
  }, [wishItemList]);

  useEffect(() => {
    setCartItemList(cartItemList);
  }, [cartItemList]);

  const handleCartItemPrice = (price) => {
    const newCartItemPrice = cartItemPrice + price;
    setCartItemPrice(newCartItemPrice);
  };
  const handleCartItemListOnPayment = () => {
    setCartItemList([]);
    setCartItem(0);
    setCartItemPrice(0);
  };
  const handleCartItemList = (item) => {
    if (item.availability === false) {
      Toast("Product is out of stock", "error");
      return;
    } else {
      handleCartItemPrice(item.price);
      Toast("Item added to Cart", "success");
    }
    const productIndex = cartItemList.findIndex(
      (cartItem) => cartItem.product_id === item.product_id
    );

    if (productIndex >= 0) {
      const updatedCartList = [...cartItemList];
      updatedCartList[productIndex] = {
        ...updatedCartList[productIndex],
        cartCount: updatedCartList[productIndex].cartCount + 1,
      };
      setCartItemList(updatedCartList);
    } else {
      setCartItemList([...cartItemList, { ...item, cartCount: 1 }]);
    }
  };

  const handleWishItemList = (item) => {
    const updatedItem = { ...item, wished: true };
    products.map((product) => {
      if (product.product_id === item.product_id) {
        product.wished = true;
      }
    });
    setWishItemList([...wishItemList, updatedItem]);
    Toast("Item added to Wishlist", "success");
  };

  const Toast = (message, type) => {
    toast[type](message, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
      toastClassName: "rounded-lg bg-[#f5f5f5] text-black w-96",
      bodyClassName: "font-medium text-lg",
    });
  };
  return (
    <CartContext.Provider
      value={{
        cartItem,
        wishItem,
        cartItemPrice,
        handleCartItemPrice,
        cartItemList,
        wishItemList,
        handleCartItemList,
        handleWishItemList,
        setCartItemList,
        setWishItemList,
        Toast,
        handleCartItemListOnPayment,
        products,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
