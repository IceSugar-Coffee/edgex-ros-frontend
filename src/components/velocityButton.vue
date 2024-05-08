<template>
    <div class="velocity-form-box">
        <input type="velocity" placeholder="input velocity" v-model="velocity" />
        <button class="but" @click="submit()">芜湖起飞</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            velocity: null
        }
    },
    props: {
        deviceName: String
    },
    methods: {
        getCmdUrl(act) {
            var ip = "172.27.134.232" //TODO对应broker代理机的地址, edgex核心服务也要在这台机器上
            return "http://" + ip + ":59882/api/v2/device/name/" + this.deviceName + "/" + act
        },
        async setVelocity() {
            axios({
                method: 'put',
                url: this.getCmdUrl("velocity"),
                data: {
                    velocity: this.velocity
                }
            })  .then(respopnse => console.log(respopnse))
        },
        async submit() {
            await this.setVelocity()
            alert("Success!")
        }
    }
}
</script>

<style scoped>
input[type="velocity"] {
    margin-right: 10px;
    border: 1px solid #ccc; /* 设置输入框边框样式 */
    border-radius: 8px; /* 设置输入框圆角 */
    padding: 8px 12px; /* 设置输入框内边距 */
    font-size: 16px; /* 设置输入框文字大小 */
    transition: border-color 0.5s; /* 设置边框颜色的过渡效果 */
}

input[type="velocity"]:focus {
    outline: none; /* 移除输入框聚焦时的默认外观 */
    border-color: #42b983; /* 设置输入框聚焦时的边框颜色 */
}

.but {
    background-color: #66cdaa; /* 设置按钮背景色 */
    color: #fff; /* 设置按钮文字颜色 */
    border: none; /* 移除按钮边框 */
    border-radius: 8px; /* 设置按钮圆角 */
    padding: 8px 18px; /* 设置按钮内边距 */
    font-size: 16px; /* 设置按钮文字大小 */
    font-weight: 500; /* 设置按钮文字粗细 */
    cursor: pointer; /* 设置鼠标样式为手型 */
    transition: background-color 0.5s, color 0.5s; /* 设置按钮背景色和文字颜色的过渡效果 */
}

.but:hover {
    background-color: #42b983; /* 设置鼠标悬停时按钮背景色 */
    color: #fff; /* 设置鼠标悬停时按钮文字颜色 */
}
</style>