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
            var ip = "172.24.37.153" //对应broker代理机的地址, edgex核心服务也要在这台机器上
            return "http://" + ip + ":59882/api/v2/device/name/" + this.deviceName + "/" + act
        },
        getCameraUrl() {
            axios({
                method: 'get',
                url: this.getCmdUrl("cameraUrl")
            })
                .then(function (response) {
                    console.log(response)
                })
                .catch(error => console.log(error))
            this.imgUrl = "http://127.0.0.1:5000/generate_image" + "?" + new Date().getTime();
        },
    },
    mounted() {
        setInterval(() => {
            // this.getCameraUrl()
        }, 500)
    }
}

</script>