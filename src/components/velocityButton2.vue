<template>
    <div class="velocity-form-box">
        <input type="velocity" placeholder="" v-model="velocity" />
        <button class="but" @click="submit()">设置参数</button>
    </div>
</template>

<script>
import axios from 'axios';
import { ElNotification } from 'element-plus'

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
        getCmdUrl() {
            var ip = "localhost" //TODO对应broker代理机的地址, edgex核心服务也要在这台机器上
            return "http://" + ip + ":8080/" + this.deviceName + "/getVelocity"
        },
        async setVelocity() {
            axios({
                method: 'post',
                url: this.getCmdUrl(),
                data: {
                    velocity: this.velocity
                }
            })  .then(respopnse => console.log(respopnse))
        },
        submit() {
            ElNotification({
                title: 'Success',
                message: '设置成功',
                type: 'success',
            })
        }
    }
}
</script>

<style scoped>
input[type="velocity"] {
    margin-top: -30px;
    margin-inline-end: 10px;
    border: 1px solid #ccc; /* 设置输入框边框样式 */
    border-radius: 8px; /* 设置输入框圆角 */
    padding: 8px 12px; /* 设置输入框内边距 */
    font-size: 16px; /* 设置输入框文字大小 */
    transition: border-color 0.5s; /* 设置边框颜色的过渡效果 */
}

input[type="velocity"]:focus {
    outline: none; /* 移除输入框聚焦时的默认外观 */
    border-color: rgb(64, 158, 255)/* 设置输入框聚焦时的边框颜色 */
}

.but {
    background-color: rgb(64, 158, 255); /* 设置按钮背景色 */
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
    background-color: rgb(64, 158, 255); /* 设置鼠标悬停时按钮背景色 */
    color: #fff; /* 设置鼠标悬停时按钮文字颜色 */
}
</style>