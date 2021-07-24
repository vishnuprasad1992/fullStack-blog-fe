import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    catIsLoading: false,
    createCatMessage: '',
    createCatError: '',
    getAllCatError: '',
    categories: [],
    getAllCatLoading: false
}

const createCategorySlice = createSlice({
    name: "create-category",
    initialState,
    reducers: {
        createCategoryLoading: state => {
            state.catIsLoading = true;
        },
        createCategorySuccess: (state, { payload }) => {
            state.catIsLoading = false;
            state.createCatMessage = payload;
            state.createCatError = '';
        },
        createCategoryFailed: (state, { payload }) => {
            state.catIsLoading = false;
            state.createCatMessage = '';
            state.createCatError = payload;
        },
        getAllCategoryLoading: state => {
            state.getAllCatLoading = true;
        },
        getAllCategorySuccess: (state, { payload }) => {
            state.getAllCatLoading = false;
            state.categories = payload;
            state.getAllCatError = '';
        },
        getAllCategoryFailed: (state, { payload }) => {
            state.getAllCatLoading = false;
            state.categories = '';
            state.getAllCatError = payload;
        }
    }
});


const { reducer, actions } = createCategorySlice;
const { createCategoryLoading,
    createCategorySuccess,
    createCategoryFailed,
    getAllCategoryLoading,
    getAllCategorySuccess,
    getAllCategoryFailed
} = actions;

export {
    createCategoryLoading,
    createCategorySuccess,
    createCategoryFailed,
    getAllCategoryLoading,
    getAllCategorySuccess,
    getAllCategoryFailed
};

export default reducer