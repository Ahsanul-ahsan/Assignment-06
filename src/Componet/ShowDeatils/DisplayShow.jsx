import React from 'react';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const DisplayShow = ({ cart, setCartDeatils }) => {

    const handelClick = () => {
        setCartDeatils(prevCart =>
            prevCart.filter((c) => c.id !== cart.id)

        );
        toast.warning(`${cart.name} remove sucessfully`)
    };

    return (
        <div className='flex items-center justify-between p-4 mb-4 bg-[#F9FAFC] rounded-2xl '>
            <div className='flex items-center gap-4'>
                <img src={cart.icon} alt="" className="w-12 h-12" />
                <div>
                    <p className='font-bold'>{cart.name}</p>
                    <p className='font-semibold'>${cart.price}</p>
                </div>
            </div>
            <div>
                <button
                    onClick={handelClick}
                    className='btn text-red-500 font-bold hover:bg-red-50'
                >
                    <MdDelete className="text-xl" /> Remove
                </button>
            </div>
        </div>
    );
};

export default DisplayShow;