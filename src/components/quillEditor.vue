<template>
<div>
     <quill-editor
        style="background:#fff"
        v-model="content" 
        ref="myQuillEditor" 
        :options="editorOption">
    </quill-editor>
    <el-button type="primary" @click="submitForm">确定</el-button>
</div>
    
</template>
<script>
import {quillEditor, Quill} from 'vue-quill-editor'
import { ImageDrop } from 'quill-image-drop-module'
import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
Quill.register('modules/ImageExtend', ImageExtend)
Quill.register('modules/imageDrop', ImageDrop)

export default{
    data(){
        return {
            num:'',
            content:"",
            editorOption: {
                theme:'snow',
                modules:{
                    ImageExtend: {
                        loading: true,
                        name: 'quill',
                        action: "http://10.1.1.124:9051/api/common/upload",
                        response: (res) => {
                        
                            return "http://10.1.1.124:9051"+res.result
                        }
                    },
                    imageDrop:true, 
                    toolbar:{
                        container:[
                            ['bold', 'italic', 'underline', 'strike'],    //加粗，斜体，下划线，删除线
                            ['blockquote', 'code-block'],     //引用，代码块
                            [{ 'header': 1 }, { 'header': 2 }],        // 标题，键值对的形式；1、2表示字体大小
                            [{ 'list': 'ordered'}, { 'list': 'bullet' }],     //列表
                            [{ 'script': 'sub'}, { 'script': 'super' }],   // 上下标
                            [{ 'indent': '-1'}, { 'indent': '+1' }],     // 缩进
                            [{ 'direction': 'rtl' }],             // 文本方向
                            [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
                            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],     //几级标题
                            [{ 'color': [] }, { 'background': [] }],     // 字体颜色，字体背景颜色
                            [{ 'font': [] }],     //字体
                            [{ 'align': [] }],    //对齐方式
                            ['clean'],    //清除字体样式
                            ['image','video']    //上传图片、上传视频
                        ],
                        handlers: {
                            
                        }
                    }
                }
            }
        }
    },
     methods: {
         submitForm(){
             console.log(this.content)
        }
     }
   
}
</script>