<template>
    <div>
        <el-button @click="clickButton">开启</el-button>
       姓名: <el-input style="width:200px" placeholder="请输入内容" v-model="inputval1"></el-input>
       年龄: <el-input style="width:200px" placeholder="请输入内容" v-model="inputval2"></el-input>
        <el-button @click="tbutton">提交</el-button>
        <h1>modelva:</h1>
        <ol>
            <li v-for="(item,index) in modelval" :key="index">{{item}}</li>
        </ol>
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
          Socket:''
      }
  },
    created(){
        console.log('this')
        console.log(this)
        console.log('this.$socket')
        console.log(this.$socket)
        // var self = this;
        // var ws = new WebSocket('ws://10.1.1.171:8080/ws');
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
                apiname:'test',
                api:{
                    "session":"sessionuuid",
		            "vmuuid":"vmuuidasfgsdfgsdfbhfxdgh"
                }
            }
            this.Socket.send(json);
            // this.$options.sockets.event_name = (data) => {
            //     console.log(data)
            // }
        },
        clickButton: function(){
            var self = this;
            this.Socket = new WebSocket('ws://10.1.1.171:8080/ws');
            this.Socket.onopen = function() {
                // Web Socket 已连接上，使用 send() 方法发送数据
                alert("已连接上...");
            };
            this.Socket.onmessage = function (evt) { 
                console.log('data')
                console.log(evt)
                console.log('data')
                self.modelval.push(evt.data)
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