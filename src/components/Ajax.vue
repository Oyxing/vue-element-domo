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
            <el-button @click="crontabAjax">crontabAjax</el-button>
            <el-button @click="AxiosGet">AxiosGet</el-button>
            <el-button @click="AxiosPost">AxiosPost</el-button>
            <el-button @click="AxiosPut">AxiosPut</el-button>
            <el-button @click="AxiosDelete">AxiosDelete</el-button>
            <el-button @click="setsessions">setsessions</el-button>
            <el-button @click="getsessions">getsessions</el-button> 
            <el-button @click="AxiospostDelete">测试/api/login/Token</el-button>
            <el-button @click="AxiospostCont">AxiospostCont</el-button>
            <el-button @click="Platformlist">Platformlist</el-button>
            <el-button @click="webstyleJson">webstyleJson</el-button>
            <el-button @click="AxiospostLogin">AxiospostLoginAdmin登录</el-button>
            <el-button @click="goodsorderUnify">goodsorderUnify统一下单</el-button>
            
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
         crontabAjax(){
            this.axios.post('https://tool.lu/crontab/ajax.html',{
                    "type": "1",
                        "expression": "0 */12 * * *"
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
        webstyleJson(){
            this.axios.get('http://localhost:9082/api/common/webstyleJson')
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
        goodsorderUnify(){
            this.axios.post('http://localhost:9051/api/wx/goodsorder/unify',{
                    "userid": "1TSMfygdhBKJky34F4JezHvFj0s",
                    "boundid": [
                        "4uPaD1G0It0zEGKaJuaDX9CCCklius0Xf6",
                        "z5E99LtmwBqndlEKaan3KMozjOHQltBu5C"
                    ],
                    "mode": "yes"
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
            this.axios.put('http://localhost:8095/operation/12345', {
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
         const instance =  this.axios.create({
                baseURL: 'http://localhost:9051',
                 headers: {Token:'eyJhbGciOiJITUFDU0hBMjU2IiwiaXNzIjoiYWRtaW4iLCJleHAiOjE1ODU4MDc1NTYsInN1YiI6IuS4u%2BmimCIsIm5iZiI6MTU4NTgwNDI1NiwiYXVkIjoiYWRtaW4iLCJpYXQiOjE1ODU4MDM5NTYsImp0aSI6ImRkNDQzNzI1MTkxNTVhOTQ3MzlkYTQxMmFkNDYwZWYxIiwic2lnbmF0dXJlIjoiZjc1ZDhiZGUyNDZlOWFlMmY0NTNhZDFiNGNiMjY3NzBlZGU2NGFhNGRlOTRhYWQ5ZDhmMGEyNzMxNzc1ZjVmZiIsInN0YXR1cyI6MSwiZGF0YSI6IntcImlkXCI6XCIxVXBzTmR5em9EZGNKTmlGQ1pNemVBU3M5NUdcIixcIm5pY2tuYW1lXCI6XCJcXHU3YmExXFx1NzQwNlxcdTU0NThcIixcImxvZ29cIjpcIlxcL3N0YXRpY1xcL2ltZ1xcL3VuaWZ5bG9nby5wbmdcIixcInVzZXJuYW1lXCI6XCJhZG1pblwiLFwicGFzc3dvcmRcIjpcImZiZmY5YzViNTYxMTk1YzEzOWI1ZTE3NjI3YmYzYzdkOWYzOTBjOWUwN2Y3YjM2ZTQ2MzQ5ODUzMWI4ODU4YWQzNmVmYTVhYTM0MmUzOTg2ZGJjNjk4M2UyMTM1MjQ4ZDg3MWVmYzUyMDZjNDlhOWIzNTBkN2U1NzI0MjBkOTFjXCIsXCJjcmVhdGVkXCI6XCIyMDE5LTEyLTExIDExOjQ3OjEyXCJ9In0%3D'}
                });
            instance.get('/api/admin/setasdtype')
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

         AxiospostLogin(){
            this.axios.post('http://localhost:9051/api/admin/login',{
                        "username":"admin",
                        "password":"fbff9c5b561195c139b5e17627bf3c7d9f390c9e07f7b36e463498531b8858ad36efa5aa342e3986dbc6983e2135248d871efc5206c49a9b350d7e572420d91c"
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
        //    this.axios.delete('http:/localhost:8095/api/activat/initline/1SrTnxB1eKPYDvCqOo9Eey4XjEu')
        //         .then(function (response) {
        //             // handle success
        //             console.log(response.data);
        //         })
        //         .catch(function (error) {
        //             // handle error
        //             console.log(error);
        //         })
        //         .finally(function () {
        //             // always executed
        //         });

              const options = {
                        method: 'DELETE',
                        url:"http:/localhost:8095/api/activat/initline/1SrTnxB1eKPYDvCqOo9Eey4XjEu",
                };
                this.axios(options)
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