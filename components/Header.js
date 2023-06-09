import React from 'react'; 
import Image from 'next/image';
import {
  MenuIcon, 
  SearchIcon, 
  ShoppingCartIcon
} from '@heroicons/react/outline';

const Header = () => {
  return (
    <header>
    {/* Top Nav */}
    <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 px-3">
      <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 gap-5 pr-5">
        <Image 
          src="https://links.papareact.com/f90"
          width={150}
          height={40}
          className="object-contain cursor-pointer"
        />
      </div>

      {/* Search  */}
      <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
        <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" type="text" />
        <SearchIcon className="h-12 p-4" />
      </div>

      {/* Right  */}
      <div className="text-white flex items-center text-sx space-x-6  mx-6 whitespace-nowrap">
        <div className="link">
          <p>Hello Salman Sheriff</p>
          <p className="text">Account & Details</p>

        </div>
        <div className="link">
          <p>Returns</p>
          <p className="text">& Orders</p>
          </div>
        <div className="relative link flex items-center ">
          <ShoppingCartIcon className="h-10 cursor-pointer" />
          <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold flex items-center justify-center">0</span>
          <p className="text hidden md:inline mt-2">Basket</p>
        </div>

      </div>
    </div>

    {/* Bottom Nav  */}
    <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
    <p className="link flex items-center">
    <MenuIcon className="h-6 mr-1" />
    All</p>
    <p className="link">Prime Video</p>
    <p className="link">Amazon Business</p>
    <p className="link">Today's Deals</p>
    <p className="link hidden lg:inline-flex">Electronics</p>
    <p className="link hidden lg:inline-flex">Food & Grocery</p>
    <p className="link hidden lg:inline-flex">Prime</p>
    <p className="link hidden lg:inline-flex">Buy Again</p>
    <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
    <p className="link hidden lg:inline-flex">Health and personal Care</p>

    </div>
      
        
    </header>
  )
}

export default Header

