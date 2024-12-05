import React from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useStateValue } from '../../context';

const Products = ({ data }) => {
  const { setWishList, wishList } = useStateValue();

  const handleLike = (product) => {
    const index = wishList.findIndex((item) => product.id === item.id);
    if (index < 0) {
      setWishList((prev) => [...prev, product]);
    } else {
      setWishList((prev) => prev.filter((item) => product.id !== item.id));
    }
  };

  const productItems = data?.map((product) => {
    const isLiked = wishList?.some((item) => item.id === product.id);

    return (
      <div
        key={product.id}
        className="shadow-lg p-4 rounded-lg border bg-white hover:shadow-xl transition duration-300"
      >
        <div className="w-full h-64 relative overflow-hidden rounded-lg">
          <img
            className="w-full h-full object-cover"
            src={product.thumbnail}
            alt={product.title}
          />
          <button
            onClick={() => handleLike(product)}
            className="absolute top-3 right-3 text-2xl bg-white p-1 rounded-full shadow-md hover:scale-110 transition"
          >
            {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
          </button>
        </div>
        <div className="mt-3 text-center">
          <h3 className="text-lg font-semibold text-slate-800 truncate">
            {product.title}
          </h3>
        </div>
      </div>
    );
  });

  return (
    <div className="container mx-auto my-6">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productItems}
      </div>
    </div>
  );
};

export default Products;
