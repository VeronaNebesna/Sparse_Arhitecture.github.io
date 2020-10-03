const wishListReducer =(state={},
    action) =>{
        switch(action.type){
            case "ADD_LIKE_POSTS":
                return{
                    ...state,
                    [action.id]: state[action.id]
                }
            default:
                return state
        }
    }
export default  wishListReducer 
