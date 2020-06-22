
<template>
  <div id="userIndex">
    <shear-img ref="shear_img" :def-img="userinfo.icon" :img-width="300" :img-height="300" @getImgUrl='getImgUrl($event)'></shear-img>
    
  </div>
</template>

<script>
import shearImg from "./shearImg.vue";
export default {
  data() {
    return {
      userinfo: {},
    };
  },
  created() {
    this.getUserInfo();
  },
  components: {
    shearImg
  },
  methods: {
    getUserInfo() {
    //   this.http.user.getUserInfo().then(res => {
    //     this.userinfo = res.data;
    //   });
    },
    //修改头像(图片剪切上传后获取url)
    getImgUrl(imgUrl) {
        console.log("imgUrl")
        console.log(imgUrl)
           console.log(base64)
          _this.imgSrc = base64;
          // 将base64文件转换为bolb文件
          let formData = new FormData();
          let blob = _this.convertBase64UrlToBlob(base64, "image/png");
          console.log(blob)
          console.log(blob, Date.now() + ".png")
          formData.append("action","wxlogos");
          formData.append("wxlogos", blob, Date.now() + ".png");
          //在此处发送一个ajax请求
          console.log(formData)
            const instance =  _this.axios.create({
                baseURL: 'http://localhost:8095',
                 headers: {"Content-Type":"multipart/form-data;"}
                });
            
            instance.post('/api/wxuploading',formData)
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
    //   this.http.user
    //     .setUserInfo({icon: imgUrl,})
    //     .then(res => {
    //       this.$dialog
    //         .alert({
    //           title: "嘀嗒比赛",
    //           message: res.msg
    //         })
    //     });
    }
  }
};
</script>