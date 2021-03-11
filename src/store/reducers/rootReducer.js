import lanReducer from "./lanReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  lan: lanReducer,
  
});


export default rootReducer