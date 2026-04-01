import React from 'react';
import ShopingImage from "../../assets/shopping-cart.png"



const Navbar = ({cartDeatils}) => {
    return (
        <nav className="max-w-11/12 mx-auto md:flex items-center justify-between px-8 py-5 border-b border-gray-100 bg-white">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4 md:mb-0">
                DigiTools
            </div>

            <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                <a href="#" className="hover:text-purple-600 transition-colors">
                    Products
                </a>
                <a href="#" className="hover:text-purple-600 transition-colors">
                    Features
                </a>
                <a href="#" className="hover:text-purple-600 transition-colors">
                    Pricing
                </a>
                <a href="#" className="hover:text-purple-600 transition-colors">
                    Testimonials
                </a>
                <a href="#" className="hover:text-purple-600 transition-colors">
                    FAQ
                </a>
            </div>

            <div className="flex items-center gap-2">

                <div>
                    <div className=" text-gray-700 ">
                        <div className="flex items-center gap-2 ">
                             <img src={ShopingImage} alt="" />
                            <span className={` ${
                                cartDeatils.length===0 ? "hidden" : "font-bold text-[12px] text-center absolute -mt-7 ml-2 text-white border w-5 h-5 rounded-full bg-red-500"
                            }`}>
                                {cartDeatils.length}
                            </span>
                        </div>
                    </div>
                </div>


                <a
                    href="#"
                    className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                >
                    Login
                </a>


                <button className="cursor-pointer bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600  text-white px-6 py-2.5 rounded-full font-semibold transition-colors">
                    Get Started
                </button>
            </div>
        </nav>
    );
};

export default Navbar;