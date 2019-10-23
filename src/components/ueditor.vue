<template>
    <div>
        <vue-ueditor-wrap v-model="msg" :config="myConfig"></vue-ueditor-wrap>
    </div>
</template>
<script>
import VueUeditorWrap from 'vue-ueditor-wrap'
export default {
    components: {
        VueUeditorWrap
    },
    data () {
        return {
            msg: '<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',
            myConfig: {
                // 编辑器不自动被内容撑高
                autoHeightEnabled: false,
                // 初始容器高度
                initialFrameHeight: 240,
                // 初始容器宽度
                initialFrameWidth: '100%',
                // 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
                serverUrl: 'http://localhost:8091/ueditor/ueconfig',
            }
        }
    }
}
</script>