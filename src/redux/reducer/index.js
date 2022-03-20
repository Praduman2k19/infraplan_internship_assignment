import CakeReducer from "./cakeReducer"
import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {
        cake : CakeReducer,
    }
)

export default rootReducer;