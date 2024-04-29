<template>
    <h1>This is {{ deviceName }}'s Controller Page</h1>
</template>

<script>
export default {
    props: {
        deviceName: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

/* ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
} */

a {
    color: #42b983;
    text-decoration: inherit;
    touch-action: manipulation;
    margin: 18px 0;
    font-size: 16px;
    display: inline-block;
    background-color: rgb(241, 241, 241);
    padding: 8px 18px;
    font-weight: 500;
    border-radius: 8px;
    transition: background-color .5s, color .5s;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

.description {
    font-size: 16px;
    margin: 18px 0 30px;
    /* max-width: 960px; */
    line-height: 1.5;
    color: rgba(60, 60, 60, 0.7);
    transition: color .5s;
}

.get-started {
    font-size: 16px;
    display: inline-block;
    border-radius: 8px;
    transition: background-color .5s, color .5s;
    position: relative;
    font-weight: 600;
    background-color: rgb(66, 184, 131);
    color: #fff;
    margin-right: 18px;
    padding: 8px 1em;
}

.icon {
    display: inline;
    position: relative;
    top: -1px;
    margin-left: 2px;
    fill: currentColor;
    transition: transform .2s;
}

.setup[data-v-9e9e3e87] {
    color: rgb(7, 101, 130);
}
</style>