<template>
<div>
    <el-row :gutter="20">
        <span  v-for="(item,index) in arrdata" :key="index">
            <el-col :span="6">
                <span>{{item}}</span>
            </el-col>
            <el-col :span="6">
                <el-button @click="del(item)"> 删除</el-button>
            </el-col>
        </span>
        
    </el-row>
    <h2 style="margin:100px auto">novnc</h2>
    <canvas id="noVNC"></canvas>
</div>
</template>
<script>
import RFB from 'novnc-core'
export default{
    data(){
        return {
            num:'',
            arrdata:['aaa','nnn','fff','dasda']
        }
    },
    mounted(){
       this.Novnc()
    },
    methods:{
            //删除数组里的元素
            del(val){
                    var index = this.arrdata.indexOf(val)
                    if (index > -1) {
                        this.arrdata.splice(index, 1);
                    }
            },
          Novnc(){
            try {
                var rfb = new RFB({
                    'target':             document.getElementById('noVNC_canvas'),
                    'encrypt':            false,
                    'onUpdateState':      onUpdateState,
                    'onDisconnected':     onDisconnected,
                    'onPasswordRequired': onPasswordRequired,
                    'onFBResize':         onFBResize,
                    'onDesktopName':      onDesktopName,
                });
            } catch (exc) {
                    console.log('Unable to create RFB client -- ' + exc, 'error');
                    return;
            }
            //  使用给定的地址（服务器地址/主机名）创建连接 
            //  和端口（服务器上承载VNC连接的端口） 
            rfb.connect('10.1.2.191', '22','10isp.com191');
            // 连接状态改变
            function onUpdateState(rfb,state,oldstate){
                    console.log('连接状态改变')
                    console.log(state)
                    console.log('连接状态')
                    console.log(oldstate)
            }
            // 断开连接完成
            function onDisconnected(rfb,reason){
                 console.log('断开连接完成')
                 console.log(reason)
            }
            // 需要VNC密码
            function onPasswordRequired(rfb,msg){
                 console.log('需要VNC密码')
                 console.log(msg)
            }
            // 帧缓冲区的大小
            function onFBResize(rfb,width,height){
                 console.log(' frame buffer resized')
                 console.log(width)
                 console.log(height)
            }
            // 收到的桌面名称
            function onDesktopName(rfb,name){
                 console.log('收到的桌面名称')
                 console.log(name)
            }
        }
        
    },
}
</script>