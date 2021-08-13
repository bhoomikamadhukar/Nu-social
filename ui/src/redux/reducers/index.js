import { combineReducers } from 'redux'
import auth from './authReducer'
import theme from './themeReducer'
import profile from './profileReducer'
import alert from './alertReducer'
import status  from './statusReducer'
import homePosts from './postReducer'
export default combineReducers ({
    auth,
    alert,
    theme,
    profile,
    status,
    homePosts,
})