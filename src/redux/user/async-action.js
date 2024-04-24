import {
  apiAddUser,
  apiDeleteUser,
  apiGetUser,
  apiGetUserList,
  apiUpdateUser,
} from "../../api/user";
import {
  setDataUserDetails,
  setDataUserList,
  setErrorUserDetails,
  setErrorUserList,
  setLoadingUserDetails,
  setLoadingUserList,
} from "./slice";

export const getUser =
  ({ id }) =>
  async (dispatch, getState) => {
    const data = getState().user.details?.[id]?.data;
    if (data) return;

    try {
      dispatch(setLoadingUserDetails({ id }));
      const resData = await apiGetUser({ id });
      dispatch(setDataUserDetails({ id, data: resData }));
    } catch (e) {
      console.log(e);
      dispatch(setErrorUserDetails({ id }));
    }
  };

export const updateUser =
  ({ id, data }) =>
  async (dispatch, getState) => {
    try {
      dispatch(setLoadingUserDetails({ id }));
      const resData = await apiUpdateUser({ id, data });
      dispatch(setDataUserDetails({ id, data: resData }));
    } catch (e) {
      console.log(e);
      dispatch(setErrorUserDetails({ id }));
    }
  };

export const addUser =
  ({ data }) =>
  async (dispatch, getState) => {
    try {
      const resData = await apiAddUser({ data });
    } catch (e) {}
  };

export const getUserList =
  ({ page }) =>
  async (dispatch, getState) => {
    const data = getState().user.list?.[page]?.data;
    if (data) return;

    try {
      dispatch(setLoadingUserList({ page }));
      const resData = await apiGetUserList({ offset: page * 10 });
      dispatch(setDataUserList({ data: resData, page }));
    } catch (e) {
      setErrorUserList({ page });
    }
  };

export const deleteUser =
  ({ id, page }) =>
  async (dispatch, getState) => {
    try {
      dispatch(setLoadingUserList({ page }));
      const resData = await apiDeleteUser({ id });
      dispatch(getUserList({ page }));
    } catch (e) {
      setErrorUserList({ page });
    }
  };
