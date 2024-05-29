<template>
    <div class="control-wrapper">
        <div class="control-btn control-top" @click="forward()"></div>
        <div class="control-btn control-left" @click="left()"></div>
        <div class="control-btn control-bottom" @click="backward()"></div>
        <div class="control-btn control-right" @click="right()"></div>
        <div class="control-round">
            <div class="control-round-inner" @click="stop()"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: {
        deviceName: String
    },
    methods: {
        getUrl(act) {
            var ip = "localhost" //TODO对应broker代理机的地址, edgex核心服务也要在这台机器上
            return "http://" + ip + ":8080/" + this.deviceName + "/" + act
        },
        forward() {
            this.$router.push("/map");
            // console.log("req: " + Date.now())
            // axios({
            //     method: 'get',
            //     url: this.getUrl("forward"),
            // })
            //     .then(response => {
            //         console.log("res: " + Date.now())
            //         console.log(response)
            //     })
            //     .catch(error => console.log(error))
        },
        left() {
            axios({
                method: 'put',
                url: this.getUrl("left"),
                data: {
                    left: true
                }
            })
                .then(response => console.log(response))
                .catch(error => console.log(error))
        },
        right() {
            axios({
                method: 'put',
                url: this.getUrl("right"),
                data: {
                    right: true
                }
            })
                .then(response => console.log(response))
                .catch(error => console.log(error))
        },
        backward() {
            axios({
                method: 'put',
                url: this.getUrl("backward"),
                data: {
                    backward: true
                }
            })
                .then(response => console.log(response))
                .catch(error => console.log(error))
        },
        stop() {
            axios({
                method: 'put',
                url: this.getUrl("stop"),
                data: {
                    stop: true
                }
            })
                .then(response => console.log(response))
                .catch(error => console.log(error))
        }
    }
}
</script>