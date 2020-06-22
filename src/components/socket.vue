<template>
    <div>
        <el-button @click="clickButton">开启</el-button>
       姓名: <el-input style="width:200px" placeholder="请输入内容" v-model="inputval1"></el-input>
       年龄: <el-input style="width:200px" placeholder="请输入内容" v-model="inputval2"></el-input>
        <el-button @click="tbutton">提交</el-button>
        <el-button @click="tbutton2">提交2</el-button>
        <el-button @click="tbutton3">提交2</el-button>
        <h1>modelva:</h1>
        <ol>
            <li v-for="(item,index) in modelval" :key="index">{{item}}</li>
        </ol>
        {{Socket1}}
        <br/>
        {{Socket2}}<br/>
        {{Socket3}}
    </div>
</template>
<script>
export default{
    data(){
      return{
          id:'',
          inputval1:'',
          inputval2:'',
          modelval:[{User:'q',Content:'e'}],
          Socket:'',
          Socket1:{},
          Socket2:{},
          Socket3:{}
      }
  },
    created(){
        console.log('this')
        console.log(this)
        console.log('this.$socket')
        console.log(this.$socket)
        // var self = this;
        // var ws = new WebSocket('ws://10.1.1.144:1234/ws');
        // console.log("ws")
        // console.log(ws)
        // ws.onopen = function() {
        //     // Web Socket 已连接上，使用 send() 方法发送数据
        //     ws.send("发送数据");
        //     alert("数据发送中...");
        // };
        // ws.onmessage = function (evt) { 
        //     var received_msg = evt.data;
        //     alert("数据已接收...");
        // };
        //    ws.onclose = function()
        //    { 
        //       // 关闭 websocket
        //       alert("连接已关闭..."); 
        //    };
    },
    sockets:{
        connect: function(){  //这里是监听connect事件
            console.log('socket connected');
            console.log('this.$socket.id')
            console.log(this.$socket.id)
            this.id=this.$socket.id
        },
        customEmit: function(val){
            // 这个方法是由socket服务器触发的
            console.log(val)
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
        }
    },
    methods: {
        tbutton(){
            var json = {
                // apiname:'testaa',
                Companypeoplenum:{
                }
            }
            this.Socket.send(JSON.stringify(json));
            this.$options.sockets.event_name = (data) => {
                console.log(data)
            }
             this.Socket.onmessage = (evt)=> { 
                console.log(JSON.parse(evt.data))
          this.Socket1 = JSON.parse(evt.data)

            };
        }, 
        tbutton2(){
            var json = {
                // apiname:'testaa',
                Areacompany:{
                }
            }
            this.Socket.send(JSON.stringify(json));
            this.$options.sockets.event_name = (data) => {
                console.log(data)
            }
             this.Socket.onmessage = (evt)=> { 
                console.log(JSON.parse(evt.data))
          this.Socket2 = JSON.parse(evt.data)

            };
        },
        tbutton3(){
            var json = {
                // apiname:'testaa',
                Compentyears:{
                }
            }
            this.Socket.send(JSON.stringify(json));
            this.$options.sockets.event_name = (data) => {
                console.log(data)
            }
             this.Socket.onmessage = (evt)=> { 
                console.log(JSON.parse(evt.data))
          this.Socket3 = JSON.parse(evt.data)

            };
        },
        clickButton(){
            var self = this;
            this.Socket = new WebSocket('ws://localhost:9051/ws/inform');
            // this.Socket = new WebSocket('ws://10.1.1.120:8083//api/Websocke');
            this.Socket.onopen = function() {
                // Web Socket 已连接上，使用 send() 方法发送数据
                alert("已连接上...");
            };
           
            this.Socket.onclose = function(){ 
                    // 关闭 websocket
                alert("连接已关闭...");
            };
            // $socket is socket.io-client instance
            // this.$socket.emit('emit_method', val);
        },
    }
}
</script>