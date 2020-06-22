<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" style="width: 400px;margin: 50px auto;" class="demo-ruleForm">    
            <el-form-item label="身份证号" prop="identity">
                 <el-input v-model="ruleForm.identity" placeholder="请输入身份证号"></el-input>
            </el-form-item>
            <el-form-item label="选择日期" prop="date">
                <el-date-picker
                    v-model="ruleForm.date"
                    type="date"
                    value-format="MM-dd"
                    placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="是否有 孩子" prop="child">
                <el-switch
                    v-model="ruleForm.child"
                    active-text="有"
                    inactive-text="无">
                </el-switch>
            </el-form-item>
            <el-form-item label="学生证" prop="ornot" v-if="age > 18 && age < 24">
                <el-switch
                    v-model="ruleForm.ornot"
                    active-text="有"
                    inactive-text="无">
                </el-switch>
            </el-form-item>
             <el-form-item label="身份证" prop="ornot" v-if="age > 60">
                <el-switch
                    v-model="ruleForm.ornot"
                    active-text="有"
                    inactive-text="无">
                </el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
        <div>
            钱数： {{totalpriceNum}}
        </div>
    </div>
</template>
<script>
export default {
    data() {
        var validateIdentity = (rule, value, callback) => {
            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
            if(!reg.test(value)) { 
                callback(new Error('身份证输入不合法'));
            } else {
                this.discriCard(value)
                callback();
            }
        };
        return {
            age:0,
            gender:true,
            totalprice:120,
            totalpriceNum:0,
            ruleForm:{
                ornot:false,
                child:false
            },
            rules: {
                identity: [
                    { required: true, message: '请输入身份证号', trigger: 'blur' },
                    { validator: validateIdentity, trigger: 'blur' }
                ],
                date: [
                    { required: true, message: '请输入选择日期', trigger: 'blur' }
                ],
            },
            value1:""
        };
    },
    created(){
        var num = [1,4,10,6,2,8,0,9,11]
        console.log(this.bubbleSort(num))
        var aa =  this.quickSort(num,0, num.length - 1)
            console.log("aa",aa)
    },
    methods: {
      //  递归 排序
     quickSort(num, left, right) {
            if (left >= right) {
                return num
            }; 
            var i = left, j = right, flag = left; 
            while (i < j) { 
                while (num[j] >= num[flag] && j > flag) j--; 
                if (i >= j) {
                    break; 
                }
                while (num[i] <= num[flag] && i < j) i++; 
                let temp = num[flag]; 
                num[flag] = num[j];
                num[j] = num[i];
                num[i] = temp
                flag = i; // 基数已经在原num[i]的位置，flag同时也要赋值成i。
            }
            this.quickSort(num, left, flag - 1); // 将flag左边数组作为待排序数组，递归调用。
            this.quickSort(num, flag + 1, right); // 将flag右边数组作为待排序数组，递归调用。
        },
        // 迭代
        bubbleSort(arr){
            if (Array.isArray(arr)) {
                for (var i = arr.length - 1; i > 0; i--) {
                    for (var j = 0; j < i; j++) {
                        if (arr[j] > arr[j + 1]) {
                            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                        }
                    }
                }
                return arr;
            }
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.totalpriceNum = this.getPrice()
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        // 输出 
        getPrice(){
            // 妇女节
            if(!this.gender && this.ruleForm.date =="03-08"){
                return 0
            }else if(this.cycle() ==  "一"){
                return this.totalprice*0.8
            }else{
                if(this.age < 6){
                    return 0
                }else if(this.age >= 6 && this.age <= 12){
                    if(this.ruleForm.date =="06-01"){
                        return 0
                    } else{
                        return this.totalprice*0.3
                    }
                }else if(this.age > 12 && this.age <= 17){
                    return this.totalprice*0.2
                }else if(this.age >17 && this.age <= 59){
                    if(this.age < 22 && this.ruleForm.ornot) {
                        return this.totalprice*0.2
                    }
                    return this.totalprice
                }else if(this.age > 59 && this.age <= 65){
                    if(this.ruleForm.ornot){
                        return this.totalprice*0.2
                    }else{
                        return this.totalprice
                    }
                }else if(this.age >66){
                    if(this.ruleForm.ornot){
                        return 0
                    }else{
                        return this.totalprice
                    }
                }
            }
            
        },
         discriCard(UUserCard){ 
            UUserCard.substring(6,10)+"-"+UUserCard.substring(10,12)+"-"+UUserCard.substring(12,14); 
            //获取 性别 
            if(parseInt(UUserCard.substr(16,1))%2==1){ 
                this.gender = true
            //是男则执行代码 ... 
            } else { 
                this.gender = false
            //是女则执行代码 ... 
            } 
            //获取年龄 
            var myDate = new Date(); 
            var month = myDate.getMonth() + 1; 
            var day = myDate.getDate(); 
            var age = myDate.getFullYear()-UUserCard.substring(6, 10) - 1; 
            if (UUserCard.substring(10,12)<month||UUserCard.substring(10,12)==month&&UUserCard.substring(12,14)<=day) { 
                age++; 
            } 
            //年龄 age 
            this.age = age
        },
        // 周期
        cycle(){
            var myDate = new Date();  
            var date = new Date(myDate.getFullYear()+'-'+this.ruleForm.date)
            var weekArray = new Array("日", "一", "二", "三", "四", "五", "六")
            var week = weekArray[date.getDay()]
            return week
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
       
    }
};
</script>
<style>
.tabs{
    margin:200px auto;
    width:400px;
    min-height:100px;
    background-color:#ccc;
}
.el-tabs__item{
    width:100%;
}
</style>