import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userIsLoading: false,
    createUserMessage: '',
    createUserError: '',
    getAllUserIsLoading: false,
    allUsers : [],
    getAllUserError : ''
}

const createUserSlice = createSlice({
    name: "Users",
    initialState,
    reducers: {
        createUserLoading: state => {
            state.userIsLoading = true;
        },
        createUserSuccess: (state, { payload }) => {
            state.userIsLoading = false;
            state.createUserMessage = payload;
            state.createUserError = '';
        },
        createUserFailed: (state, { payload }) => {
            state.userIsLoading = false;
            state.createUserMessage = '';
            state.createUserError = payload;
        },
        getAllUserLoading: state => {
            state.getAllUserIsLoading = true;
        },
        getAllUserSuccess: (state, { payload }) => {
            state.getAllUserIsLoading = false;
            state.allUsers = payload;
            state.getAllUserError = '';
        },
        getAllUserFailed: (state, { payload }) => {
            state.getAllUserIsLoading = false;
            state.allUsers = '';
            state.getAllUserError = payload;
        }
    }
});


const { reducer, actions } = createUserSlice;
const { 
    createUserLoading, 
    createUserSuccess, 
    createUserFailed,
    getAllUserFailed,
    getAllUserLoading,
    getAllUserSuccess
} = actions;

export { 
    createUserLoading, 
    createUserSuccess, 
    createUserFailed,
    getAllUserFailed,
    getAllUserLoading,
    getAllUserSuccess
};

export default reducer