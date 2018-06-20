<template>
    <div class="pitchdisplay">
        <ul>
            <li v-for="(item,index) in PitchData" :key="index">
                <div>
                    <div class="image">
                        <div class="shade">
                            <div class="shade_price">
                                <h3>{{item.price}}</h3>
                                <br><br>
                                <span>{{item.goods_name}}</span>
                            </div>
                        </div>
                        <img :src="item.goods_thumb" alt="">
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<style scoped lang="less">
    .pitchdisplay{
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
                        &:hover .shade{
                            display:block;
                        }

                        img{
                            float:left;
                            width:100%;
                        }
                        .shade{
                            position: absolute;
                            padding: 0px 0px 300px 0px;
                            display:none;
                            transition:2s;
                            opacity: 0.6;
                            background-color: #324157;
                            .shade_price{
                                width:80%;
                                padding:20px;
                                span,h3{
                                    color:#fff;
                                }
                            }
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
            GetData(){
                this.$http.get('http://h6.duchengjiu.top/shop/api_goods.php')
                    .then((res)=>{
                        this.PitchData = res.data.data
                        console.log(res)
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
                }
        }
    }

</script>