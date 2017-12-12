import {combineReducers} from "redux"
import tweets from "./tweetReducer"
import users from "./userReducer"

export default combineReducers({
    tweets,
    users
})