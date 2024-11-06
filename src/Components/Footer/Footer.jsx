import { Link, useNavigate } from "react-router-dom";
import design from "../../../public/assets/Design.png";

const Footer = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="container mx-auto p-10">
      <div className="text-center">
        <h3 className="flex justify-center items-center gap-3 font-bold text-3xl mb-3">
          Gadget <span className="text-orange-500">Heaven</span>
          <img src={design} alt="" className="w-6 h-6" />
        </h3>
        <p className="font-medium text-base text-[#09080F99]">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="divider"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 text-[#09080F99]">
        <div className="flex justify-center md:justify-end text-center md:text-left mb-5 md:mb-0">
          <div className="flex flex-col gap-2">
            <h2 className="mb-3 font-bold text-xl text-black">Services</h2>
            <Link className="hover:text-[#9538E2] hover:font-semibold">
              Product Support
            </Link>
            <Link className="hover:text-[#9538E2] hover:font-semibold">
              Order Tracking
            </Link>
            <Link className="hover:text-[#9538E2] hover:font-semibold">
              Shipping & Delivery
            </Link>
            <Link className="hover:text-[#9538E2] hover:font-semibold">
              Returns
            </Link>
          </div>
        </div>
        <div className="flex justify-center text-center md:text-left mb-5 md:mb-0">
          <div className="flex flex-col gap-2">
            <h2 className="mb-3 font-bold text-xl text-black">Company</h2>
            <Link
              onClick={() => handleNavigate("/About")}
              className="hover:text-[#9538E2] hover:font-semibold"
            >
              About Us
            </Link>
            <Link className="hover:text-[#9538E2] hover:font-semibold">
              Careers
            </Link>
            <Link className="hover:text-[#9538E2] hover:font-semibold">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-start text-center md:text-left mb-5 md:mb-0">
          <div className="flex flex-col gap-2">
            <h2 className="mb-3 font-bold text-xl text-black">Legal</h2>
            <Link className="hover:text-[#9538E2] hover:font-semibold">
              Terms of Service
            </Link>
            <Link className="hover:text-[#9538E2] hover:font-semibold">
              Privacy Policy
            </Link>
            <Link className="hover:text-[#9538E2] hover:font-semibold">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
