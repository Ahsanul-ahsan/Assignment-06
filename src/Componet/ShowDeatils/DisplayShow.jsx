import React from 'react';
import { MdDelete } from 'react-icons/md';

const DisplayShow = ({ cart, setCartDeatils }) => {

    return (
        <div className='flex items-center justify-between p-4 mb-4 bg-[#F9FAFC] rounded-2xl '>
            <div className='flex items-center gap-4'>
                <img src={cart.icon} alt="" />
                <div>
                    <p className='font-bold'>{cart.name}</p>
                    <p className='font-semibold'>${cart.price}</p>
                </div>
            </div>

            <div >
                <button  className='btn text-red-500 font-bold'> <MdDelete /> Remove</button>
            </div>
        </div>
    );
};

export default DisplayShow;