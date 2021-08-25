import React from 'react';
import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux';
import CartRow from './CartRow';
import { IItemList } from '../../model/interface';

const Wrapper = styled.div`
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    grid-area: side;
    display: flex;
    @media (min-width: 700px) {
        overflow: auto;
        flex-direction: column
    }
`;

const List = styled.div`
    flex: 1;
`;
const EmptyPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: side;
    padding: 20px
`;
const Text = styled.div``;

const ListProducts = () => {

    const products = useSelector(({productsList}:any) =>productsList);

    return (
        !products || products.length === 0 ?
            <EmptyPage>
                <Text>There are no items</Text>
            </EmptyPage>
            :
        <Wrapper>
            <List>
            {
                  products && products.map((product:IItemList) => <CartRow key={product.id} {...product}/>)
            }
            </List>
            <div style={{marginBottom: 80}}/>
        </Wrapper>
    )
}

export default ListProducts
