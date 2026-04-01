import React, { use } from 'react';
import CardShow from './CardShow';

const Card = ({ card, cartDeatils, setCartDeatils }) => {
    const cards = use(card)
    
    return (
        <div className='max-w-11/12 mx-auto grid md:grid-cols-3 gap-5'>
            {
                cards.map(item => <CardShow key={item.id} item={item} cartDeatils={cartDeatils} setCartDeatils={setCartDeatils}  ></CardShow>)
            }
        </div>
    );
};

export default Card;