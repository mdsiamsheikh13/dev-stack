import  { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/logo-text.png";

const Header = () => {
  return (
    <header className="container mx-auto px-5 py-4">
      <nav className="flex items-center justify-between">
        <img src={Logo} alt="Logo" className="w-35 md:w-36" />

        <ul className="hidden md:flex items-center gap-6">
          <li className="hover:text-[#DB2777] font-semibold cursor-pointer">
            Home
          </li>
          <li className="hover:text-[#DB2777] font-semibold cursor-pointer">
            Technologies
          </li>
          <li className="hover:text-[#DB2777] font-semibold cursor-pointer">
            Projects
          </li>
          <li className="hover:text-[#DB2777] font-semibold cursor-pointer">
            About
          </li>
          <li className="hover:text-[#DB2777] font-semibold cursor-pointer">
            Contact
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-5">
          <button className="text-xl cursor-pointer">Sign In</button>

          <button className="text-xl text-white bg-[#D91B7E] py-2 px-5 rounded-3xl cursor-pointer hover:bg-[#be176e] transition">
            Sign Up
          </button>
        </div>

        <button className="md:hidden text-2xl cursor-pointer">
          <GiHamburgerMenu />
        </button>
      </nav>
    </header>
  );
};

export default Header;