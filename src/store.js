import { configureStore } from '@reduxjs/toolkit';
import createPostReducer from './slices/postsSlice';
import createCategoryReducer from './slices/createCategorySlice';
import createUserReducer from './slices/createUserSlice';
import loginReducer from './slices/loginSlice';

export const store = configureStore({
    reducer:{
        posts: createPostReducer,
        createCategory :createCategoryReducer,
        createUser : createUserReducer,
        login: loginReducer
    }
})