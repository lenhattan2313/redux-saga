import axios from "../services/axios";
import { API_ENDPOINT } from "../constant";
import * as tasksConstants from "../constant/tasks";

const url = "tasks";

export const getTasks = (params = {}) => ({
  type: tasksConstants.FETCH_TASK,
  payload: { params },
});
export const getTasksSuccess = (data) => ({
  type: tasksConstants.FETCH_TASK_SUCCESS,
  payload: data,
});
export const getTasksFailure = (error) => ({
  type: tasksConstants.FETCH_TASK_FAILURE,
  payload: error,
});
export const getTasksRequest = () => (dispatch) => {
  dispatch(getTasks());
  axios
    .get(`${API_ENDPOINT}${url}`)
    .then((response) => {
      dispatch(getTasksSuccess(response.data));
    })
    .catch((error) => {
      dispatch(getTasksFailure(error));
    });
};
export const filterTask = (keyword) => ({
  type: tasksConstants.FILTER_TASK,
  payload: { keyword },
});
export const filterTaskSuccess = (data) => ({
  type: tasksConstants.FILTER_TASK_SUCCESS,
  payload: data,
});
export const addTasks = ({ title, description }) => ({
  type: tasksConstants.ADD_TASK,
  payload: { title, description },
});
export const addTasksSuccess = (data) => ({
  type: tasksConstants.ADD_TASK_SUCCESS,
  payload: data,
});
export const addTasksFailure = (error) => ({
  type: tasksConstants.ADD_TASK_FAILURE,
  payload: error,
});
export const setTaskEditing = (task) => ({
  type: tasksConstants.SET_TASK_EDITING,
  payload: task,
});

export const updateTasks = ({ title, description, status = 0 }) => ({
  type: tasksConstants.UPDATE_TASK,
  payload: { title, description, status },
});
export const updateTasksSuccess = (data) => ({
  type: tasksConstants.UPDATE_TASK_SUCCESS,
  payload: data,
});
export const updateTasksFailure = (error) => ({
  type: tasksConstants.UPDATE_TASK_FAILURE,
  payload: error,
});

export const deleteTasks = (id) => ({
  type: tasksConstants.DELETE_TASK,
  payload: { id },
});
export const deleteTasksSuccess = (data) => ({
  type: tasksConstants.DELETE_TASK_SUCCESS,
  payload: data,
});
export const deleteTasksFailure = (error) => ({
  type: tasksConstants.DELETE_TASK_FAILURE,
  payload: error,
});
