import PropType from "prop-types";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Contexts/CartContext";
import ReactStars from "react-rating-stars-component";

const ProductDetailsCard = ({ product }) => {
  const { handleCartItemList, handleWishItemList, products } =
    useContext(CartContext);

  const {
    product_id,
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating: initialRating,
  } = product;

  const [rating, setRating] = useState(initialRating);

  const [addedToWish, setAddedToWish] = useState(() => {
    const tempProduct = products.find((item) => item.product_id === product_id);
    return tempProduct?.wished || false;
  });

  useEffect(() => {
    const tempProduct = products.find((item) => item.product_id === product_id);
    setAddedToWish(tempProduct?.wished || false);
  }, [products, product_id]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleAddToCart = () => {
    handleCartItemList(product);
  };
  const handleAddToWish = () => {
    const tempProduct = products.find((item) => item.product_id === product_id);
    if (!tempProduct?.wished) {
      handleWishItemList({ ...product, wished: true });
      setAddedToWish(true);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 p-4 bg-white rounded-xl max-w-5xl mx-auto">
      <div className="flex justify-center items-center md:w-[40%] mb-2">
        <img
          src={product_image}
          alt={product_title}
          className="w-3/4 rounded-xl"
        />
      </div>
      <div className="space-y-3 text-center md:text-left">
        <h1 className="font-bold text-2xl">{product_title}</h1>
        <h1 className="font-semibold text-xl text-[#09080FCC]">
          Price: ${price}
        </h1>
        <button
          className={`px-3 py-1 border-2 font-medium rounded-full ${
            availability
              ? "border-green-400 text-green-600 bg-green-200"
              : "border-red-400 bg-red-200 text-red-600"
          }`}
        >
          {availability ? "In Stock" : "Out of Stock"}
        </button>
        <p className="text-[#09080F99] text-lg mb-1">{description}</p>
        <div className="text-[#09080F99] text-left mx-auto w-[90%] md:w-full">
          <h1 className="text-center md:text-left mb-2 text-lg font-bold text-black">
            Specification:
          </h1>
          <ul className="w-[90%] sm:w-[70%] mx-auto flex justify-center flex-col md:mx-0">
            {specification.map((spec, index) => (
              <li key={index} className="list-disc">
                {spec}
              </li>
            ))}
          </ul>
        </div>
        <h1 className="font-bold text-lg mb-1 text-center md:text-left">
          Rating:
        </h1>
        <div className="flex gap-3 items-center justify-center md:justify-start">
          <ReactStars
            count={5}
            value={rating}
            size={24}
            edit={true}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
            onChange={handleRatingChange}
          />
          <h1 className="bg-[#FFD700] rounded-2xl px-3 font-medium">
            {rating}
          </h1>
        </div>
        <div className="flex gap-2 items-center justify-center md:justify-start">
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-[#9538E2] px-3 py-1 text-white rounded-xl font-bold"
          >
            Add to Cart
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
            >
              <path
                d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={handleAddToWish}
            className={`p-2 rounded-full border-2 border-gray-300 ${
              addedToWish ? "bg-[#9538E2] cursor-not-allowed" : "bg-gray-300"
            }`}
            disabled={addedToWish}
          >
            <svg
              fill={addedToWish ? "white" : "black"}
              height="20"
              width="20"
              viewBox="0 0 512 512"
              className="icon-heart"
            >
              <path d="M384,29.8c-64,0-96.2,27.6-128,64c-31.8-36.4-64-64-128-64S0,72.5,0,200.5c0,64,64,192,256,298.7 c192-106.7,256-234.7,256-298.7C512,72.5,448,29.8,384,29.8z M256,450C81.7,346.6,42.7,235.7,42.7,200.5c0-58.4,14.8-128,85.3-128 c44.8,0,66.6,15.9,95.9,49.4l32.1,35.9l32.1-35.9c29.3-33.5,51.1-49.4,95.9-49.4c70.5,0,85.3,69.6,85.3,128 C469.3,235.7,430.3,346.6,256,450z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

ProductDetailsCard.propTypes = {
  product: PropType.object.isRequired,
};

export default ProductDetailsCard;
