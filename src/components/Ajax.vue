<template>
    <div>
        ajax    
        <div class="block">
            <span class="demonstration">折叠展示Tag</span>
            <el-cascader
                @change="changes"
                :options="options"
                :props="props"
                collapse-tags
                clearable></el-cascader>
            </div>    
            <el-button @click="AxiosGet">AxiosGet</el-button>
            <el-button @click="AxiosPost">AxiosPost</el-button>
            <el-button @click="AxiosPut">AxiosPut</el-button>
            <el-button @click="AxiosDelete">AxiosDelete</el-button>
            <el-button @click="setsessions">setsessions</el-button>
            <el-button @click="getsessions">getsessions</el-button> 
            <el-button @click="AxiospostDelete">api/login</el-button>
            <el-button @click="AxiospostCont">AxiospostCont</el-button>
            <el-button @click="Platformlist">Platformlist</el-button>
            
            <el-input type="textarea" v-model="markdown"></el-input>
    </div>
</template>
<script>
import qs from 'qs';
import axiosfun from "@/assets/js/axios.js"
import userfun from "@/assets/js/user.js"

export default {
    data() {
        return {
            markdown:"<p>sadsa11111111111dasdasdassdada11111sadasdas1111111111d</pasdasdsaaasdsd>dadasdasta:image/jpeg;asdaseRXdasdahpZgAATU0AKgAAdgAdEAdAMdadaAAAABCfYAasdasdasdasdasAAEBAAMAAAABDbMAAAECAAMAaAAADdaAAAAngEGAAMAAAABAAIAAAESAAMAAAABAAEAAAEVAAMAAAABAAMAAAEaAAUAAAAB",
            props: { 
                multiple: true,
                value:"name",
                label:"name"
             },
            options: [],
            ORG1_TOKEN:'',
            ORG2_TOKEN:'',
            users1:{
                "username":"Jim","orgName":"Org1"
            },
            users2:{
                "username":"Barry","orgName":"Org2"
            },
            channels:{
                "channelName":"mychannel",
	            "channelConfigPath":"../artifacts/channel/mychannel.tx"
            }
        }
    },
    created(){
        console.log(userfun)
        console.log(axiosfun)
            // this.AxiosGet()  
            this.Platformlist()
    },
    methods:{
        getsessions(){ 
            this.axios.defaults.withCredentials=true;
            const instance = this.axios.create({
                baseURL: "http://localhost:8095"
                });
             const options = {
                        method: 'POST',
                        url:'/getsessions',
                };
                instance(options)
        },
        setsessions(){
            this.axios.defaults.withCredentials=true;
            const instance = this.axios.create({
                baseURL: "http://localhost:8095"
                });
                const options = {
                        method: 'POST',
                        url:'/setsessions',
                };
                instance(options)
        },
        changes(value){
            console.log(value)
        }, 
        AxiosGet({a ,a1={}} = json){
            userfun.AxiosGet('12345')
                
        },
        AxiosPost(){
            userfun.AxiosPost({
                firstname: 'Fred',
                lastname: 'Flintstone'
            })
           
        },

        Platformlist(){
            const instance =  this.axios.create({
                baseURL: 'http://localhost:8095',
                 headers: {authorization: ''}
                });
 
           instance.get('/api/Platformlist')
                .then(function (response) {
                    // handle success
                    console.log(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },
        AxiosPut(){
            this.axios.put('http://localhost:8083/operation/12345', {
                firstname: 'Fred',
                lastname: 'Flintstone'
            })
                .then(function (response) {
                    // handle success
                    console.log(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },
        AxiospostDelete(){
            this.axios.post('http://localhost:8095/api/login',{
                    "username":"admin",
                    "password":"edbd881f1ee2f76ba0bd70fd184f87711be991a0401fd07ccd4b199665f00761afc91731d8d8ba6cbb188b2ed5bfb465b9f3d30231eb0430b9f90fe91d136648"
                    })
                .then(function (response) {
                    // handle success
                    console.log(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },  
        AxiospostCont(){
            this.axios.post('http://localhost:8095/content/markdown/1PlH4nQZXpKQliv1p0jYYOKnBDf',{
                    "markdown":this.markdown
                    })
                .then(function (response) {
                    // handle success
                    console.log(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },  
        AxiosDelete(){
           this.axios.delete('http://localhost:8083/operation/12345,12345,12345',{
                firstname: 'Fred',
                lastname: 'Flintstone'
            })
                .then(function (response) {
                    // handle success
                    console.log(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },
        AxiosGets(){
                const data = {
                        token:"eyJuYW1lIjoibmFtZSIsImV4cCI6MTU2MjU3NjMzMCwiYXVkaWVuY2UiOnRydWUsImZhY2lsaXR5bmFtZSI6Ijo6MSJ9.QWxsRXpEb2NrZXKn5gvEMYMXCYvRAsKuKGgSJr2D1VglXwqLQTBXhoFh5w==",
                        apiname:{
                           QueryNetWorkLists:true
                        }
                    };
                const options = {
                        method: 'POST',
                        data:data,
                        url:"http://localhost:8080/ApiEz/DackerApi",
                };
                this.axios(options)
            //     console.log(res)


            // this.axios.defaults.baseURL = 'http://localhost:8080';
            // this.axios.defaults.headers.post['Content-Type'] = 'application/json';

            // // var json = {addr:"10.1.1.111",syncbool:true}
            // this.axios.get("http://localhost:8080/ApiEz/Login",{"password":"edbd881f1ee2f76ba0bd70fd184f87711be991a0401fd07ccd4b199665f00761afc91731d8d8ba6cbb188b2ed5bfb465b9f3d30231eb0430b9f90fe91d136648"})
            // .then((res)=>{
            //     console.log(res)
               
            // })
            // .catch((error)=>{
            //     console.log(error)
            // })
        }
    }
}
</script>