<script setup>
import { computed } from 'vue'
    const props = defineProps(['info'])

    const imageUrl = computed(
        () => new URL(`/src/assets/img/${props.info.imgName}`, import.meta.url).href
    )

</script>


<template>

    <div class="col-md-6 col-sm-6">
        <div class="inner-box p-3  roundedd">
            <div class="image-box">
                <figure class="image"><img :src="imageUrl" alt=""></figure>
            </div>
        </div>
    </div>

</template>

<style scoped>


</style>