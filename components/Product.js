import React from 'react'; 
import Image from 'next/image';
import { useState } from 'react'; 
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter'; 


const MAX_RATING = 5; 
const MIN_RATING = 1; 

const Product = ({id, title, price, description, category, image}) => {

    const [rating, setRating]  = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    ); 

    const [hasPrime] = useState(Math.random() < 0.5)
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic">{category.name}</p>
        <Image src={image} alt="" width={200} height={200} className="object-contain" />

       <h4 className="my-3">{title}</h4>
       <div className="flex">
       {Array(rating).fill().map((_, index) => (
        <StarIcon className='h-5 text-yellow-500' />

       ))}

       </div>
     
     <p className="text-xs my-2 line-clamp-2">{description}</p>
     <div className="mb-5">
        <Currency 
            quantity={price}
            currency="USD"
        />

        {hasPrime && (
            <div className="flex items-center space-x-2 ">
                <img className="w-12" src="https://links.papareact.com/fdw" alt="fdw"  />
                <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                
            </div>

        )}

      
           
        

     </div>
     <button className="mt-auto button">Add to Basket</button>
     

    </div>
  )
}

export default Product 