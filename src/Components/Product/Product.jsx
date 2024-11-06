import PropType from "prop-types";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { product_title, price, product_image } = product;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/ProductDetails/${product.product_id}`);
  };

  return (
    <div className="p-4 bg-white rounded-xl text-center md:text-left">
      <img
        src={product_image}
        alt={product_title}
        className="h-[250px] rounded-xl mx-auto mb-5"
      />
      <h1 className="font-semibold text-2xl mb-2">{product_title}</h1>
      <h2 className="text-[#09080F99] text-lg font-medium mb-3">
        Price: ${price}
      </h2>
      <button
        onClick={handleClick}
        className="px-4 py-2 text-[#9538E2] border-2 border-[#9538E2] hover:bg-[#9538E2] hover:text-white font-semibold rounded-xl"
      >
        View Details
      </button>
    </div>
  );
};

Product.propTypes = {
  product: PropType.object,
};
export default Product;
