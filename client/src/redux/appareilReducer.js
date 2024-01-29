import { GET_APP } from "./actionTypes";

const initialState = {newAppareil:[]}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_APP:
            return {...state,newAppareil:action.payload};
      
         default:
            return state;
             }
};

export default appReducer;