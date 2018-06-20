<template>
    <div class="dashboard">
        <div class="flex-container column">
            <div class="item one" @click="clickChart('1')" style="transform: translate(-22.4%,-33.5%) scale(0.33)"><sourceutilize /></div>
            <div class="item two" @click="clickChart('2')" style="transform: translate(-22.4%,0.5%) scale(0.33)"><sourceutilize /></div>
            <div class="item three" @click="clickChart('3')" style="transform: translate(-22.4%,34.5%) scale(0.33)"><sourceutilize /></div>
            <div class="item four" @click="clickChart('4')" style="transform: translate(45.5%,-33.5%) scale(0.33)"><sourceutilize /></div>
            <div class="item five" @click="clickChart('5')" style="transform: translate(11.5%,-33.5%) scale(0.33)"><sourceutilize /></div>
            <div class="item six active" @click="clickChart('6')" style="transform: translate(43.7%, 33.5%) scale(1)"><sourceutilize /></div>
        </div>
    </div>
</template>
<script>
import Sourceutilize from '@/components/adminhome/sourceutilize'
export default{
    data(){
        return {
            items: []
        }
    },
    mounted(){
        this.tableinit()
    },
    methods:{
        tableinit() {
            this.items = document.querySelectorAll('.flex-container .item')
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].dataset.order = i + 1;
            }
        },
        clickChart(Index){
            let activeItem = document.querySelector('.flex-container .active')
            let activeIndex = activeItem.dataset.order
            let clickItem = this.items[Index - 1]
            if (activeIndex === Index) {
                return
            }
            activeItem.classList.remove('active')
            clickItem.classList.add('active')
            this._setStyle(clickItem, activeItem)
            
        },
        _setStyle(el1, el2) {
            let transform1 = el1.style.transform
            let transform2 = el2.style.transform
            el1.style.transform = transform2
            el2.style.transform = transform1
        }
    },
    components:{
        sourceutilize:Sourceutilize
    }
}
</script>
<style scoped>
.dashboard{
    position: relative;
    width:100%;
    height:100%;
    margin:0px;
    padding:0px;
}
.column{
    position: relative;
    height: 90%;
    width: 90%;
    margin: 0 auto 50px;
    box-sizing: content-box;
}
.item{
    padding: 0;
    margin: 0;
    position: absolute;
    transform: scale(.33);
    text-align: center;
    transition: all .8s;
    background: rgba(32,32,35,.5);
}
.active{
    width: 69%;
    margin-left: 10px;
    line-height: 300px;
}
</style>