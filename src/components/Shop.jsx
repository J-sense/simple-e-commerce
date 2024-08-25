import React, { useContext } from 'react';
// import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addTodb } from '../Utilites/FakeDb';
import { NewArrcontext, Productscontext } from '../App';
import toast from 'react-hot-toast';
// import addTodb from '../Utilites/FakeDb';

const Shop = () => {
    const products = useContext(Productscontext)
    const [cart, setCart] = useContext(NewArrcontext)
    const handleAddTocart=(product)=>{
        let newCart =[]
        const exists = cart.find(existing =>existing.id ===product.id)
        if(!exists){
            product.quantity = 1;
            newCart =[...cart,product]
        }
        else{
            const rest = cart.filter(existing =>existing.id !== product.id)
           
            exists.quantity = exists.quantity + 1;
            newCart =[...rest,exists]
        }
        setCart(newCart)
        addTodb(product.id)
        toast.success("added succesfuly")

    }
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
            {
                products.map(product=><ProductCard key={product.id} product={product} handleAddTocart={handleAddTocart}/>)
            }
        </div>
    );
};

export default Shop;