import { combineReducers } from "redux";
import authReducer from './auth.js'
import UrlReducer from './url.js'
import getUrlReducer from './getUrl.js'
import currentUserReducer from './currentUser.js'
import getFilteredUrlReducer from './filteredUrls.js'


export default combineReducers({
    authReducer,UrlReducer,getUrlReducer,currentUserReducer,getFilteredUrlReducer
})