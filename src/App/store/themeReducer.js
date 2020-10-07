const themeReducer = (state={
}, action) => {
    switch (action.type) {
        case "ADD_WHITE_THEME":
            return{
                [state.color]: true
            }
        case "ADD_DARK_THEME":
            return{
                [state.color]: false
            }      
        default:
            return state
    }
}

export default themeReducer