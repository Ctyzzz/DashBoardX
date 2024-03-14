import { fetchRefresh, logOut } from "./slices/auth";

const refreshTokenMiddleware =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (
      (action.error && action.payload && action.payload.status === 401) ||
      (action.error &&
        action.error.message === "Request failed with status code 401")
    ) {
      try {
        await dispatch(fetchRefresh());
        return next(action);
      } catch (error) {
        console.error("Refresh token failed:", error);
        dispatch(logOut());
      }
    }

    return next(action);
  };

export default refreshTokenMiddleware;
