<template>
    <div>
        ajax    
    </div>
</template>
<script>
export default {
    data() {
        return {
            ORG1_TOKEN:'',
            ORG2_TOKEN:'',
            users1:{
                "username":"Jim","orgName":"Org1"
            },
            users2:{
                "username":"Barry","orgName":"Org2"
            },
            channels:{
                "channelName":"mychannel",
	            "channelConfigPath":"../artifacts/channel/mychannel.tx"
            }
        }
    },
}
</script>