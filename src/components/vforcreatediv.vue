<template>
<div >
     <div id="palettetool">
                <el-button style="margin-top:50px" @click="check">查看</el-button>
                <el-button style="margin-top:50px" v-if="createspan.length > 0" @click="Convert">生成图片</el-button>
                <el-button style="margin-top:50px" v-if="createspan.length > 0" @click="delspan">删除</el-button>
            </div>
    <div id="boximage">  
        <div id="createtool">
            <el-tabs v-model="activeName" @tab-click="tabClick">
                <el-tab-pane label="南北方向" name="north-south">
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="宽度">
                            <el-input v-model="form.width"></el-input>
                        </el-form-item>
                        <el-form-item label="长度">
                            <el-input v-model="form.height"></el-input>
                        </el-form-item>
                        <el-form-item label="角度">
                            <el-input-number v-model="form.rotate" controls-position="right" :min="-90" :max="90"></el-input-number>
                        </el-form-item>
                    </el-form>
                        <el-button type="primary" @click="Visible">确 定</el-button>
                </el-tab-pane>
                <el-tab-pane label="东西方向" name="east-west">
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="宽度">
                            <el-input v-model="form.height"></el-input>
                        </el-form-item>
                        <el-form-item label="长度">
                            <el-input v-model="form.width"></el-input>
                        </el-form-item>
                        <el-form-item label="角度">
                            <el-input-number v-model="form.rotate" controls-position="right" :min="-90" :max="90"></el-input-number>
                        </el-form-item>
                    </el-form>
                        <el-button type="primary" @click="Visible">确 定</el-button>
                </el-tab-pane>
                <el-tab-pane label="站位" name="stance">
                    <div style="width:100%;height:200px">
                        <span v-for="(item,index) in stance"  :key="index" @click="stancespan(item)" style="position:absolute;" :style="{width:item.width + 'px',height:item.height + 'px',background:item.color}">
                        {{item.text}}
                        </span>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="修改" name="amend">
                    <el-form ref="form" :model="formamend" label-width="80px">
                        <el-form-item label="宽度">
                            <el-input-number v-model="formamend.height"></el-input-number>
                        </el-form-item>
                        <el-form-item label="长度">
                            <el-input-number v-model="formamend.width"></el-input-number>
                        </el-form-item>
                        <el-form-item label="角度">
                            <el-input-number v-model="formamend.transform" controls-position="right" :min="-90" :max="90"></el-input-number>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div id="boxcreatespan">
            <div id="createpicture">
                <span v-drag v-for="(item,index) in createspan" :key="index" @click="deletespan(item)" :style="{transformOrigin:item.Origin,transform:'rotate(' + item.transform + 'deg)',width:item.width + 'px',height:item.height + 'px',background:item.color,left:item.left + 'px',top:item.top + 'px'}">{{item.text}}</span>
            </div>
        </div>
    </div>
            <el-button @click="createplan">生成平面图</el-button>
            <el-button @click="deleteplan">删除</el-button>
    <div id="boxconvert">
        <div id="imagereatespan">
            <span v-imagedrag v-for="(item,index) in canvashtml" @click="deleteimage(item)" :key="index" v-html="item.html"></span>
        </div>
    </div>
</div>
</template>
<script>
import html2canvas from 'html2canvas'
var PictureAll = []
var PictureTop = []
var PictureLeft = []
var id = 2
var idhtml = 0
export default{
    data(){
        return {
            stance:[
                {
                    width:20,
                    height:20,
                    color:'red',
                    text:'S'
                }
            ],
            activeName:'north-south',
            valid:-1,
            radio:1,
            formamend:{},
            form:{},
            centerDialog: false,
            centerDialogVisible: false,
            createspan:[
                {
                    id:0,
                    width:5,
                    height:100,
                    color:'#ccc',
                    left:0,
                    top:0,
                    transform:0,
                    Origin:'center 0%'
                },
                {
                    id:1,
                    width:300,
                    height:5,
                    color:'#ccc',
                    left:0,
                    top:100,
                    transform:0,
                    Origin:'0% center'
                },
                {
                    id:1,
                    width:5,
                    height:150,
                    color:'#ccc',
                    left:0,
                    top:100,
                    transform:0,
                    Origin:'0% center'
                },
                {
                    id:2,
                    width:200,
                    height:5,
                    color:'#ccc',
                    left:0,
                    top:100,
                    transform:0,
                    Origin:'0% center'
                }
            ],
            canvashtml:[],
        }
    },
    methods:{
        //在被选择的元素才能修改
        tabClick(tag){
            console.log('this.valid')
            console.log(this.valid >= 0)
            if(tag.name == 'amend'){
                if(this.valid >= 0){
                    this.centerDialog = true
                    this.formamend = this.createspan[this.createspan.findIndex(item => item.id === this.valid)]
                    this.activeName = 'amend'
                }else{
                    this.activeName = 'north-south'
                }
            }else{
                this.valid = -1
            }
        },
        //获取到删除的图片元素 
        deleteimage(val){

        },
        //删除所选的图片
        deleteplan(){

        },
        //创建平面图
        createplan(){

        },
        //生成墙
        Visible(){
            this.centerDialogVisible = false 
            id++
            this.createspan.push({
                    id:id,
                    width:this.form.width,
                    height:this.form.height,
                    color:'#ccc',
                    left:200,
                    top:100,
                    transform:this.form.rotate,
                    Origin:'center 0%'
                })
        },
        //获取到删除的元素
        deletespan(val){
            this.valid = val.id
        },
        //删除元素
        delspan(){
            if(this.valid >= 0){
                this.createspan.splice(this.createspan.findIndex(item => item.id === this.valid), 1)
            }
        },
         //添加一个占位符
        stancespan(item){
            id++
            this.createspan.push({
                id:id,
                width:item.width,
                height:item.height,
                color:item.color,
                text:item.text,
                left:0,
                top:0,
                transform:0,
                Origin:'0% 0%'
            })
        },
        //生成图片
        Convert(){
            var seft = this
            var PictureChild = document.getElementById("createpicture").childNodes
            PictureAll = []
            PictureTop = [] 
            PictureLeft = []
            for(var i = 0 ; i < PictureChild.length;i++){
                PictureTop.push(PictureChild[i].offsetTop)
                PictureLeft.push(PictureChild[i].offsetLeft)
                PictureAll.push({y:PictureChild[i].offsetTop,x:PictureChild[i].offsetLeft,w:PictureChild[i].offsetWidth,h:PictureChild[i].offsetHeight})
            }
            document.getElementById("createpicture").style.height = filtrate(PictureAll,'y').h +'px'
            document.getElementById("createpicture").style.width = filtrate(PictureAll,'x').w +'px'
            document.getElementById("createpicture").style.marginTop = Math.min(...PictureTop)+'px'
            document.getElementById("createpicture").style.marginLeft = Math.min(...PictureLeft)+'px'
            html2canvas(document.getElementById("createpicture")).then(canvas => {
                canvas.id = "mycanvas"; 
                var dataUrl = canvas.toDataURL();    
                var newImg = document.createElement("img");    
                newImg.style.zIndex = id
                newImg.src =  dataUrl;
                idhtml++
                seft.canvashtml.push(
                        {
                            id:idhtml,
                            html:newImg.outerHTML
                        }
                    )
            })
            
        },
        //查看
        check(){
            console.log(this.createspan)
            console.log(this.canvashtml)
        },
    },
    directives: {
        //墙和占位符的移动
        //定义的名字    
        drag (el) {
            var deg = 0
            var degheight ,degwidth
            let oDiv = el;   //当前元素
            let self = this;  //上下文
            oDiv.onmousedown = function (e) {
                var box = document.getElementById('boxcreatespan')
                //鼠标按下，计算当前元素距离可视区的距离
                let disX = e.clientX - oDiv.offsetLeft;
                let disY = e.clientY - oDiv.offsetTop;
                deg = this.style.transform.replace(/[^0-9]/g,"")
                if(deg == 0){
                    degheight = 0
                    degwidth = 0
                    var Height = box.offsetHeight - this.offsetHeight - 2
                    var Width = box.offsetWidth - this.offsetHeight - 2
                }else{
                    if(this.offsetHeight == this.offsetWidth){
                        var longest = Math.sqrt(this.offsetHeight*this.offsetHeight + this.offsetWidth*this.offsetWidth)
                        degheight = longest*Math.cos(Math.PI/180*deg)
                        degwidth = longest*Math.sin(Math.PI/180*deg)
                        var Height = box.offsetHeight - degheight - 2
                        var Width = box.offsetWidth - degwidth - 2
                    }else if(this.offsetHeight > this.offsetWidth){
                        var longest = this.offsetHeight
                        if(this.style.transform.search(/-/g,"") > 0){
                            degheight = longest*Math.cos(Math.PI/180*deg)
                            degwidth = longest*Math.sin(Math.PI/180*deg)
                        }else{
                            degheight = longest*Math.cos(Math.PI/180*(-deg))
                            degwidth = longest*Math.sin(Math.PI/180*(-deg))
                        }
                        var Height = box.offsetHeight - degheight - 2
                        var Width = box.offsetWidth - degwidth - 2
                    }else{
                        var longest = this.offsetWidth
                        if(this.style.transform.search(/-/g,"") < 0){
                            degheight = longest*Math.sin(Math.PI/180*(-deg))
                            degwidth = longest*Math.cos(Math.PI/180*(-deg))
                            var Height = box.offsetHeight - degheight - 2
                            var Width = box.offsetWidth - degwidth - 2
                        }else{
                            degheight = longest*Math.sin(Math.PI/180*(deg))
                            degwidth = longest*Math.cos(Math.PI/180*(deg))
                            var Height = box.offsetHeight - degheight  - 2
                            var Width = box.offsetWidth - degwidth - 2
                        }
                    }
                }
                document.onmousemove = function (e) {
                    //通过事件委托，计算移动的距离 
                    let l = e.clientX - disX;
                    let t = e.clientY - disY;
                    //移动当前元素  
                    if(l < 0){
                        var left = 0
                    }else if(l > Width){
                        var left = Width
                    }else{
                        var left = l
                    }
                    if(t < 0){
                        var top = 0
                    }else if(t > Height){
                        var top = Height
                    }else{
                        var top = t
                    }
                    oDiv.style.left = left + 'px';
                    oDiv.style.top = top + 'px';
                };
                document.onmouseup = function (e) {
                    document.onmousemove = null;
                    document.onmouseup = null;
                };
            };
        },
        //生成平面的图片
        imagedrag (el) {
            var deg = 0
            let oDiv = el;   //当前元素
            let self = this;  //上下文
            oDiv.onmousedown = function (e) {
                var box = document.getElementById('imagereatespan')
                //鼠标按下，计算当前元素距离可视区的距离
                let disX = e.clientX - oDiv.offsetLeft;
                let disY = e.clientY - oDiv.offsetTop;
                var Height = box.offsetHeight - this.offsetHeight - 2
                var Width = box.offsetWidth - this.offsetWidth - 2
                deg = this.style.transform.replace(/[^0-9]/g,"")
                document.onmousemove = function (e) {
                    //通过事件委托，计算移动的距离 
                    let l = e.clientX - disX;
                    let t = e.clientY - disY;
                    //移动当前元素  
                    if(l < 0){
                        var left = 0
                    }else if(l > Width){
                        var left = Width
                    }else{
                        var left = l
                    }
                    if(t < 0){
                        var top = 0
                    }else if(t > Height){
                        var top = Height
                    }else{
                        var top = t
                    }
                    oDiv.style.left = left + 'px';
                    oDiv.style.top = top + 'px';
                };
                document.onmouseup = function (e) {
                    document.onmousemove = null;
                    document.onmouseup = null;
                };
            };
        }
    }
}
//获取到生成片区域的 宽高
var toparr = []
var leftarr = []
var harr = []
var warr = []
function filtrate(arr,iden,maxval){
    toparr = []
    leftarr = []
    harr = []
    warr = []
    var hwjson = {h:'',w:''}
    for(var key in arr){
        if(iden == 'y'){
            if(arr[key]['h'] > arr[key]['w']){
                toparr.push(arr[key]['y'])
                harr.push(arr[key]['h'])
            }
        }else{
            if(arr[key]['w'] > arr[key]['h']){
                leftarr.push(arr[key]['x'])
                warr.push(arr[key]['w'])
            }
        }
    }
    for(var key in arr){
        if(iden == 'y'){
            if(arr[key]['y'] == Math.max(...toparr)){
                hwjson.h = Math.max(...toparr) - Math.min(...toparr) + arr[key]['h']
            }
        }else{
            if(arr[key]['x'] == Math.max(...leftarr)){
               hwjson.w = Math.max(...leftarr) - Math.min(...leftarr) + arr[key]['w']
            }
        }
    }
    if(Math.max(...toparr) - Math.min(...toparr) + Math.max(...harr) > hwjson.h){
        hwjson.h = Math.max(...toparr) - Math.min(...toparr) + Math.max(...harr)
    }
    if(Math.max(...leftarr) - Math.min(...leftarr) + Math.max(...warr) > hwjson.w){
        hwjson.w = Math.max(...leftarr) - Math.min(...leftarr) + Math.max(...warr)
    }
    return hwjson
}
</script>
<style scoped>

#createspan{
    position: relative;
}

#boxcreatespan {
    position: relative;
    margin:10px 0px 10px 5px;
    width:1300px;
    height:500px;
    border:1px dashed;
}

#boxcreatespan span {
    position: absolute;
    cursor: pointer;
}

#palettetool{
    position: relative;
    margin:10px 0px 10px 5px;
}

#imagereatespan {
    position: relative;
    width:1730px;
    height:800px;
    margin:10px 5px 10px 5px;
    border: 1px dashed;
}

#imagereatespan span {
    position: absolute;
    cursor: pointer;
}

#boxconvert{
    width:1300px;
    height:500px;
}

#dialogamend{
    margin: 0 0 50px;
}

#createtool{
    float: right;
    z-index: 999;
    margin: 0px 100px 0px 0px;
}
</style>

