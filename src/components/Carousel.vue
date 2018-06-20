<template>
    <div>
        <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="(item,index) in data" :key="index">
                <a href="item.thumb">
                    <img :src="item.url" alt="item.goods_id" class="image">
                </a>
            </el-carousel-item>
        </el-carousel>
        <br><br>
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="(item,index) in data" :key="index">
                <a href="item.thumb">
                    <img v-img :src="item.url" alt="item.goods_id" class="image">
                </a>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                data:{}
            }
        },
        created(){
            
            this.AxiosGet()
        },
        methods:{
            AxiosGet(){
                this.axios.get("http://h6.duchengjiu.top/shop/api_ad.php?position_id=1")
                .then((res)=>{
                    console.log(res)
                    this.data = res.data.data
                })
                .catch((error)=>{
                    console.log(error)
                })

            this.$nextTick(function() {
                    console.log('this')
                    console.log(this)
            })

                
            }

        },
        directives:{
            img(el){
             
            }
        },
    }
</script>
