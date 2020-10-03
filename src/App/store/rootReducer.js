import {combineReducers} from "redux"
import likeReducer from "./likeReducer"
import wishListReducer from "./wishListReducer" 

const rootReducers = combineReducers({
    likeState : likeReducer,
    wishListState: wishListReducer
})

export default rootReducers 