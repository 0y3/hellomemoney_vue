<script setup>
import { computed } from 'vue'
    const props = defineProps(['info'])

    const imageUrl = computed(
        () => new URL(`/src/assets/img/${props.info.imgName}`, import.meta.url).href
    )

</script>


<template>

    
<div class="col-lg-6 col-md-12 col-sm-12 content-column text-justify align-self-center">
    <div class="contentblock">
        <div class="sec-title2 mb-3">
            {{ props.info.name }} <img :src="imageUrl" width="40" alt="">
        </div>
        <div class="px-3">
            <p> {{ props.info.desc }}</p>
        </div>
    </div>
</div>

</template>

<style scoped>

.sec-title2 {
    color: #F0F0F0;
    font-family: ClashGrotesk-Variable;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.6px;
    
}

.contentblock p{
    color: #F0F0F0;
    font-family: ClashGrotesk-Variable;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 1.5px;
}

.inner-box  h3{
    font-family: ClashGrotesk-Variable;
    font-size: 16px;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    letter-spacing: 1.6px;
}


</style>