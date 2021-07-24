import axios from 'axios';

const addCategoryURL = "/category/add-category"
const getAllCategoryURL = "/category/get-all-categories"

export const addCategory = (data)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            const result = await axios.post(addCategoryURL,data)
                resolve(result);
        } catch (error) {
            reject(error.message);
        }
    })
}


export const getCategories = ()=>{
    return new Promise(async (resolve,reject)=>{
        try {
            const result = await axios.get(getAllCategoryURL);
                resolve(result);
        } catch (error) {
            reject(error.message);
        }
    })
}

