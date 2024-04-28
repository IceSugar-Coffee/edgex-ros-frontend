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
    methods: {
        getUrl(act) {
            //TODO 此处act和device profile并不对应, 需要修改 
            var ip = "172.24.37.153" //对应broker代理机的地址, edgex核心服务也要在这台机器上
            var devicename = "device1" //对应创建的设备名称
            return "http://" + ip + ":59882/api/v2/device/name/" + devicename + "/" + act
            // return "http://" + ip + ":59882/api/v2/device/name/" + devicename + "/run" //测试用
        },
        forward() {
            axios({
                method: 'put',
                url: this.getUrl("forward"),
                data: {
                    run: true
                }
            })
                .then(response => console.log(response))
                .catch(error => console.log(error))
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