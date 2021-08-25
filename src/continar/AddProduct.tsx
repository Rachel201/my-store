import { Button } from '@material-ui/core';
import react from 'react';
import { useDispatch } from 'react-redux';
import { restart } from '../redux/actions/StoreAction';


const AddProduct = ()=>{
    const dispatch = useDispatch();

   const  handleAddProduct =()=>{
       dispatch(restart())
   }

   

    return (
        <Button onClick={handleAddProduct}></Button>
    )
}
