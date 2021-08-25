import { IItemList } from "../../model/interface";
import { AppDispatch } from "../store";
import { ADD_PRODUCT_TO_STORE, CHANGE_FORM, CHANGE_PRODUCT, CHOOSE_PRODUCT, GET_LIST, REMOVE_PRODUCT } from "./actionTypes";


const addProduct =(newProduct:any)=>(Dispatch:AppDispatch)=>{
   Dispatch({ type:ADD_PRODUCT_TO_STORE,product:newProduct })

}

export const restart =()=>(Dispatch:AppDispatch)=> {
    Dispatch(
        {
            type:CHANGE_FORM
        }
    )
}
export const getProductsList = (data:any) => ({
    data,
    type: GET_LIST
});

export const removeFromList = (id:any) => (Dispatch:AppDispatch)=>{
    Dispatch
    (
        {data: id,
        type: REMOVE_PRODUCT
       }
   )
    
};

export const changeItem = (data:IItemList) => ({
    data,
    type: CHANGE_PRODUCT
});

export const chooseItem =(id:any)=>(Dispatch:AppDispatch)=>{
    //@ts-ignore
    const selectedItem = (state: { cart: any[]; }, id: any) => state.productsList && state.productsList.find((product: { id: any; }) => product.id === id)
    Dispatch(
        {
            data:selectedItem,
            type:CHOOSE_PRODUCT,
        }
    );

}



