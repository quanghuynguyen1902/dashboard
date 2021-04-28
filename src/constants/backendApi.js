const api = {
  HOME: "/",
  LOGIN: "http://127.0.0.1:8000/api/token/",
  REGISTER: "http://127.0.0.1:8000/api/register/",
  DASHBOARD: "http://127.0.0.1:8000/api/requests-data/",
  DASHBOARD_FILTER: "http://127.0.0.1:8000/api/requests-data/filter/",
  USERS: "http://127.0.0.1:8000/api/requests-data/users/",
  CATEGORIES: "/categories/",
  USER_DETAILS: "http://127.0.0.1:8000/api/requests-data/user-detail/",
  EDIT_USER: "/users/:slug/edit/",
  REQUESTS_ANALYTIC:
    "http://127.0.0.1:8000/api/requests-data/request-analytic/",
  API_KEY: "http://127.0.0.1:8000/api/api-key/",
  INFORMATION: "http://127.0.0.1:8000/api/get-user/",
  NOTIFICATION_COUNT: "http://127.0.0.1:8000/api/notification_count/",
  NOTIFICATION: "http://127.0.0.1:8000/api/notification/"
};

export default api;
