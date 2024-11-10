import PropType from "prop-types";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ProductDetails = () => {
  const product = useLoaderData();
  return (
    <div className="container mx-auto bg-[#fdfcfc]">
      <Helmet>
        <title>Gadget Heaven | {product.product_id}</title>
      </Helmet>
      <div className="text-center bg-[#9538E2] py-10 sm:h-[300px]">
        <h1 className="text-white font-bold text-3xl">Product Details</h1>
        <p className="text-white w-[90%] md:w-1/2 mx-auto mt-4 text-center">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="sm:-mt-24 lg:-mt-32 mb-20 shadow-lg py-4">
        <ProductDetailsCard product={product}></ProductDetailsCard>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropType.object,
};
export default ProductDetails;
