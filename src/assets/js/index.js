 var data
function myfun(_this){
        _this.$http.get("http://h6.duchengjiu.top/shop/api_ad.php?position_id=1")
                .then((res)=>{
                    console.log(res)
                     setTimeout(()=>{
                    data = res.data.data
                     },500)
                })
                .catch((error)=>{
                    console.log(error)
                })
        return data
                
}
export{
    myfun
}