import React from 'react';
import { useStateValue } from '../../context';
import Products from '../../components/products/Products';

const Wishes = () => {
  const { wishList } = useStateValue();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center text-slate-800 mb-6">
          Your Wishlist
        </h1>
        {wishList && wishList.length > 0 ? (
          <Products data={wishList} />
        ) : (
          <div className="flex flex-col items-center justify-center mt-12">
            <h2 className="text-lg text-gray-600">Your wishlist is empty</h2>
            <p className="text-gray-500">
              Browse products and add items to your wishlist!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishes;
