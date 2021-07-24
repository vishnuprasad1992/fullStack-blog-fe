import { addNewPost, gettingAllPosts,getPost, postToBeUpdated } from "../api/postApi";
import { 
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
} from "../slices/postsSlice";

export const createPostAction = (data) =>async dispatch => {
    try {
        dispatch(createPostLoading())
        const result = await addNewPost(data)
        if(result.data.status === "success"){
            dispatch(createPostSuccess(result.data.message))
        }else if(result.data.status === "error"){
            dispatch(createPostFailed(result.data.message));
        }
        else{
            dispatch(createPostFailed("something went wrong"));
        }
    } catch (error) {
        dispatch(createPostFailed(error.message));
    }
}

export const updatePostAction = (data1,data2,id) =>async dispatch => {
    try {
        if(data1.length===0){
            dispatch(updatePostFailed("Post not updated"));            
        }
        dispatch(updatePostLoading())
        const result = await postToBeUpdated(data1,data2,id)

        if(result.data.status === "success"){
            dispatch(updatePostSuccess(result.data.message))
        }else if(result.data.status === "error"){
            dispatch(updatePostFailed(result.data.message));
        }
        else{
            dispatch(updatePostFailed("something went wrong"));
        }
    } catch (error) {
        dispatch(updatePostFailed(error.message));
    }
}


export const getAllPosts = () =>async dispatch => {
    try {
        dispatch(getAllPostLoading())
        const result = await gettingAllPosts()
        if(result.data.status === "success"){
            dispatch(getAllPostSuccess(result.data.posts))
        }else if(result.data.status === "error"){
            dispatch(getAllPostFailed(result.data.message));
        }
        else{
            dispatch(getAllPostFailed("something went wrong"));
        }
    } catch (error) {
        dispatch(getAllPostFailed(error.message));
    }
}

export const getSinglePost = (id) =>async dispatch => {
    try {
        dispatch(getSinglePostLoading())
        const result = await getPost(id)
        if(result.data.status === "success"){
            dispatch(getSinglePostSuccess(result.data.post))
        }else if(result.data.status === "error"){
            dispatch(getSinglePostFailed(result.data.message));
        }
        else{
            dispatch(getSinglePostFailed("something went wrong"));
        }
    } catch (error) {
        dispatch(getSinglePostFailed(error.message));
    }
}