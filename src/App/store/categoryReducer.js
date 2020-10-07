const categoryReducer = (state={

}, action)=>
{
    switch (action.type) {
        case "changeCategory":
            return{
                [action.id]: action.category
            }
        default:
            return state
    }
}

export default categoryReducer