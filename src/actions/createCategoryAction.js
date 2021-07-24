import { addCategory, getCategories } from "../api/categoryApi";
import {
    createCategoryLoading,
    createCategorySuccess,
    createCategoryFailed,
    getAllCategoryLoading,
    getAllCategorySuccess,
    getAllCategoryFailed
} from "../slices/createCategorySlice";

export const createCategoryAction = (data) => async dispatch => {
    try {
        dispatch(createCategoryLoading());
        const result = await addCategory(data);
        if (result.data.status === "success") {
            dispatch(createCategorySuccess(result.data.message))
        }
        else {
            dispatch(createCategoryFailed(result.data.message));
        }

    } catch (error) {
        dispatch(createCategoryFailed(error.message));
    }
}

export const getAllCategoryAction = () => async dispatch => {
    try {
        dispatch(getAllCategoryLoading());
        const result = await getCategories();
        if (result.data.status === "success") {
            dispatch(getAllCategorySuccess(result.data.categories))
        }
        else {
            dispatch(getAllCategoryFailed(result.data));
        }

    } catch (error) {
        dispatch(getAllCategoryFailed(error.message));
    }
}