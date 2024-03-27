<script setup>
import { computed } from 'vue'
    const props = defineProps(['info'])

    const imageUrl = computed(
        () => new URL(`/src/assets/img/flags/${props.info.imgName}`, import.meta.url).href
    )

</script>


<template>

    <!-- <li class="text-white font-weight-normal mb-3 flex-fill">
        <img :src="imageUrl" class="pr-2" alt=""> Sendmoney to {{ props.info.name }}
    </li> -->

    <div class="col text-white font-weight-normal mb-3">
        <div class="row">
            <div class="col-2 p-0"><img :src="imageUrl" alt=""></div>
            <div class="col-10 p-0 align-self-center"> Sendmoney to {{ props.info.name }}</div>
        </div>
    </div>

</template>

<style scoped>

div .col {
    font-family:ClashGrotesk-light;
    /* min-width: 6rem; */
    font-size: 14px;
    padding: 0 10px;
    line-height: normal;
}


</style>