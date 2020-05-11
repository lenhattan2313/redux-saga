import AdminHomePage from "../container/AdminHomePage";
import TaskBoard from "../container/TaskBoard";
import LoginPage from "../container/LoginPage";
import SignupPage from "../container/SignupPage";

export const API_ENDPOINT = "https://5ead91a04350860016e138cc.mockapi.io/api/redux-saga/";
export const STATUSES = [
  {
    value: 0,
    label: "READY",
  },
  {
    value: 1,
    label: "IN PROGRESS",
  },
  {
    value: 2,
    label: "COMPLETED",
  },
];
export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export const ADMIN_ROUTES = [
  {
    path: "/admin",
    name: "Trang quản trị",
    exact: true,
    component: AdminHomePage,
  },
  {
    path: "/admin/task-board",
    name: "Quản lý công việc",
    component: TaskBoard,
  },
];

export const ROUTES = [
  {
    path: "/login",
    name: "Đăng nhập",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "Đăng Ký",
    component: SignupPage,
  },
];
