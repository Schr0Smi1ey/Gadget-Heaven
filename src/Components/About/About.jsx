import { useEffect, useState } from "react";
import question from "../../../public/assets/Question.png";
import design from "../../../public/assets/Design.png";
import email from "../../../public/assets/send.png";
import subscribeBg from "../../../public/assets/subscribe-bg.png";
import colours from "../../../public/assets/colours.png";
import upArrow from "../../../public/assets/up-arrow.png";
import downArrow from "../../../public/assets/down-arrow.png";
import Commenter1 from "../../../public/assets/commenter1.jpg";
import Commenter2 from "../../../public/assets/commenter2.png";
import Commenter3 from "../../../public/assets/commenter3.png";
import Commenter4 from "../../../public/assets/commenter4.png";

const About = () => {
  useEffect(() => {
    document.title = "About Us | Gadget Heaven";
  }, []);
  const cardData = [
    {
      title: "Power Up with Style",
      description:
        "Discover tech accessories that perform as well as they look. Carefully chosen for both style and functionality, our products keep you looking sharp and fully equipped.",
    },
    {
      title: "Quality That Lasts",
      description:
        "Our accessories are built to endure. Say goodbye to quick replacements and hello to durable, dependable gadgets you can trust.",
    },
    {
      title: "Functional & Fabulous",
      description:
        "Enjoy top performance without sacrificing design. Our accessories combine practicality with elegance, making every tech experience seamless and stylish.",
    },
    {
      title: "Tech for Every Lifestyle",
      description:
        "From the office to leisure, our accessories fit every need. Whether you're a pro or a hobbyist, Gadget Heaven has something tailored just for you.",
    },
  ];
  const reasons = [
    {
      title: "Quality Products",
      description:
        "We prioritize quality and durability, sourcing from reputable manufacturers worldwide.",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Your happiness is our top priority. Our customer service team is always here to help with any questions or concerns.",
    },
    {
      title: "Innovation-Driven",
      description:
        "We’re passionate about staying on top of the latest tech trends to bring you the newest accessories.",
    },
    {
      title: "Value for Money",
      description:
        "We believe great tech doesn’t have to break the bank. Our products are priced to provide maximum value.",
    },
  ];
  const testimonials = [
    {
      text: "Absolutely thrilled with my new headphones from Gadget Heavens! The sound quality is incredible, and the recommendation was spot-on. Shipping was quick and secure—highly recommended!",
      name: "Emily Smith",
      location: "Toronto, Canada",
      image: Commenter1,
    },
    {
      text: "Shopping at Gadget Heavens was incredibly easy! Got a great deal on a laptop, and the support team helped me choose the perfect model. Couldn’t be happier with my purchase!",
      name: "Carlos Mendes",
      location: "São Paulo, Brazil",
      image: Commenter2,
    },
    {
      text: "Amazing service! Bought a new mobile phone and some accessories, and the entire process was seamless. Gadget Heavens made it easy to find exactly what I needed. I’ll definitely be back!",
      name: "Mohammed Al-Mansoori",
      location: "Dubai, UAE",
      image: Commenter3,
    },
    {
      text: "A fantastic shopping experience! Found the perfect laptop bag and charging accessories. Gadget Heavens has everything I needed, and the customer service was excellent. Highly recommend!",
      name: "Liam O'Reilly",
      location: "Dublin, Ireland",
      image: Commenter4,
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const { text, name, location, image } = testimonials[activeSlide];

  return (
    <div>
      <div className="container mx-auto mb-20">
        <div className="bg-[#9538E2] relative py-5">
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
          <div className="text-center mb-5">
            <h1 className="flex justify-center items-center gap-3 font-bold text-3xl mb-3 text-white">
              Gadget <span className="text-orange-500">Heaven</span>
              <img src={design} alt="" className="w-6 h-6" />
            </h1>
            <h3 className="font-medium my-3 text-white ">
              New Tech, New Possibilities – Elevating Your Devices, Empowering
              Your Life.
            </h3>
            <p className="text-gray-300 w-[80%] md:w-1/2 mx-auto">
              Your one-stop destination for the latest and greatest in tech
              accessories, where innovation meets style and quality.
            </p>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-10">
          <h1 className="font-bold text-4xl text-center mb-5">Our Mission</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-100 rounded-lg">
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`bg-white shadow-lg rounded-lg p-6 text-center`}
              >
                <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
                <p className="text-gray-500">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-10">
          <h2 className="font-bold text-4xl text-center mb-10">
            Why Choose Us?
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
            <div>
              <img
                src={question}
                alt=""
                className="w-[80%] mx-auto mb-3 md:mb-0"
              />
            </div>
            <div className="lg:w-1/2 p-2 grid grid-cols-1 gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className={`shadow-lg rounded-lg p-6`}>
                  <h3 className="text-2xl text-center md:text-left font-semibold mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="md:container mx-auto my-10 lg:my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="font-poppins text-[#5E6282] p-10 space-y-5">
              <h2 className="font-semibold text-xl lg:text-lg text-[#5E6282]">
                Testimonials
              </h2>
              <h1 className="font-volkhov font-bold text-4xl md:text-5xl text-black leading-[65px]">
                What Our Customers Say <br /> about Us.
              </h1>
              <div className="flex gap-8">
                <div className="w-5 h-5 rounded-full bg-[#f05a2a]"></div>
                <div className="w-5 h-5 rounded-full bg-[#af6aca]"></div>
                <div className="w-5 h-5 rounded-full bg-[#c9a76f]"></div>
              </div>
            </div>

            <div className="carousel rounded-box h-fit">
              <div className="carousel-item w-fit bg-gray-50 rounded-xl shadow-lg h-full flex items-center p-5 relative">
                <div className="relative w-[80%] ml-3 bg-white rounded-xl space-y-5 p-5 pt-10 sm:pl-14 xl:pt-14 font-poppins font-medium text-base text-[#5E6282]">
                  <p className="sm:w-[95%]">{text}</p>
                  <div>
                    <h1 className="miama text-xl font-bold">{name}</h1>
                    <h3>{location}</h3>
                  </div>
                  <div className="absolute -top-8 -left-8">
                    <img
                      src={image}
                      alt={name}
                      className="p-1 border-2 border-[#9c44e4] w-14 h-14 sm:w-20 sm:h-20 rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute flex flex-col gap-2 mr-2 top-1/2 right-0 transform -translate-y-1/2">
                  <button
                    onClick={handlePrev}
                    className="btn btn-circle bg-white hover:bg-white border-none"
                  >
                    <img src={upArrow} alt="Previous" className="w-8 h-8" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="btn btn-circle bg-white hover:bg-white border-none"
                  >
                    <img src={downArrow} alt="Next" className="w-8 h-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container w-[93%] relative mx-auto mt-10">
          <div className="absolute -top-3 -right-3 z-10 bg-white p-2 rounded-3xl">
            <img src={email} alt="" className="w-10 h-10" />
          </div>
          <div className="bg-[#9c44e4] relative overflow-hidden rounded-tl-[100px] p-10 md:p-14 lg:p-20">
            <div className="hidden lg:flex absolute -bottom-[5%] -left-[2%]">
              <img src={subscribeBg} alt="" className="opacity-10" />
            </div>
            <div className="hidden lg:flex absolute -right-[3%] -bottom-[5%]">
              <img src={subscribeBg} alt="" className="opacity-10 -rotate-90" />
            </div>
            <div className="hidden lg:flex absolute bottom-0 right-0">
              <img src={colours} alt="" className="opacity-40" />
            </div>
            <div className="hidden lg:flex absolute bottom-0 left-0">
              <img
                src={colours}
                alt=""
                className="-rotate-180 opacity-40 hidden sm:flex"
              />
            </div>
            <h1 className="text-center font-bold text-3xl md:text-4xl mb-10">
              Join the Gadget <span className="text-orange-500"> Heaven </span>
              Family
            </h1>
            <div className="space-x-4 md:space-y-0 flex flex-col md:flex-row gap-2 items-center justify-center mx-auto text-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="block sm:w-3/4 lg:w-1/2 xl:w-1/3 bg-white font-semibold p-3 md:p-4 pl-10 focus:outline-none rounded-lg"
              />
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black border-opacity-50 p-2 px-4 md:p-3 md:px-6 rounded-lg font-semibold text-lg">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
