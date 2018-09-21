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

        <el-button @click="TestSubmit = true" style="margin:20px"> 测试提交 </el-button>
        <el-dialog title="提交表单" width="30%" :visible.sync="TestSubmit" :before-close="handleClosetest">
            <el-form>
                <el-form-item label="日期">
                    <el-input v-model="formLabelAlign.date"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="formLabelAlign.address"></el-input>
                </el-form-item>
                 <el-form-item label="创建次数">
                    <el-input-number v-model="formLabelAlign.address" controls-position="right" :min="1" :max="10"></el-input-number>
                </el-form-item>
            </el-form>
            <el-button @click="Testsubmit"> 提交</el-button>
        </el-dialog>
        <el-dialog title="编辑" width="30%" :visible.sync="RedactSubmit" :before-close="handleClosetest">
            <el-form>
                <el-form-item label="日期">
                    <el-input v-model="RedactAlign.date"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="RedactAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="RedactAlign.address"></el-input>
                </el-form-item>
            </el-form>
            <el-button @click="Redactsubmit"> 提交</el-button>
        </el-dialog>
         <el-table
                :data="tableData"
                style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
             <el-table-column
                prop="address"
                label="编辑">
            <template slot-scope="scope">
                    <el-button @click="RedactSubmitdata(scope.row)" style="margin:20px"> 编辑 </el-button>
            </template>
            </el-table-column>
            </el-table>

    </div> 
</template>
<script>
import { formframe } from '@/assets/js/frame.js'
import { blurverify } from '@/assets/js/frame.js'
import { empty } from '@/assets/js/frame.js'
    export default{
        data(){
            return{
                ShowDialog:false,
                TestSubmit:false,
                RedactSubmit:false,
                formLabelAlign:{},
                RedactAlign:{},
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        },
        methods:{
            RedactSubmitdata(row){
                this.RedactAlign = row
                this.RedactSubmit = true
            },
            Redactsubmit(){
                this.RedactSubmit = false
            },
            Testsubmit(){
                this.TestSubmit = false
                for(var i = 1 ; i <= this.formLabelAlign.address;i++){
                    const newdata = {}
                    for(var key in this.formLabelAlign){
                        newdata[key] = this.formLabelAlign[key]
                    }
                    this.tableData.push(newdata)
                }
            },
            blurinput(item,index){
                if(item.apiurl != undefined){
                    blurverify(this,item.apiurl,item.value,index)
                }
            },
            handleClosetest(){
                this.RedactSubmit = false
                this.TestSubmit = false
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