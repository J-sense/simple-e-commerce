// import { getStorecart } from "../Utilites/FakeDb"

import { getStorecart } from "../../Utilites/FakeDb";

const handlesavedcart = async() =>{
    const cartproducts = await fetch('products.json')
    const products     = await cartproducts.json()
    console.log(products)
    const newArr = [];
    console.log(newArr)
    const savedCart = getStorecart()
    for(const id in savedCart){
        const addedProduts = products.find(pdDatab=>pdDatab.id === id)
        if(addedProduts){
            addedProduts.quantity = savedCart[id]
            newArr.push(addedProduts)
        }
    }
    return {newArr,products};

}
export default handlesavedcart;