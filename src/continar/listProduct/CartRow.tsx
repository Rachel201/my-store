import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import {FaTrashAlt} from 'react-icons/fa'
import { IItemList } from '../../model/interface';
import { chooseItem, removeFromList } from '../../redux/actions/StoreAction';
import { productDataSelector } from '../../redux/selectors';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background-color:var(--color);
    margin-bottom: 50px !important;
`;

const Item = styled.div`
flex: 1
`;

const Name = styled.div`
flex: 2;
padding: 0 15px;
`;

const TrashIcon = styled(FaTrashAlt).attrs({
    size: `1.3rem`
})`
    flex: 1;
    cursor: pointer
`;

const Image = styled.img`
    max-width: 120px
`

const CartRow = ({image, id, name, price,description}:IItemList) => {
    const dispatch = useDispatch();
    const [changeColor,setChangeColor] =useState('#ffffff')
    document.body.style.setProperty("--color", `${changeColor}`);
    //@ts-ignore
    const itemData = useSelector((state) => productDataSelector(state, id))

    
   
    const removeItem = () => {
        dispatch(removeFromList(id))
    }
   
    const handleChange=(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        setChangeColor('#BADA55') 
       dispatch(chooseItem(id))
    }

    return (
       
        <Wrapper onClick={(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>handleChange(e)}>
            <Item>
                <Image src={itemData.image}/>
            </Item>
            <Name>{itemData.name}</Name>
            <Item>{itemData.price}</Item>
            <Item>{itemData.description}</Item>
                <TrashIcon onClick={removeItem}/>
        </Wrapper>
       
    )
}

export default CartRow;
