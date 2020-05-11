import * as modalContants from "../constant/modal";

const initialState = { showModal: false, component: null, title: "" };

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case modalContants.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      };
    case modalContants.HIDE_MODAL:
      return {
        ...state,
        showModal: false,
        title: "",
        component: null,
      };
    case modalContants.CHANGE_MODAL_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case modalContants.CHANGE_MODAL_CONTENT:
      return {
        ...state,
        component: action.payload,
      };
    default:
      return state;
  }
};
export default modalReducer;
