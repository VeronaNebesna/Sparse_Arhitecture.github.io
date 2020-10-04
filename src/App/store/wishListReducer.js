const wishListReducer =(state={},
    action) =>{
        switch(action.type){
            case "ADD_LIKE_POSTS":
                return{
                    ...state,
                    [action.id]: state[action.id]
                } 
            // case "SUM_OF_POSTS":
            //     return{
            //         ...state,
            //         [action.id]: (state[action.id] || 0 )  + 1
            //     }
            default:
                return state
        }
    }
export default  wishListReducer 
