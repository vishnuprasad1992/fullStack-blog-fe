import axios from 'axios';

const addPostURL = "/posts/add-post"
// const getAllPostsURL = "/posts/get-all-posts"
// const getSinglePostsURL = "/posts/get-post/"
const updatePostURL = "/posts/update-post/"



export const addNewPost = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data)
            const result = await axios.post(addPostURL, data)

            resolve(result);
        } catch (error) {
            reject(error.message);
        }
    })
}


export const gettingAllPosts = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get("https://blog-start-backend.herokuapp.com/posts/get-all-posts");
            resolve(result);
        } catch (error) {
            reject(error.message);
        }
    })
}


export const getPost = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get("https://blog-start-backend.herokuapp.com/posts/get-post" + id);
            resolve(result);
        } catch (error) {
            reject(error.message);
        }
    })
}

export const postToBeUpdated = (data1,data2,id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.put(updatePostURL+id, { data1,data2 })
            resolve(result);
        } catch (error) {
            reject(error.message);
        }
    })
}
