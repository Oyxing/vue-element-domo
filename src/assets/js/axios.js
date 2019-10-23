import axios from 'axios'
const instance = axios.create({
    baseURL: "http://localhost:8083"
  });
export default{
    AxiosGet : (url)=>{
        return new Promise((resolve, reject)=>{
            instance.get(url).then((result) => {
                resolve(result.data)
            }).catch((err) => {
                reject(err)
            });
        })
    },
    AxiosPost : (url,json)=>{
        return new Promise((resolve, reject)=>{
            instance.post(url,json).then((result) => {
                resolve(result.data)
            }).catch((err) => {
                reject(err)
            });
        })
    },
    AxiosPut : (url,json)=>{
        return new Promise((resolve, reject)=>{
            instance.put(url,json).then((result) => {
                resolve(result.data)
            }).catch((err) => {
                reject(err)
            });
        })
    },
    AxiosDelete : (url)=>{
        return new Promise((resolve, reject)=>{
            instance.delete(url).then((result) => {
                resolve(result.data)
            }).catch((err) => {
                reject(err)
            });
        })
    }
}
