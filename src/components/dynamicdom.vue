<template>
    <div>
        <ul>
            <li v-for="(item,index) in 6" :key="index" @click="Index(index)" class="listyle" :class="{'lichange':index === ind}"> 
                    {{item}}
            </li>
        </ul>
        <h1>{{toLocale}}</h1>
        <h3>{{toLocale1}}</h3>
        <h3>{{toLocale2}}</h3>
        <h3>{{toLocale3}}</h3>
    </div>
</template>
<script>
export default{
    data(){
        return {
            ind:0,
            toLocale1:'',
            toLocale2:'',
            toLocale3:'',
            toLocale:''
        }
    },
    mounted(){
        formatTime(new Date(), '{y}/{m}/{d} {h}:{i}:{s}')
        formatTime("Feb 1, 2018 12:43:57 PM", '{y}/{m}/{d} {h}:{i}:{s}')
        // formatTime("2018-01-13 12:00:00 AM", '{y}-{m}-{d} {h}:{i}:{s}')
        // var str = "2018-01-13 12:00:00 AM"
    // console.log(str.replace('AM',''))
       function formatTime(time,cFormat) {
            if ((time + '').length === 10) {
                time = +time * 1000
            }

            var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}', date
            if (typeof time === 'object') {
                date = time
            } else {
                date = new Date(time)
            }

            var formatObj = {
                y: date.getFullYear(),
                m: date.getMonth() + 1,
                d: date.getDate(),
                h: date.getHours(),
                i: date.getMinutes(),
                s: date.getSeconds(),
                a: date.getDay()
            }
            console.log(formatObj)
            var time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
                var value = formatObj[key]
                if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
                if (result.length > 0 && value < 10) {
                    value = '0' + value
                }
                return value || 0
            })
            console.log(time_str)
        }
    },
    created(){
        this.toLocaledate()
        this.paixu()
    },
    methods:{

        paixu(){
            function bubbleSort(arr) {
            　　var len = arr.length;
            　　for (var i = 0; i < len; i++) {
            　　　　for (var j = 0; j < len - 1 - i; j++) {
            　　　　　　if (arr[j] > arr[j+1]) { //相邻元素两两对比
            　　　　　　　　var temp = arr[j+1]; //元素交换
            　　　　　　　　arr[j+1] = arr[j];
            　　　　　　　　arr[j] = temp;
            　　　　　　}
            　　　　}
            　　}
            　　return arr;
            }
            var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
            console.log(bubbleSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50] ；
        },
        Index(index){
            this.ind = index
        },
        toLocaledate(){
            this.toLocale1 = new Date(1485964800).toLocaleDateString().split('/')[0]
            if(new Date(1485964800).toLocaleDateString().split('/')[1].length == 1){
                this.toLocale2 = '0' + new Date(1485964800).toLocaleDateString().split('/')[1]
            }else{
                this.toLocale2 = new Date(1485964800).toLocaleDateString().split('/')[1]
            }
            if(new Date(1485964800).toLocaleDateString().split('/')[2].length == 1){
                this.toLocale3 = '0' + new Date(1485964800).toLocaleDateString().split('/')[2]
            }else{
                this.toLocale3 = new Date(1485964800).toLocaleDateString().split('/')[2]
            }
            var toLocale = [this.toLocale1,this.toLocale2,this.toLocale3]
            this.toLocale = toLocale.join('/')
        }
    }
}
</script>

<style lang="">
    ul{
       margin:10px 50px 10px 0px; 
    }
    .listyle{
        color:#c0c0c0;
    }
    .lichange{
        color:red;
    }
</style>