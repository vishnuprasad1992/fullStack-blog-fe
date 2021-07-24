import axios from 'axios'

const loginURL = '/user/login'
const registerURL = '/user/registeration';
const getAllUsersURL = '/user/get-all-users';



export const newRegisteration = (data)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            const result = await axios.post(registerURL,data)
            resolve(result);
        } catch (error) {
            reject(error)
        }
    })
}



export const loginUser = (data)=>{
    return new Promise(async (resolve,reject)=>{
        try {
            const result = await axios.post(loginURL,data)
            resolve(result);
        } catch (error) {
            reject(error)
        }
    })
}




export const gettingAllUsers = ()=>{
    return new Promise(async (resolve,reject)=>{
        try {
            const result = await axios.get(getAllUsersURL)
            resolve(result);
        } catch (error) {
            reject(error)
        }
    })
}