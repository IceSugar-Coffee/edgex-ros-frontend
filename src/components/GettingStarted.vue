<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p class="description">一个智能网联机器人平台</p>
        <p class="actions">
            <a class="get-started" href="/roslist" @click="toConsole()">
                进入控制台
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"
                    data-v-9e9e3e87="">
                    <path
                        d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z">
                    </path>
                </svg>
            </a>
            <a class="setup" @click="toAbout()">关于</a>
        </p>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
    methods: {
        toConsole() {
            this.$router.push("/roslist");
        },
        toAbout() {
            this.$router.push("/about");
        }
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
    color: rgb(64, 158, 255);
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
    font-size: 20px;
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
    background-color: rgb(64, 158, 255);
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