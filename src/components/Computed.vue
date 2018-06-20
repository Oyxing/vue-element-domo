<template>
    <div>
    <br><br>
        <h2>getName:{{getName}}</h2>
        <h2>ageName:{{ageName}} </h2>
        <h3>Num:{{Num}} </h3>
        <h4>date:{{date}} </h4>
        <h4>getName:<span style="color:#f0f">set方法把 get更改后的值输出::</span>{{getName}} </h4>

        <h2>{{years}}.{{month}}.{{week}}</h2>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tooName:'小明',
            fooName:'小红',
            number:12,
            tooAge:18,
            fooAge:20,
            years:4,
            month:2,
            week:12,
            yearsdata:2018,
            monthdata:0,
            weekdata:0
        }
    },
    created(){
        this.getWeekOfYear(2018,6,12)
    },
    methods:{
        getWeekOfYear(getFullYear,getMonth,week){
            // var today = new Date();
            // var getMonth = today.getMonth()+1
            // var getFullYear = today.getFullYear()
            // var firstDay = new Date(today.getFullYear(),0, 1);
            // var dayOfWeek = firstDay.getDay(); 
            // var spendDay= 1;
            // if (dayOfWeek !=0) {
            // spendDay=7-dayOfWeek+1;
            // }
            // firstDay = new Date(today.getFullYear(),0, 1+spendDay);
            // var d =Math.ceil((today.valueOf()- firstDay.valueOf())/ 86400000);
            // var week = Math.ceil(d/7) + 1;
            console.log(getFullYear,getMonth,week)
            if(getFullYear > this.yearsdata){
                this.years = 4 + (getFullYear - this.yearsdata)
            }else{
                this.years = 4
            }
            if(getFullYear == this.yearsdata){
                if(getMonth%3 == 0){
                    if(getMonth/3 > this.monthdata){
                        this.month = 2 + getMonth/3
                    }
                }
            }
        }
    },
    computed:{
        getName:{
            get(){
                return '姓名:  '+ this.tooName +'    和   ' + this.fooName
            },
            //输出更改后的值
            set(value){
                return this.number = value
            }
        },
        Num:{
            get(){
                    return this.number+15
            }
        },
        ageName(){
            return '年龄:     ' + this.tooAge +'      和   '+this.fooAge 
        },
        date(){
            return '时间戳: ' + new Date()
        }
    }
}
</script>