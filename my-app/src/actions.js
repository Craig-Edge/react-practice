import { 
  CHANGE_SEARCH_FIELD,  
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED 
} from "./constants"
import axios from "axios";


export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

// example of async action, this is a higher order function, not required for this implementation, but is required for the ThunkMiddleware
export const requestRobots = (dispatch) => {
  dispatch({ type: REQUEST_ROBOTS_PENDING });
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => response.data)
  .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
  .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))
}