import { json } from "react-router-dom";

const addTodb=id=>{
  
    let shoppingCart = {};
  const storeCart = localStorage.getItem('shopping-cart')
  if(storeCart){
    shoppingCart = JSON.parse(storeCart)
  }
  const quantity = shoppingCart[id]
  if(quantity){
    const newQuantity = quantity + 1
    shoppingCart[id] = newQuantity
  }
  else{
    shoppingCart[id] = 1
  }
  localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))
}
const getStorecart =() =>{
    let shoppingCart ={};
    const storeCart = localStorage.getItem("shopping-cart")
    if(storeCart){
        shoppingCart = JSON.parse(storeCart)
    }
    return shoppingCart;
}
const removeItembd = id =>{
  const storeCart = localStorage.getItem('shopping-cart')
  if(storeCart){
    const shoppingCart =JSON.parse(storeCart)
    if(id in shoppingCart){
      delete shoppingCart[id]
  localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart))

    }
  }
}
const deleteFromdb =()=>{
  localStorage.removeItem('shopping-cart')
}



export {addTodb,getStorecart,deleteFromdb,removeItembd};