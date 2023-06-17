import * as api from '../api'

export const sendurl = (urlData)=>async(dispatch) => {
    try {
        const { data } = await api.sendUrl(urlData);
        dispatch({ type: 'URL', payload:data})
        
       
    } catch (error) {
        alert(error.response.data.message)
        console.log(error)
    }
}
export const fetchAllUrls = async(dispatch)  => {
    try {
        const { data } = await api.getAllUrls();
       dispatch({ type: 'FETCH_URLS', payload: data})
    } catch (error) {
        console.log(error)
    }
}
export const deleteurl = (id) => async (dispatch) => {
    try {
        await api.deleteUrl(id)
        //fetchAllUrls(dispatch)
        //navigate('/')
    } catch (error) {
        console.log(error)
    }
}
export const fetchAllFilteredUrls = (queryData)=>async(dispatch)  => {
    try {
        const { data } = await api.getFilteredUrls(queryData);
        // console.log(data);
       dispatch({ type: 'FETCH_FILTERED_URLS', payload: data})
    } catch (error) {
        console.log(error)
    }
}
