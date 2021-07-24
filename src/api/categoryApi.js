import axios from 'axios';

// const addCategoryURL = "/category/add-category"
// const getAllCategoryURL = "/category/get-all-categories"

export const addCategory = (data)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            const result = await axios.post("https://blog-start-backend.herokuapp.com/api/category/add-category",data)
                resolve(result);
        } catch (error) {
            reject(error.message);
        }
    })
}


export const getCategories = ()=>{
    return new Promise(async (resolve,reject)=>{
        try {
            const result = await axios.get("https://blog-start-backend.herokuapp.com/api/category/get-all-categories");
                resolve(result);
        } catch (error) {
            reject(error.message);
        }
    })
}

