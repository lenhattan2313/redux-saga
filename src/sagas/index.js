import {
  fork, take, call, put, delay, takeLatest, select, takeEvery,
} from "redux-saga/effects";
import {
  FETCH_TASK, FILTER_TASK, ADD_TASK, UPDATE_TASK, DELETE_TASK,
} from "../constant/tasks";
import {
  fetchListTask, addTask, updateTask, deleteTask,
} from "../apis/tasks";
import { STATUS_CODE, STATUSES } from "../constant";
import {
  getTasksSuccess,
  getTasksFailure,
  addTasksSuccess,
  addTasksFailure,
  getTasks,
  updateTasksFailure,
  updateTasksSuccess,
  deleteTasksSuccess,
  deleteTasksFailure,
} from "../actions/tasks";
import { hideModal } from "../actions/modal";

function* watchFetchListTaskAction() {
  while (true) {
    const action = yield take(FETCH_TASK); // block
    const { params } = action.payload;
    const response = yield call(fetchListTask, params); // block

    const { status, data } = response;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(getTasksSuccess(data));
    } else {
      yield put(getTasksFailure(data));
    }
  }
}
function* addTaskSaga({ payload }) {
  const { title, description } = payload;
  const response = yield call(addTask, {
    title,
    description,
    status: STATUSES[0].value,
  });
  const { data, status } = response;
  if (status === STATUS_CODE.CREATED) {
    yield put(addTasksSuccess(data));
    yield put(hideModal());
  } else {
    yield put(addTasksFailure(data));
  }
}
function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  yield put(getTasks({ q: keyword }));
}
function* updateTaskSaga({ payload }) {
  const { title, description, status } = payload;

  const taskEditing = yield select((state) => state.tasks.taskEdit);
  const response = yield call(updateTask, { title, description, status }, taskEditing.id);
  const { data, status: statusCode } = response;
  if (statusCode === STATUS_CODE.SUCCESS) {
    yield put(updateTasksSuccess(data));
    yield put(hideModal());
  } else {
    yield put(updateTasksFailure(data));
  }
}
function* deleteTaskSaga({ payload }) {
  const { id } = payload;
  const response = yield call(deleteTask, id);
  const { status } = response;
  if (status === STATUS_CODE.SUCCESS) {
    yield put(deleteTasksSuccess(id));
    yield put(hideModal());
  } else {
    yield put(deleteTasksFailure("Delete error"));
  }
}
function* rootSaga() {
  yield fork(watchFetchListTaskAction); // non-blocking
  yield takeLatest(FILTER_TASK, filterTaskSaga);
  yield takeEvery(ADD_TASK, addTaskSaga);
  yield takeLatest(UPDATE_TASK, updateTaskSaga);
  yield takeLatest(DELETE_TASK, deleteTaskSaga);
}
export default rootSaga;
