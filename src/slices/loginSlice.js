import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loginIsLoading :false,
    loginUserMessage:'',
    loginUserError:''
}

const loginSlice = createSlice({
    name:"login-User",
    initialState,
    reducers:{
        loginUserLoading : state=>{
            state.loginIsLoading = true;
        },
        loginUserSuccess : (state,{payload})=>{
            state.loginIsLoading = false;
            state.loginUserMessage = payload;
            state.loginUserError='';
        },
        loginUserFailed : (state,{payload})=>{
            state.loginIsLoading = false;
            state.loginUserMessage = '';
            state.loginUserError= payload;
        }
    }
});


const { reducer,actions } = loginSlice;
const { loginUserLoading,loginUserSuccess,loginUserFailed } = actions;

export { loginUserLoading,loginUserSuccess,loginUserFailed };

export default reducer