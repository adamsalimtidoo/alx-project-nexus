import globe from "../assets/icons/globe.svg"
import dollar from "../assets/icons/dollar.svg"
import twtr from "../assets/icons/twitter.svg"
import fb from "../assets/icons/facebook.svg"
import insta from "../assets/icons/insta.svg"
const Footer = () => {
  return (
    <footer className="w-full h-full bg-grey-200 px-20 pt-16 pb-8 font-poppins">
      <div className="flex flex-row justify-between text-grey-100">
        <span className="flex flex-col space-y-2 items-start">
          <h2 className="text-lg text-black">Support</h2>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            Help Center
          </button>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            Safety information
          </button>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            Cancellation options
          </button>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            Our COVID-19 Response
          </button>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            Supporting people with disabilities
          </button>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            Report a neighborhoood concern
          </button>
        </span>
        <span className="flex flex-col space-y-2 items-start">
          <h2 className="text-lg text-black">Community</h2>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            {" "}
            Kowanaso.org: disaster relief housing
          </button>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            Safety information
          </button>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            Support: Afghan refugees
          </button>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            Celebrating diversity & belonging
          </button>
        </span>
        <span className="flex flex-col space-y-2 items-start">
          <h2 className="text-lg text-black">Hosting</h2>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            Try hosting
          </button>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            AirCover: protection for Hosts
          </button>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            Explore hosting resources
          </button>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            Visit our community forum
          </button>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            How to host responsibly
          </button>
        </span>
        <span className="flex flex-col space-y-2 items-start">
          <h2 className="text-lg text-black">About</h2>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            Newsroom
          </button>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            Learn about new features
          </button>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            Letter from our founders
          </button>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            Investors
          </button>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            Careers
          </button>
          <button className="hover:text-black cursor-pointer duration-300 ease-in-out">
            Airbnb Luxe
          </button>
        </span>
      </div>
      <div className="w-full h-full border-t-2 border-grey-300 mt-16 flex justify-between pt-8">
        <span className="text-grey-100">
          <p>© 2025 Kowanaso, Inc. | Privacy | Terms | Sitemap</p>
        </span>
        <div className="flex space-x-8">
            <div className="flex space-x-4">
                <span className="flex space-x-2">
                    <img src={globe} alt="" />
                    <p className="underline text-grey-100">English US</p>
                </span>
                <span className="flex space-x-2">
                    <img src={dollar} alt="" />
                    <p className="underline text-grey-100">USD</p>
                </span>
            </div>
            <div className="flex space-x-4">
                <img src={fb} className="hover:opacity-60 cursor-pointer"/>
                <img src={twtr} className="hover:opacity-60 cursor-pointer"/>
                <img src={insta} className="hover:opacity-60 cursor-pointer"/>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;