import react, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IItemList } from '../model/interface';
import { changeItem } from '../redux/actions/StoreAction';
import { Button } from '../shared/components';

const DetailProduct = (prop: any) => {
    const { id, name, description } = prop
    const dispatch = useDispatch();

    // const blankProduct ={
    //     name:'',
    //     description:'',
    //     price
    // }
    const eventToProduct = useSelector(({ eventList }: any) => eventList)

    const [changeProduct,setChangeProduct] = useState<IItemList>(eventToProduct)

    // <img src=>
    const handleChangeProduct = () => {
              dispatch(changeItem(changeProduct))
    }

    const handleChange = (key: string, value: any) => {
        setChangeProduct({ 
            ...changeProduct,
            [key]:value,
        }   
        )
    }

    return (
        
         <form onSubmit={handleChangeProduct}>
                {/* <img src={eventToProduct.img}> */}
                <input value={eventToProduct.name} onChange={(e: any) => { handleChange('name', e.target.value) }}/>
                <input value={eventToProduct.price} onChange={(e: any) => { handleChange('price', e.target.value) }}/>
                <input value={eventToProduct.description} onChange={(e: any) => { handleChange('description', e.target.value) }}/>
                <Button type='submit'>Save</Button>
         </form>
        
     );
}

export default DetailProduct;