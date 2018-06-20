var structure = []
var submit = false
var submitjson = {}
function formframe(_this){
    structure = _this.$store.state.chate.structure
    for(var i = 0 ; i < structure.length;i++){
        if(structure[i].value != ""){
            if(structure[i].verify){
                var value = structure[i].value
                var verify = new RegExp(structure[i].verify)
                if(!verify.test(value)){
                    submit = false
                    structure[i].message = "请输入正确的" + structure[i].title 
                }else{
                    submit = true
                    structure[i].message = "" 
                }
            }
        }else{
            submit = false
            structure[i].message = "请输入内容"
        }
        
        if(structure[i].apiurl != undefined){
            getjsonp(_this,structure[i].apiurl,structure[i].value,i)
        }
    }
    if(submit){
        _this.ShowDialog = false
        console.log('aa')
        submitfrom(_this)
    }
}
function submitfrom(_this){
        structure = _this.$store.state.chate.structure
        for(var i = 0 ;i < structure.length;i++){
            submitjson[structure[i].type] = structure[i].value
        } 
    _this.$jsonp('http://localhost:8000/'+_this.$store.state.chate.submiturl,submitjson)
    .then(res=>{
        if(res.success == 0){
            _this.$message({
                message: '恭喜你，创建成功',
                type: 'success'
              });
            empty(_this)
        }else{
            this.$message({
                message: '警告哦，创建失败',
                type: 'warning'
            });
        }
    })
    .catch(error=>{

    })
}
function empty(_this){
    structure = _this.$store.state.chate.structure
    for(var i = 0 ; i < structure.length;i++){
        if(typeof(structure[i].value) == 'string'){
            if(structure[i].children){
                structure[i].value = structure[i].children[0].label
                structure[i].message = ''
            }else{
                structure[i].value = ''
                structure[i].message = ''
            }
        }else if(typeof(structure[i].value) == 'boolean'){
           structure[i].value = true
           structure[i].message = ''
        }else if(typeof(structure[i].value) == 'object'){
            structure[i].value = []
            if(structure[i].children){
                structure[i].message = ''
                structure[i].value.push(structure[i].children[0].label)
            }   
        }
    }
}
function blurverify(_this,apiurl,value,i){
    if(value.length > 0){
        getjsonp(_this,apiurl,value,i)
    }else{
        _this.$store.state.chate.structure[i].message = '请输入内容'
    }
}
function getjsonp(_this,apiurl,value,i){
    _this.$jsonp('http://localhost:8000/'+apiurl+'?name='+value)
           .then(res=>{
               if(res.success != 0){
                    submit = false
                    _this.$store.state.chate.structure[i].message = res.data.msg
               }else{
                    submit = true
                    _this.$store.state.chate.structure[i].message = ''
               }
           })
           .catch(error=>{

           })
}
function getWeekOfYear(){
    var today = new Date();
    var firstDay = new Date(today.getFullYear(),0, 1);
    var dayOfWeek = firstDay.getDay(); 
    var spendDay= 1;
    if (dayOfWeek !=0) {
    spendDay=7-dayOfWeek+1;
    }
    firstDay = new Date(today.getFullYear(),0, 1+spendDay);
    var d =Math.ceil((today.valueOf()- firstDay.valueOf())/ 86400000);
    var result =Math.ceil(d/7);
  
    // return result+1;
}
export {
    formframe,
    blurverify,
    empty
}