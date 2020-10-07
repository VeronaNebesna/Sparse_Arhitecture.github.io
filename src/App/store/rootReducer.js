import {combineReducers} from "redux"
import likeReducer from "./likeReducer"
import wishListReducer from "./wishListReducer" 
import categoryReducer from "./categoryReducer"
import themeReducer from "./themeReducer"
const rootReducers = combineReducers({
    likeState : likeReducer,
    wishListState: wishListReducer,
    categoryList: categoryReducer,
    colorTheme : themeReducer
})

export default rootReducers 