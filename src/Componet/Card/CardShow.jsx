import React, { useState } from 'react';
import { MdOutlineDownloadDone } from 'react-icons/md';
import { toast } from 'react-toastify';

const CardShow = ({ item, cartDeatils, setCartDeatils }) => {
    const handelClick = () => {
        setCartDeatils([...cartDeatils, item])
        toast.success("cart add success")
        setByNow(true)
    }

    const [byNow, setByNow] = useState(false)

    return (
        <div className='mb-20'>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="flex justify-between">
                        <div>
                            <img className='border border-gray-300 p-3 rounded-full' src={item.icon} alt="image" />
                        </div>
                        <div>
                            <span className={`badge badge-xs badge-warning mb-4 w-14 h-6 items-center rounded-full text-[10px] ${item.tagType === "bestseller"
                                ? "bg-[#FEF3C6] text-[#BBA400] border-none"
                                : item.tagType === "new"
                                    ? "bg-[#DBFCE7] text-[#0A883E] border-none"
                                    : item.tagType === "popular"
                                        ? "bg-[#E1E7FF] text-[#4F39F6] border-none"
                                        : ""
                                } `}>{item.tagType}

                            </span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <h2 className="text-3xl font-bold">{item.name}</h2>
                    </div>
                    <div>
                        <p>{item.description}</p>
                        <div>
                            <p className='font-bold text-xl'>${item.price}/{item.period}</p>
                        </div>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {item.features.map((item, i) => (<li key={i}>
                            <span className='flex items-center'><MdOutlineDownloadDone className='size-5 text-green-500' /> {item}</span>
                        </li>))}
                    </ul>
                    <div className="mt-6">
                        <button onClick={handelClick} className={`btn ${byNow===true ? "bg-green-500" : "bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600"} btn-primary btn-block   rounded-full `}>{byNow ? "Cart Added" : "Buy Now"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardShow;