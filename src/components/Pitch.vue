<template>
    <div class="pitch">
        <ul>
            <li v-for="(item,index) in PitchData" :key="index">
                <div>
                    <div class="image">
                        <div class="shade1" v-bind:class="{'shade':index === currentIndex}" @mouseenter="mous(index)" @mouseleave="currentIndex=''"></div>
                        <img :src="item.goods_thumb" alt="">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="less">
    .pitch{
        position:relative;
        ul{
            position: absolute;
            width:100%;
            li{
                float:left;
                .check{
                   
                }
                div{
                    width:100%;
                    padding:10px 0px 0px 22px;
                    
                    .image{
                        position:relative;
                        width:300px;
                        overflow: hidden;
                        img{
                            float:left;
                            width:100%;
                        }
                        .shade1{
                            position: absolute;
                            padding: 0px 0px 300px 0px;
                        }
                        .shade{
                            transition:2s;
                            opacity: 0.6;
                            background-color: #324157;
                        }
                    }
                }
            }
        }
    }

</style>
<script>
    export default {
        data(){
            return {
                PitchData:[],
                currentIndex:''
            }
        },
        created(){
            this.GetData()
        },
        methods:{
             mous(index){
                    this.currentIndex = index
            },
            GetData(){
                if ("WebSocket" in window){
                        alert("您的浏览器支持 WebSocket!");
                        // 打开一个 web socket
                            var ws = new WebSocket("wss://10.1.1.171:8080");
                            var seft = this
                            ws.onopen = function(evt) { 
                                console.log("Connection open ..."); 
                                ws.send("wqeqwewqesad");
                            };
                            ws.onmessage = function(evt) {
                            console.log( "Received Message: " + evt.data);
                            
                            ws.close();
                            };
                            seft.$http.get('http://h6.duchengjiu.top/shop/api_goods.php')
                                    .then((res)=>{
                                        seft.PitchData = res.data.data
                                        console.log(res)
                                    })
                                    .catch((error)=>{
                                        console.log(error)
                                    })
                            // ws.onclose = function(evt) {
                            //     console.log("Connection closed.");
                            // };  
                }else{
                // 浏览器不支持 WebSocket
                    alert("您的浏览器不支持 WebSocket!");
                }

                
                }
        }
    }

</script>