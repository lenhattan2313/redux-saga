import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import tasksReducer from "./tasks";
import modalReducer from "./modal";
import dashboardReducer from "./dashboard";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  modal: modalReducer,
  form: formReducer,
  dashboard: dashboardReducer,
});
export default rootReducer;
