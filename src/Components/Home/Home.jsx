import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Gadget Heaven";
  }, []);
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
    </div>
  );
};

export default Home;
