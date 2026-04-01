import React from 'react';
import logo from "../../assets/Group 5 (1).png"
import playLogo from "../../assets/Play.png"
import bannerlogo from "../../assets/banner.png"

const Banner = () => {
    return (

        <div className='max-w-11/12 mx-auto flex justify-center items-center mb-8 mt-15 gap-50'>
            <div className=' space-y-2 text-left'>
                <p className='flex items-center bg-[linear-gradient(88deg,_#4f39f6_0%,_#9514fa_100%)] bg-clip-text text-transparent text-[12px] font-semibold '><img className='h-4 w-4' src={logo} alt="" />New: AI-Powered Tools Available</p>
                <h1 className='font-bold text-3xl'>Supercharge Your <br /> <span className='bg-[linear-gradient(88deg,_#4f39f6_0%,_#9514fa_100%)] bg-clip-text text-transparent'>Digital Workflow</span> </h1>
                <p className='text-[#627382] text-[14px]'>Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today <br />
                    Explore Products
                </p>
                <div className='flex gap-4'>
                    <button className="btn btn-primary bg-[linear-gradient(88deg,_#4f39f6_0%,_#9514fa_100%)] text-white rounded-3xl">Explore Products</button>
                    <button className="btn btn-primary  bg-[linear-gradient(88deg,_#4f39f6_0%,_#9514fa_100%)]  rounded-3xl bg-[linear-gradient(88deg,_#4f39f6_0%,_#9514fa_100%)] bg-clip-text text-transparent"><img className='h-4 w-4 ' src={playLogo} alt="" /> Watch Demo</button>

                </div>

            </div>

            <div>
                <img className='w-100 h-100 shadow-2xl rounded-2xl' src={bannerlogo} alt="" />
            </div>

        </div>

    );
};

export default Banner;