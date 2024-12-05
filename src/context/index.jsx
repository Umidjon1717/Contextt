import { useContext, createContext, useState, useEffect } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")) || null);
  const [count, setCount] = useState(1);
  const [wishList, setWishList] = useState(JSON.parse(localStorage.getItem("wishlist")) || []);


  useEffect(() => {
    if (wishList.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishList));
    }
  }, [wishList]);


  useEffect(() => {
    if (userInfo) {
      console.log(`index:${userInfo}`);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    }
  }, [userInfo]);
  

  return (
    <Context.Provider value={{ count, setCount, wishList, setWishList, userInfo, setUserInfo }}>
      {children}
    </Context.Provider>
  );
};

export const useStateValue = () => useContext(Context);
