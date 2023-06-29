import {fetchFaield , fetchStart ,fetchSucc} from '../actions/actionsType'
const initialState = {
    items : [] ,
    loading : true , 
    error : ''
}
export function fetchData(state = initialState , action){
    switch(action.type){
        case fetchStart : 
        return {items : [] , loading : true , error : ''}
        case fetchSucc : 
        return {items : action.payload , loading : false , error: ''}
        case fetchFaield : 
        return {items : [] , loading : false , error: action.payload}
        default : 
        return state
    }
}