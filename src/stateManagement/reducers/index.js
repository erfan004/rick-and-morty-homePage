import { combineReducers } from "redux";
import {fetchData} from './reducer'
export default combineReducers({
    charState : fetchData
})