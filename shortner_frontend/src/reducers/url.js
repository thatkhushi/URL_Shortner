const UrlReducer = (state= {data: null}, action) => {
    switch (action.type) {
        case 'URL':
            // localStorage.setItem('Profile', JSON.stringify({ ...action?.data}))
            return action.payload;
        default:
            return state;
    }
}

export default UrlReducer