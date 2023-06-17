const getUrlReducer = (state=[], action) => {
    switch (action.type) {
        case 'FETCH_URLS':
            return action.payload;
        default:
            return state;
    }
}

export default getUrlReducer