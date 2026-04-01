import React from 'react';
import DisplayShow from './DisplayShow';
import { toast } from 'react-toastify';
import CartImage from '../../assets/Cartimage.jpg'


const ShowDeatils = ({ cartDeatils, setCartDeatils }) => {
    const Remove = () => {
        setCartDeatils([])
        toast.success("Pament success")

    }

    const totalPrice = cartDeatils.reduce((total, item) => {
        return total + Number(item.price || 0);
    }, 0);

    return (
        <div className='max-w-11/12 mx-auto p-10 mb-10  shadow-2xl rounded-2xl '>
            <div className='space-y-6 '>
                <div >
                    <p className='font-bold text-3xl'>Your carts</p>

                    {cartDeatils.length === 0 ? (<div className=''><div className='flex justify-center '><img className='w-30 h-30' src={CartImage} alt="" /></div> <p className='items-center text-center text-2xl font-bold'>you cart is empty</p></div>) : (<>  <div>
                        {
                            cartDeatils.map((cart, i) => <DisplayShow key={i} cart={cart} setCartDeatils={setCartDeatils}></DisplayShow>)
                        }
                    </div>
                        <div>
                            <div className='flex justify-between items-center font-bold mt-10'>
                                <p>Total</p>
                                <p>${totalPrice}</p>
                            </div>
                            <button onClick={Remove} className='w-full rounded-full mt-5 btn bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600  text-white  '>Proceed to Checkout</button>
                        </div>
                    </>)}
                </div>
            </div>
        </div>

    );
};

export default ShowDeatils;

