import { actionTypes } from "redux-form";
import * as dashboardConstant from "../constant/dashboard";

const initialState = {
  showSidebar: true,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case dashboardConstant.SHOW_SIDEBAR:
      return {
        ...state,
        showSidebar: true,
      };
    case dashboardConstant.HIDE_SIDEBAR:
      return {
        ...state,
        showSidebar: false,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
