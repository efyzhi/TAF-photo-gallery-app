import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, activeNav] = useState(false);
  const [colour, setColour] = useState("trasnsparent");
  const [textColour, setTextColour] = useState("white");

  const handleNav = () => {
    activeNav(!nav);
  };

  useEffect(() => {
    const changeColour = () => {
      if (window.scrollY >= 90) {
        setColour('#ffffff');
        setTextColour('#000000');
      } else {
        setColour('transparent');
        setTextColour('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColour);
  }, []);


  return (
    <div
      style={{ backgroundColor: `${colour}` }}
      className="fixed flex left-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between w-[100%] items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColour}` }} className="font-bold text-4xl">
            TAF
          </h1>
        </Link>
        <ul style={{ color: `${textColour}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li className="p-4">
            <Link href="/work">Work</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="black sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColour}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColour}` }} />
          )}
        </div>
        <ul
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
            <Link href="/">Home</Link>
          </li>
          <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
            <Link href="/#gallery">Gallery</Link>
          </li>
          <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
            <Link href="/work">Work</Link>
          </li>
          <li onClick={handleNav} className="p-4 text-4xl hover:text-gray-500">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
