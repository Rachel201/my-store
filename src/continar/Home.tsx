import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled, {createGlobalStyle} from 'styled-components';
import {getProducts} from '../shared/services/api';
import { getProductsList } from '../redux/actions/StoreAction';
import Header from './Header';
import { productsList } from '../redux/reducers';
import ListProducts from './listProduct/ListProducts';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr ;
    grid-template-areas: 
      "header header"
      "side side"
      "main main" ;
  }
    height: 100vh;
    overflow: auto;
    margin-top: 90px;
    
    @media (min-width: 700px) {
        margin-top: 0px;
        overflow: hidden;
        grid-template-areas: 
      "header  header"
      "side main" ;
      }
`

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`

const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector(({productList}:any) =>productsList);

    useEffect(() => {
        const fetchData = async () => {
          if (!products || products.length === 0){
            const result = await getProducts();
            if (result){
              dispatch(getProductsList(result));
            }
          }
        }
        fetchData()
    }, []);

    return (
        <Wrapper>
            <GlobalStyle/>
            <Header/>
            <ListProducts/>
   
        </Wrapper>
    )
}

export default Home;
