import { gettingAllUsers, newRegisteration } from "../api/userApi";
import { 
    createUserLoading, 
    createUserSuccess, 
    createUserFailed,
    getAllUserFailed,
    getAllUserLoading,
    getAllUserSuccess
} from "../slices/createUserSlice";

export const createUserAction = (data) => async dispatch => {
    try {
        dispatch(createUserLoading())
        const result = await newRegisteration(data);
        if(result.data.status === "success"){
           dispatch(createUserSuccess(result.data.message))
        }
        else if(result.data.status === "error"){
           dispatch(createUserFailed(result.data.message));
        }
    } catch (error) {
        const msg = "User already exist";
        if(error.message === "Request failed with status code 401"){
            dispatch(createUserFailed(msg));
        }
        else{
            dispatch(createUserFailed(error.message));
        }
    }
}


export const getAllUsers = () => async dispatch => {
    try {
        dispatch(getAllUserLoading())
        const result = await gettingAllUsers();
        if(result.data.status === "success"){
           dispatch(getAllUserSuccess(result.data.users))
        }
        else if(result.data.status === "error"){
           dispatch(getAllUserFailed(result.data.message));
        }
    } catch (error) {
            dispatch(getAllUserFailed(error.message));
    }
}