import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    createMessage: '',
    createError: '',
    postIsLoading: false,
    allPosts: [],
    getAllPostError: '',
    singlePostIsLoading: false,
    SinglePosts: '',
    getSinglePostError: '',
    updatePostIsLoading: false,
    updatePost:'',
    updatePostError:''
}

const postSlice = createSlice({
    name: "create-post",
    initialState,
    reducers: {
        createPostLoading: state => {
            state.isLoading = true;
        },
        createPostSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.createMessage = payload;
            state.createError = '';
        },
        createPostFailed: (state, { payload }) => {
            state.isLoading = false;
            state.createMessage = '';
            state.createError = payload;
        },
        getAllPostLoading: state => {
            state.postIsLoading = true;
        },
        getAllPostSuccess: (state, { payload }) => {
            state.postIsLoading = false;
            state.allPosts = payload;
            state.getAllPostError = '';
        },
        getAllPostFailed: (state, { payload }) => {
            state.postIsLoading = false;
            state.allPosts = '';
            state.getAllPostError = payload;
        },
        getSinglePostLoading: state => {
            state.singlePostIsLoading = true;
        },
        getSinglePostSuccess: (state, { payload }) => {
            state.singlePostIsLoading = false;
            state.SinglePosts = payload;
            state.getSinglePostError = '';
        },
        getSinglePostFailed: (state, { payload }) => {
            state.singlePostIsLoading = false;
            state.SinglePosts = '';
            state.getSinglePostError = payload;
        },
        updatePostLoading: state => {
            state.updatePostIsLoading = true;
        },
        updatePostSuccess: (state, { payload }) => {
            state.updatePostIsLoading = false;
            state.updatePost = payload;
            state.updatePostError = '';
        },
        updatePostFailed: (state, { payload }) => {
            state.updatePostIsLoading = false;
            state.updatePost = '';
            state.updatePostError = payload;
        }
    }
});


const { reducer, actions } = postSlice;
const {
    createPostLoading,
    createPostSuccess,
    createPostFailed,
    getAllPostFailed,
    getAllPostLoading,
    getAllPostSuccess,
    getSinglePostFailed,
    getSinglePostLoading,
    getSinglePostSuccess,
    updatePostFailed,
    updatePostLoading,
    updatePostSuccess
} = actions;

export {
    createPostLoading,
    createPostSuccess,
    createPostFailed,
    getAllPostFailed,
    getAllPostLoading,
    getAllPostSuccess,
    getSinglePostFailed,
    getSinglePostLoading,
    getSinglePostSuccess,
    updatePostFailed,
    updatePostLoading,
    updatePostSuccess
};

export default reducer