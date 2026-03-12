import { useState } from "react";
import Logo from "../assets/Logo.png";
import { Menu, X } from "lucide-react";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-amber-950 fixed z-50 w-full top-0">
      <div className="px-12 flex justify-between items-center py-3.5">
        {/* logo section */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-[55px] h-[55px]" />
          <h1 className="text-3xl text-white font-sans font-bold tracking-tight whitespace-nowrap">
            Brew Haven
          </h1>
        </div>

        {/* menu section */}
        <nav className="md:flex hidden items-center gap-7">
          <ul className="flex gap-7 items-center text-2xl font-light text-white">
            <a href="/">
              <li className="cursor-pointer">Home</li>
            </a>
            <a href="#menu">
              <li className="cursor-pointer">Menu</li>
            </a>
            <a href="#about">
              <li className="cursor-pointer">About</li>
            </a>
            <a href="#testimonial">
              <li className="cursor-pointer">Testimonial</li>
            </a>
          </ul>

          <a href="#contact">
            <button className="bg-amber-800 text-white hover:bg-amber-50 hover:text-amber-900 text-lg font-semibold px-6 py-2.5 rounded-md border-2 border-black transition duration-300">
              Contact
            </button>
          </a>
        </nav>

        {/* mobile menu icon */}
        {open ? (
          <X
            onClick={() => setOpen(false)}
            className="text-white w-7 h-7 md:hidden"
          />
        ) : (
          <Menu
            onClick={() => setOpen(true)}
            className="text-white w-7 h-7 md:hidden"
          />
        )}
      </div>

      <ResponsiveMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
