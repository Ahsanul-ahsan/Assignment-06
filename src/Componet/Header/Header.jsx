import React from 'react';

const Header = () => {
    return (
        <div className='bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] h-80 md:h-35 mx-auto mb-12 mt-6'>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between text-white text-center pt-8">
                <div className="flex-1 px-4">
                    <h2 className="text-4xl font-bold mb-1">50K+</h2>
                    <p className="text-sm font-light opacity-90">Active Users</p>
                </div>
                <div className="hidden md:block h-12 w-[1px] bg-white/30"></div>
                <div className="flex-1 px-4 my-8 md:my-0">
                    <h2 className="text-4xl font-bold mb-1">200+</h2>
                    <p className="text-sm font-light opacity-90">Premium Tools</p>
                </div>
                <div className="hidden md:block h-12 w-[1px] bg-white/30"></div>
                <div className="flex-1 px-4">
                    <h2 className="text-4xl font-bold mb-1">4.9</h2>
                    <p className="text-sm font-light opacity-90">Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Header;