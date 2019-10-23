import Axiosfun from "@/assets/js/axios.js"

export default{
    Login:(json,callback)=>{
        Axiosfun.AxiosGet('/login',json).then(function (response) {
            // handle success
            callback(response.data);
        })
        .catch(function (error) {
            // handle error
            callback(error);
        })
    },
    Register:(json)=>{
        Axiosfun.AxiosPost('/register',json).then(function (response) {
            // handle success
            callback(response.data);
        })
        .catch(function (error) {
            // handle error
            callback(error);
        })
    },
}

