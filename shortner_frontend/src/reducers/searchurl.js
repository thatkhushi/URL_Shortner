const searchUrlReducer = (state = null, action) => {
    switch(action.type){
        case 'FETCH_CURRENT_URL':
            return action.payload;
        default:
            return state;
    }
}

export default searchUrlReducer;