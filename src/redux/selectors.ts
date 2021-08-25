import {createSelector} from 'reselect';

const selectedProductItem = (state: { productsList: any[]; }, id: any) => state.productsList && state.productsList.find(product => product.id === id)


export const productDataSelector = createSelector([
    selectedProductItem
], (product) => product);

