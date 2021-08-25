import react from 'react';
import { ADD_PRODUCT_TO_STORE,CHANGE_FORM,CHANGE_PRODUCT, CHOOSE_PRODUCT, GET_LIST, REMOVE_PRODUCT } from './actions/actionTypes';



export const eventList= (state = [], action:any) => {
  switch (action.type) {
      case CHOOSE_PRODUCT:
          return [action.data];
    

      case CHANGE_FORM:
        return[];

      default:
          return state
  }
};



export const productsList = (state = [], action:any) => {
  switch (action.type) {
      case GET_LIST:
          return [...state, ...action.data];

      case CHANGE_PRODUCT:            
              const tempState = [...state];
                //@ts-ignore
              const itemIndex = tempState.findIndex(item => item.id === action.data.id)
              if (itemIndex > -1) {
                   //@ts-ignore
                  tempState[itemIndex] = {...action.data}
              }
              return [...tempState];

      case ADD_PRODUCT_TO_STORE:
          return [...state, action.data];
      
      case REMOVE_PRODUCT:
            //@ts-ignore
              return state.filter(item => item.id !== action.data);
        

        
      default:
        return state
  }
};
