import { combineReducers } from "redux";
import favouriteReducer from "../Store/reducers/favouriteReducer"
const rootReducer =  combineReducers({
    favourite :favouriteReducer
})

export default rootReducer;