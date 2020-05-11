import * as tasksContants from "../constant/tasks";
import { toastError, toastSuccess } from "../helpers/toastHelpers";

const initialState = { listTasks: [], loading: false, taskEdit: null };

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case tasksContants.FETCH_TASK:
      return {
        ...state,
        listTasks: [],
        loading: true,
      };
    case tasksContants.FETCH_TASK_SUCCESS:
      return {
        ...state,
        listTasks: action.payload,
        loading: false,
      };
    case tasksContants.FETCH_TASK_FAILURE:
      toastError(action.payload);
      return {
        ...state,
        listTasks: [],
        loading: false,
      };
    case tasksContants.FILTER_TASK_SUCCESS:
      return {
        ...state,
        listTasks: action.payload,
        loading: false,
      };
    case tasksContants.ADD_TASK:
      return {
        ...state,
      };
    case tasksContants.ADD_TASK_SUCCESS:
      toastSuccess("Thêm mới công việc thành công");
      return {
        ...state,
        listTasks: [action.payload, ...state.listTasks],
      };
    case tasksContants.ADD_TASK_FAILURE:
      toastError(action.payload);
      return {
        ...state,
      };
    case tasksContants.SET_TASK_EDITING:
      return {
        ...state,
        taskEdit: action.payload,
      };
    case tasksContants.UPDATE_TASK:
      return {
        ...state,
      };
    case tasksContants.UPDATE_TASK_SUCCESS:
      toastSuccess("Cập nhật công việc thành công");
      return {
        ...state,
        listTasks: state.listTasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              title: action.payload.title,
              description: action.payload.description,
              status: action.payload.status,
            };
          }
          return task;
        }),
      };
    case tasksContants.UPDATE_TASK_FAILURE:
      toastError(action.payload);
      return {
        ...state,
      };
    case tasksContants.DELETE_TASK:
      return {
        ...state,
      };
    case tasksContants.DELETE_TASK_SUCCESS:
      toastSuccess("Xóa công việc thành công");
      return {
        ...state,
        listTasks: state.listTasks.filter((task) => task.id !== action.payload),
      };
    case tasksContants.DELETE_TASK_FAILURE:
      toastError(action.payload);
      return {
        ...state,
      };

    default:
      return state;
  }
};
export default tasksReducer;
