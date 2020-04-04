export const MENU_ACTION_LOADING = "MENU_ACTION_LOADING";
export const MENU_ACTION_SUCCESS = "MENU_ACTION_SUCCESS";
export const MENU_ACTION_FAILED = "MENU_ACTION_FAILED";

export const menuActionLoading = () => ({ type: MENU_ACTION_LOADING });
export const menuActionSuccess = (data) => ({
  type: MENU_ACTION_SUCCESS,
  payload: data,
});
export const menuActionFailure = (error) => ({
  type: MENU_ACTION_FAILED,
  payload: error,
});

export function menuAction(value) {
  return function (dispatch) {
    dispatch(menuActionLoading());
        return (
          dispatch(menuActionSuccess(value))
        )
  };
}
