import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from './Cards/CartItem';
import { deleteFromdb, removeItembd } from '../Utilites/FakeDb';
import { NewArrcontext } from '../App';
import toast from 'react-hot-toast';

const Cart = () => {
    // const {newArr} = useLoaderData()
    const [cart,setCart] =useContext(NewArrcontext)
    // console.log(newArr)
    let total = 0;
    for(const product of cart){
        total = total + product.price * product.quantity
    }
    const removeITem =(id) =>{
        const remaining = cart.filter(product=> product.id !== id)
        setCart(remaining)
        removeItembd(id)
    }
    const deleteTheCart =()=>{
        setCart([])
        deleteFromdb()
    }
    const handleTheplaceOrder = ()=>{
      if(cart.length > 0){
        setCart([])
        deleteFromdb()
        toast.success('Your Order Placed')
        return ;
      }
      return toast.error('cart empty')
    }
    return (
        <div className='flex items-start justify-center min-h-screen p-6 sm:p-10 bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl space-y-4 p-6 sm:p-10'>
                <h2 className='font-semibold text-xl font-serif'>
                        {
                            cart.length ? 'Review Cart Items' : 'Cart is Empty'
                        }
                </h2>
                <ul className='flex flex-col divide-y divide-gray-700'>
                    {
                        cart.map(product =><CartItem removeITem={removeITem} product={product} key={product.id}> </CartItem>)
                    }
                </ul>
                <p className='text-right font-bold text-align'>
                    Total Amount : <span className='font-semibold'>{total}$</span>
                </p>
                <p className='text-sm text-gray-400 text-right'>
                   Not Including Taxes and Shipping Costs
                </p>
                <div className='flex justify-end'>{
                    cart.length> 0 ?  <button onClick={deleteTheCart} className='btn-outlined'>Clear Cart </button> : <Link to='/shop'><button className='btn-outlined'>Back To Shop</button></Link> }  
                   
                    <button className='btn-primary' onClick={handleTheplaceOrder}>Place Order</button>
                </div>
            </div>

        </div>
    );
};

export default Cart;