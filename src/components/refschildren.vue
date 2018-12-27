<template>
<div>
<template>
  <div>
    
  </div>
</template>

<h1>{{num}}</h1>
</div>
</template>
<script>
export default{
    data(){
      return {
        num:'123'
      }
    },
    computed: {
    },
    methods:{
      childMethod() {
          return this.num++
      }
    },
    created(){
    }
}
</script>