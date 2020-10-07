import {omit} from "lodash"
const likeReducer = (state={

}, action) => {
    switch(action.type){
        case "LIKE":
            return{
                ...state,
                [action.id]:true
            }
        case "DISLIKE":
            return{
                ...state,
                [action.id]:false
            }
        case "REMOVE_LIKES_POSTS":
            return omit(state, action.id)

        default:
            return state
    }
}

export default likeReducer