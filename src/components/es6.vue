<template>
<div id="divdom">
{{msg}}
<el-button @click="button">点击</el-button>
<!-- <span v-for="(data,index) in datas" :key="index">
    {{index}}
    <br />
    <span v-for="(data,ind) in datas[index]" :key="ind">
    <br />
        {{ind}}
    </span>
</span> -->

<span v-for="(Data,index) in datataa.Data" :key="index">
    {{index}}
    <br />
    <span v-for="(data,ind) in datataa.Data[index]" :key="ind">
    <br />
        {{ind}}
    </span>
</span>

</div>
</template>
<script>
export default{
    data(){
        return {
            msg:"你好",
            datataa:{
            "Code": 2000,
            "Msg": null,
            "Data": {
                "其它": {
                    "1F": [
                        {
                        "RoomNo": "7101",
                        "AreaWorkno": "1285.90㎡",
                        "HoustStatus": "待租"
                        }
                    ]
                },
                "A7": {
                    "1F": [
                        {
                        "RoomNo": "7101",
                        "AreaWorkno": "1285.90㎡",
                        "HoustStatus": "待租"
                        },
                        {
                        "RoomNo": "7102",
                        "AreaWorkno": "825.60㎡",
                        "HoustStatus": "待租"
                        }
                    ],
                    "2F": [
                        {
                        "RoomNo": "7#201",
                        "AreaWorkno": "1309.40㎡",
                        "HoustStatus": "待租"
                        },
                        {
                        "RoomNo": "7#202",
                        "AreaWorkno": "999.40㎡",
                        "HoustStatus": "待租"
                        }
                    ],
                    "3F": [
                        {
                        "RoomNo": "7301",
                        "AreaWorkno": "1280.00㎡",
                        "HoustStatus": "待租"
                        },
                        {
                        "RoomNo": "7302",
                        "AreaWorkno": "749.60㎡",
                        "HoustStatus": "待租"
                        }
                    ],
                    "4F": [
                        {
                        "RoomNo": "7#401",
                        "AreaWorkno": "1309.40㎡",
                        "HoustStatus": "待租"
                        },
                        {
                        "RoomNo": "7#402",
                        "AreaWorkno": "788.10㎡",
                        "HoustStatus": "待租"
                        }
                    ],
                    "5F": [
                        {
                        "RoomNo": "7501",
                        "AreaWorkno": "1280.00㎡",
                        "HoustStatus": "待租"
                        },
                        {
                        "RoomNo": "7502",
                        "AreaWorkno": "620.00㎡",
                        "HoustStatus": "已租"
                        }
                    ]
                },
                },
            },
            datas:{
                A7:{
                    a71:{
                        name:'aaa'
                    },
                    a72:{
                        name:'vvv'
                    }
                },
                A8:{
                    a81:{
                        name:'aaa'
                    },
                    a82:{
                        name:'vvv'
                    }
                }
            }
        }
    },
    created(){
        console.log('this.props')
        console.log(this)
    },
    methods:{
        button(){
            showEs6(this)
        }
    }
}
function showEs6(_this){
    function num(...nums){
        console.log('nums')
        console.log(nums)
        for (let i of nums){
            if(i.name%2 == 0){
                i['type'] = '偶数'
            }else{
                i['type'] = '奇数'
            }
            console.log(i)
        }
    }
    num({name:'1'},{name:'2'},{name:'3'},{name:'4'},{name:'5'},{name:'6'},{name:'7'})
}
</script>
