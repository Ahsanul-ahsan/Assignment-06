import React from 'react';

const Ready = () => {
    return (
        <div className='bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] items-center text-center p-20'>
            <div>
                <h1 className='text-white text-3xl font-bold mb-4'>Ready to Transform Your Workflow?</h1>
                <p className='text-[#FFFFFF] text-[14px] opacity-60'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            </div>
            <div className='mt-5'>
                <button className="btn btn-primary mr-2 bg-white text-black rounded-3xl">Explore Products</button>
                <button className="btn btn-primary  bg-[linear-gradient(88deg,_#4f39f6_0%,_#9514fa_100%)] text-white  rounded-3xl bg-[linear-gradient(88deg,_#4f39f6_0%,_#9514fa_100%)] bg-clip-text text-transparent"> Watch Demo</button>
             <p className='text-[#FFFFFF] text-[14px] opacity-60 mt-2'>
                14-day free trial • No credit card required • Cancel anytime
             </p>
            </div>

        </div>
    );
};
export default Ready;