import React, { createContext, useState } from "react";
import Header from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer";
export const Productscontext = createContext([]);
export const NewArrcontext = createContext([]);
const App = () => {
  const { products, newArr } = useLoaderData();
  // console.log(products, newArr);
  const [cart,setCart] = useState(newArr)
  return (
    <Productscontext.Provider value={products}>
      <NewArrcontext.Provider value={[cart,setCart]}>
        <Header></Header>
        <div className="w-[90%] mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer />
      </NewArrcontext.Provider>
    </Productscontext.Provider>
  );
};

export default App;
