<template>
    <div>
        <el-button @click="ShowDialog = true" style="margin:20px"> 弹出框 </el-button>
        <el-dialog title="测试from表单" width="30%" :visible.sync="ShowDialog" :before-close="handleClose">
        <el-form>
            <span v-for="(item,index) in chate.structure" :key="index">  
                <el-form-item :label="item.title" v-if="item.label == 'select'">
                    <el-select v-model="item.value" placeholder="请选择">
                        <el-option
                        v-for="item in item.optiones"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>   
                </el-form-item> 
                <el-form-item v-else-if="item.label == 'datepicker'" :label="item.title">
                    <el-date-picker
                        v-model="item.value"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item v-else-if="item.label == 'checkbox'" :label="item.title">
                    <el-checkbox v-model="item.value">{{item.name}}</el-checkbox>
                </el-form-item>
                <el-form-item v-else-if="item.label == 'checkboxgroup'" :label="item.title">
                    <el-checkbox-group v-model="item.value">
                        <el-checkbox v-for="(items,index) in item.children" :key="index" :label="items.label"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item v-else-if="item.label == 'radio'" :label="item.title">
                    <el-radio v-model="item.value" v-for="(items,index) in item.children" :key="index" :label="items.label">{{items.name}}</el-radio>
                </el-form-item>
                <el-form-item v-else-if="item.label == 'radiogroup'" :label="item.title">
                    <el-radio-group v-model="item.value">
                        <el-radio v-for="(items,index) in item.children" :key="index" :label="items.label">{{items.name}}</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item v-else-if="item.label == 'input'" :label="item.title">
                    <el-input v-model="item.value" type="password" v-if="item.type == 'pwd'" placeholder="请输入" @blur="blurinput(item,index)"></el-input>
                    <el-input v-model="item.value" v-else placeholder="请输入" @blur="blurinput(item,index)"></el-input>
                    <span>{{item.message}}</span>
                </el-form-item>
            </span> 
            </el-form>
            <el-button @click="submite"> 提交</el-button>
        </el-dialog>
    </div> 
</template>
<script>
import { formframe } from '@/assets/js/frame.js'
import { blurverify } from '@/assets/js/frame.js'
import { empty } from '@/assets/js/frame.js'
    export default{
        data(){
            return{
                ShowDialog:false
            }
        },
        methods:{
            blurinput(item,index){
                if(item.apiurl != undefined){
                    blurverify(this,item.apiurl,item.value,index)
                }
            },
            handleClose(){
                this.ShowDialog = false
                empty(this)
            },
            submite(){
                formframe(this)
            }
        },
        computed:{
            chate:{
                get(){
                    return this.$store.state.chate
                }
            }
        }
    }
</script>