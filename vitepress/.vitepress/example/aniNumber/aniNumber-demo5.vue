<template>
    <demo class="flex-item">
        <vc-button-group>
            <vc-button @click="handleChange">开始</vc-button>
            <vc-button @click="handlePlay">播放</vc-button>
        </vc-button-group>
        <vc-ani-number :value="100" ref="aniNumberRef" :animate="isAnimate" @begin="begin" @finish="finish" @play="play"></vc-ani-number>
    </demo>
</template>
<script setup lang="ts">
import { ref } from "vue"
defineOptions({
    name: "aniNumber-demo5"
})

const aniNumberRef = ref()
const isAnimate = ref(false)
const handleChange = () => {
    isAnimate.value = true
}
const handlePlay = () => {
    aniNumberRef.value?.begin()
}

const begin = (aniNumRef) => {
    console.log("begin:" , aniNumRef)
}

const finish = (aniNumRef) => {
    console.log("finish:" , aniNumRef)
}

const play = ({ ref, value }) => {
    console.log("play:" , ref , value)
}
</script>