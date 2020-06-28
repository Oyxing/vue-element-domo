<template>
    <div>
        index
        
        <component :is="apps"></component>
    </div>
</template>
<script>
export default {
    data() {
        return {
          apps: {}    
        }
    },
    beforeMount() {
        this.apps=() => import('./th  ree')
    }
}
</script>