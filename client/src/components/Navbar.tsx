import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'



const Navbar: React.FC = () => {
     const [toggle, setToggle] = useState(false);

     const NavItems = [
          { name: "Home", id: "/" },
          { name: "About", id: "#about" },
          { name: "Contact", id: "#contact" },
     ]
     return (
          <nav className={`bg-white shadow-md`}>
               <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="/" className="font-bold text-xl text-gray-800">FragranceHaven</a>
                    <div className="hidden md:flex space-x-8">
                         {NavItems.map((item) => (
                              <a href={item.id} className="text-gray-800 hover:text-gray-600 font-semibold">{item.name}</a>
                         ))}
                    </div>
                    <button className="md:hidden" onClick={() => setToggle(!toggle)}>
                         {toggle ?
                              <X /> :
                              <Menu />}
                    </button>
               </div>
               {/* Mobile menu */}
               {toggle && (
                    <div className='flex items-center md:hidden flex-col space-y-5 absolute top-0 right-0 bg-white w-2/3 h-screen py-8 mt-12 z-10'>
                         {NavItems.map((item) => (
                              <a href={item.id} className=" text-lg   text-gray-800 hover:text-gray-600 font-semibold" onClick={() => setToggle(false)}>{item.name}</a>
                         ))}
                    </div>
               )}
          </nav>
     );
};

export default Navbar;