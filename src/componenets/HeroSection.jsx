import { FiShoppingBag } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section
      className="bg-gray-200 w-full">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 py-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="border-l-4 border-cyan-700 pl-2 mb-2 inline-block">
            <FiShoppingBag className="text-cyan-700 inline mr-1" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            All what you need is here!
            <br />
            New Fashion collection every Season
          </h1>
          <p className="text-gray-500 mb-4">
            <strong className="text-black">SALE OFFER</strong>
            <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            <br className="hidden md:block" />
            sed diam nonumy eirmod tempor
          </p>
          <button className="bg-cyan-700 text-white px-6 py-2 rounded-md hover:bg-cyan-800">
            ORDER NOW
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center relative">
          <img
            src="https://img.freepik.com/free-vector/online-delivery-banner-with-realistic-laptop-parcels-clouds-social-icons-realistic-style_548887-53.jpg?t=st=1745395566~exp=1745399166~hmac=e3c9b2b04c7152a04709bd75fffe5e591d7721b93185ccc7c53211d7c05a3497&w=1380" 
            alt="Hero Images"
            className="w-64  sm:w-72 lg:w-96 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
