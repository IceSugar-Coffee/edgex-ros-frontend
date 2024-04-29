<template>
    <img :src="imgUrl">
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            imgUrl: ""
        }
    },
    props: {
        deviceName: String
    },
    methods: {
        getCmdUrl(act) {
            var ip = "172.27.137.1" //TODO对应broker代理机的地址, edgex核心服务也要在这台机器上
            return "http://" + ip + ":59882/api/v2/device/name/" + this.deviceName + "/" + act
        },
        getCameraUrl() {
            axios({
                method: 'get',
                url: this.getCmdUrl("cameraUrl")
            })
                .then((response) => {
                    this.imgUrl = response.data.event.readings[0].value
                    + "?_=" + new Date().getTime();
                })
                .catch(error => console.log(error))
        },
    },
    mounted() {
        setInterval(() => {
            this.getCameraUrl()
        }, 1000)
    }
}

</script>