const getFilteredUrlReducer = (state=[], action) => {
    switch (action.type) {
        case 'FETCH_FILTERED_URLS':
            return action.payload;
        default:
            return state;
    }
}

export default getFilteredUrlReducer