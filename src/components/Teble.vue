<template>
<div>
    <input type="text" v-model="text" @keyup.13="Seach()" class="el-input__inner" placeholder="搜索"> 
    <el-table :data="tableData" border style="width: 100%" :default-sort = "{prop: 'date', order: 'descending'}" @cell-click="rowcell" >
      <el-table-column>
        <template slot-scope="scope">
            <el-tag>
                {{scope.row.goods_name}}
            </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="goods_name" label="商品名"></el-table-column>
      <el-table-column prop="price" label="价钱" sortable></el-table-column>
      <el-table-column prop="goods_thumb" label="商品链接"></el-table-column>
      <el-table-column prop="goods_thumb" label="金钱" :formatter="formatter"></el-table-column>
      <el-table-column label="操作" inline-template>
        <div>
          <el-button @click.native="showDetail(row)">查看详情</el-button>
          <el-button @click="shoDetail(row)">详情</el-button>
        </div>
      </el-table-column>
    </el-table>
</div>
</template>

<script>
  export default {
    data() {
      return {
        text:'',
        tableData: []
      }
    },
    created(){
      this.Seach()
    },
    modules(){
     
    },
    methods: {
      Seach(){
        this.$http.get('http://h6.duchengjiu.top/shop/api_goods.php?search_text='+this.text)
            .then((res)=>{
            console.log(res)
              if(res.data.message == '商品搜索数据获取成功'){
                this.tableData = res.data.data
              }
              
            })
            .catch((error)=>{
              console.log(error)
            })
          },
        rowcell(row, column, cell, event){
          alert('点击行'+row.goods_name)
        },
        formatter(row, column, cellValue) {
            return '金钱'
        },
        showDetail(row,column,cellValue){
          alert('查看'+row.goods_name)
        },
        shoDetail(row,column,cellValue){
          console.log(row)
        }
      
    }
  }
</script>