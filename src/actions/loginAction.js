import { loginUser } from "../api/userApi";
import {
    loginUserLoading,
    loginUserSuccess,
    loginUserFailed
} from "../slices/loginSlice";

export const loginUserAction = (data) => async (dispatch,getState) => {
    try {
        dispatch(loginUserLoading())
        const result = await loginUser(data);
        if (result.data.status === "success") {
            dispatch(loginUserSuccess(result.data.authUser))
            localStorage.setItem("logged-user",JSON.stringify(result.data.authUser))
        }
        else if (result.data.status === "error") {
            dispatch(loginUserFailed(result.data.message));
        }
    } catch (error) {
        const msg = "invalid credentials";
        if (error.message === "Request failed with status code 401") {
            dispatch(loginUserFailed(msg));
        }
        else {
            dispatch(loginUserFailed(error.message));
        }
    }
}