<template>
    <img :src="src">
</template>

<script>
export default {
    data() {
        return {
            src: require('../../python/image.png')
        }
    }
}
</script>