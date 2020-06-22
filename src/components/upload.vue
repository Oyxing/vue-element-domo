<template>
<div>
    <el-upload
  class="upload-demo"
  action="http://localhost:9051/api/admin/uploadxlsx"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :on-exceed="handleExceed"
  :on-change="handleChange"
  :headers="{
    'token':'eyJhbGciOiJITUFDU0hBMjU2IiwiaXNzIjoiYWRtaW4iLCJleHAiOjE1ODkyNTg2NjMsInN1YiI6IuS4u%2BmimCIsIm5iZiI6MTU4OTI1NTM2MywiYXVkIjoiYWRtaW4iLCJpYXQiOjE1ODkyNTUwNjMsImp0aSI6IjE3NjE4MzU1MTM1NjQ2YTVhNmY1OTJlN2Y3YTNkZDFlIiwic2lnbmF0dXJlIjoiMjdlNDQ4OTgzYjU2MTgxOWNiYWI4ZGZjZjBlODBkMGVmMWQ4MmI0YjAwNDZkOTUwMzIwODMyZTZmZGNmZDIzZSIsInN0YXR1cyI6MSwiZGF0YSI6IntcImlkXCI6XCIxU3BUNDdMWWczUDBCbGtLWjBscW9DSDJ0UEhcIixcIm5pY2tuYW1lXCI6XCJcXHU4ZDg1XFx1N2VhN1xcdTdiYTFcXHU3NDA2XFx1NTQ1OFwiLFwibG9nb1wiOlwiXFwvc3RhdGljXFwvdXBsb2FkXFwvdXNlckxvZ29cXC9cXHU3NDFiXFx1NTRlNS5qcGdcIixcInVzZXJuYW1lXCI6XCJhZG1pblwiLFwicGFzc3dvcmRcIjpcImVkYmQ4ODFmMWVlMmY3NmJhMGJkNzBmZDE4NGY4NzcxMWJlOTkxYTA0MDFmZDA3Y2NkNGIxOTk2NjVmMDA3NjFhZmM5MTczMWQ4ZDhiYTZjYmIxODhiMmVkNWJmYjQ2NWI5ZjNkMzAyMzFlYjA0MzBiOWY5MGZlOTFkMTM2NjQ4XCIsXCJjcmVhdGVkXCI6XCIyMDIwLTAxLTA0IDEwOjIxOjQwXCJ9In0%3D'
  }"
  :data="{'action':'upload'}"
  name="upload"
  :on-success="handleSuccess"
  :file-list="fileList2"
  list-type="picture">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
<img :src="url+imgurl" alt="">
</div>
</template>
<script>
export default {
    data() {
      return {
        // 
        url:"https://z.5ul.cn:8003",
        imgurl:"",
        fileList2: [
                {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, 
                {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
            ]
      }
    },
    methods: {
      handleChange(file, fileList){
       console.log(file, fileList);
      },
      handleRemove(file, fileList) {
       console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(file, fileList){
        console.log(file, fileList)
      },
      handleRequest(res){
        console.log('res')
        console.log(res)
      },
      handleSuccess(response, file, fileList){
            console.log(response.url)
            this.imgurl = response.url
            console.log(file)
            console.log(fileList)
            // <xml>
// <appid>wx7aa4851a39b7c99a</appid>
// <attach>飞洒发生的非䔯基本原理 艺术形式䤂 </attach>
// <body>幅度还是对符合条件儿童游客脱衣和腺癌而入而入而已</body>
// <fee_type>CNY</fee_type>
// <mch_id>1560223251</mch_id>
// <nonce_str>qU4Ee94zP2K1Kgv0QMsZ3VLyHsoVaS4n</nonce_str>
// <notify_url>https://www.5ul.cn/wxpay/notify</notify_url>
// <spbill_create_ip>125.76.228.183</spbill_create_ip>
// <openid>o8rlc5bzdVXaFuvC6EkPcfQjnA6k</openid>
// <sign>21AB72573D1BD6F22C36ABB09EBEEC72</sign>
// <time_start>20191029184904</time_start>
// <time_expire>20191029204904</time_expire>
// <trade_type>JSAPI</trade_type>
// <total_fee>100000</total_fee>
// <out_trade_no>20191012053646017353</out_trade_no>
// </xml>
      }
    }
  }
</script>
