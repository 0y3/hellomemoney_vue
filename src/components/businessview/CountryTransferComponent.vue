<script setup>
import { computed } from 'vue'
    const props = defineProps(['info'])

    const imageUrl = computed(
        () => new URL(`/src/assets/img/flags/${props.info.imgName}`, import.meta.url).href
    )

</script>


<template>

    <li class="text-white font-weight-normal mb-3 flex-fill">
        <img :src="imageUrl" class="pr-2" alt=""> Sendmoney to {{ props.info.name }}
    </li>

</template>

<style scoped>

li {
    font-family:ClashGrotesk-light;
    /* min-width: 6rem; */
    font-size: 14px;
    padding: 0 10px;
}

</style>