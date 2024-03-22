<script setup>
import { computed } from 'vue'
    const props = defineProps(['info'])

    const imageUrl = computed(
        () => new URL(`/src/assets/img/flags/${props.info.imgName}`, import.meta.url).href
    )

</script>


<template>

    <!-- CurrencyComponent  -->
    <div class="col-md-3 col-sm-6 pb-5">
        <a href="#">
        <div class="inner-box p-3 borderr border-darkk rounded">
            <div class="image-box">
                <figure class="image"><img :src="imageUrl" width="60" alt=""></figure>
            </div>
            <div class="lower-content text-white pt-3">
                <h3>{{ props.info.name }}</h3>
                <div class="designation pt-4">
                    <p class="text-blue">{{ props.info.desc }}</p>
                </div>
            </div>
        </div>
        </a>
    </div>
            
    <!-- CurrencyComponent end -->

</template>

<style scoped>

.inner-box {
    position: relative;
    display: block;
    /* background-color: #ffffff; */
    border-radius: 10px;
    overflow: hidden;
    /* box-shadow: 0 0px 30px rgba(238, 232, 232, 0.15); */
    box-shadow:0 1rem 3rem rgb(114, 109, 109, 0.15);
    
}

.inner-box p{
    font-family: ClashGrotesk-Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    letter-spacing: 1.6px;
}

.inner-box  h3{
    font-family: ClashGrotesk-Variable;
    font-size: 16px;
    font-weight: 500;
    line-height: 140%; /* 22.4px */
    letter-spacing: 1.6px;
}


</style>