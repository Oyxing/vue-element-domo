<template>
  <div>
      <label>地址：<el-input v-model="keyword" style="width:300px"></el-input></label>
  <br>
 <!-- getPoint方法，给地图加点击事件，点击地图获取所需要的信息，-->
 <!--scroll-wheel-zoom属性是否可以用鼠标滚轮控制地图缩放-->
    <baidu-map class="map"  style="height:300px"  id="mapID" ak="MN0yEHBoeDh66WZe5obuF5TCZIpDhHyK" :center="center" :zoom="zoom"  @ready="handler" :scroll-wheel-zoom="true" @click="getPoint" >
      <!--地图搜索功能，绑定上面的input，-->
      <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location" @searchcomplete="searchcomplete"></bm-local-search>
      <!--display: none样式很关键，因为下面默认会有地址提示信息很长，很烦，这样搜索会很舒服，-->
      <!--zoom是搜索结果的视图比例，个人觉得12.8很舒服显示-->
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <!--信息窗口，show属性是控制显示隐藏，infoWindowClose和infoWindowOpen是控制信息窗口关闭隐藏的方法-->
      <bm-marker :position="postionMap" >
        <bm-info-window :show="show" @close="infoWindowClose" @open="infoWindowOpen" style="font-size: 14px">
          <p>站点：{{ add.siteName }}</p>
          <p>站点地址：{{ add.site }}</p>
        </bm-info-window>
      </bm-marker>
    </baidu-map>

    </div>
</template>
 
<style>
/* The container of BaiduMap must be set width & height. */
.bm-view {
  width: 100%;
  height: 300px;
}
</style>
<script>
import BmGeolocation from 'vue-baidu-map/components/controls/Geolocation.vue'; //定位
import BmMapType from 'vue-baidu-map/components/controls/MapType.vue'; //地图类型
import BmCityList from 'vue-baidu-map/components/controls/CityList.vue'; //城市列表
import BmNavigation from 'vue-baidu-map/components/controls/Navigation'
import BmMarker from 'vue-baidu-map/components/overlays/Marker'; //点标注
import BmInfoWindow from 'vue-baidu-map/components/overlays/InfoWindow'; //标注弹窗
import BmView from 'vue-baidu-map/components/map/MapView.vue' 
import BmLocalSearch from 'vue-baidu-map/components/search/LocalSearch.vue'
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
export default {
  data () {
    return {
          jgNameDialog: false,
          show: false,
          postionMap:{  //地图坐标
            lng: 120.211486,
            lat: 30.256576
          },
          location: '',
          keyword: '',  //搜索框关键词
          zoom: 12.8,   //放大比例
          address:'',   //位置详细信息
          add:{
            siteName:'',
            site:'',
            jd:'',
            wd:'',
            desce:'',
            type:'',
            jgName:'',
            jgNum:'',
          },
          organizationData:[],
          jgName:'',
          jgNum:'',
      //  center: { lng: 0, lat: 0 },  //经纬度
      // zoom: 3,　 //地图展示级别
          storeName:'',
          center: { //经纬度
            lng: 39.9, lat: 116.3
          },
          markerPo:{
            lng: 39.9, lat: 116.3
          },
          isShowPanel: true,
          isShowInfo:false,
          markerIcon:'', //标注图片
        };

  },
　　components: {
      BmNavigation,
　　　　  BaiduMap,
        BmView,
        BmLocalSearch,
        BmMarker,
        BmInfoWindow,
         BmGeolocation, BmMapType, BmCityList
},
  methods: {  
    getPoint(e){    //点击地图获取一些信息，
            this.show = true;
            this.postionMap.lng = e.point.lng;     //通过  e.point.lng获取经度
            this.postionMap.lat = e.point.lat;     //通过  e.point.lat获取纬度
            this.add.jd = e.point.lng;
            this.add.wd = e.point.lat;
            this.zoom = e.target.getZoom()
            let geocoder= new BMap.Geocoder();  //创建地址解析器的实例
            geocoder.getLocation(e.point,rs=>{
                  console.log(rs)
                  this.add.site = rs.address;
                  this.add.siteName = rs.address;
                  //地址描述(string)=
                  console.log(rs.address);    //这里打印可以看到里面的详细地址信息，可以根据需求选择想要的
                  console.log(rs.addressComponents);//结构化的地址描述(object)
                  console.log(rs.addressComponents.province); //省
                  console.log(rs.addressComponents.city); //城市
                  console.log(rs.addressComponents.district); //区县
                  console.log(rs.addressComponents.street); //街道
                  console.log(rs.addressComponents.streetNumber); //门牌号
                  console.log(rs.surroundingPois); //附近的POI点(array)
                  console.log(rs.business); //商圈字段，代表此点所属的商圈(string)
            });
    },
    // 关闭窗口
    infoWindowClose () {
            this.show = false
    },
    // 打开窗口
    infoWindowOpen () {
            //这里有个问题纠结了很久，百度的信息窗口默认有个点击其他地方就消失的事件，我没有找到
            //并且信息窗口点击一次显示，一次消失
            //于是我加了一个100毫秒的定时器，保证每次点击地图都可以展示信息窗口
          setInterval(()=>{
            this.show = true
          },100)
    },
    // 搜索
    searchcomplete(aa,aa1){
      console.log("searchcomplete==")
      console.log(aa)
      console.log("searchcomplete==")
    },
    // 初始化
    handler ({BMap, map}) {
        var geolocation = new BMap.Geolocation();
        // 初始化获取定位
        geolocation.getCurrentPosition((r)=>{
            console.log("r");
            console.log(r);
            this.center = {lng: r.longitude, lat: r.latitude};   // 设置center属性值
            // this.autoLocationPoint = {lng: r.longitude, lat: r.latitude};   // 自定义覆盖物
            // this.initLocation = true; 
            console.log('center:', this.center)  // 如果这里直接使用this是不行的
          },{enableHighAccuracy: true})
        this.center.lng = 116.404
        this.center.lat = 39.915
        this.zoom = 15
    }
  }
}
</script>


<!-- <script>

// export default {
//     components: {
//         BaiduMap,
//         BmView,
//         BmLocalSearch,
//     },
//     data(){
//         return{
//             location: '北京',
//             keyword: '百度',
//             cityname:""
//         }
//     },
//     created(){

//     },
//     mounted(){
 
//     },
//     methods:{
//         buttontipinput(){
//              console.log(this.cityname)
//              this.geoCode()
//         },
//         geoCode() {
//             geocoder.getLocation(this.cityname, function(status, result) {
//                 if (status === 'complete'&&result.geocodes.length) {
//                     var lnglat = result.geocodes[0].location
//                     console.log(lnglat)
//                     if(!marker){
//                         marker = new AMap.Marker();
//                         map.add(marker);
//                     }
//                     marker.setPosition(lnglat);
//                     map.setFitView(marker);
//                 }else{
//                     log.error('根据地址查询位置失败');
//                 }
//             });
//         }
//     }
// }
// </script>