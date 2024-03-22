<script>

    
    import Header from './Header.vue';
    import Footer from './Footer.vue';
    // import { useRoute } from 'vue-router'
    // import { computed  } from 'vue';
    // const route = useRoute()


    // const themeName = computed(() => {
    //     return route.meta.templateColor === 'dark'?['black-bg']: '';
    // })
    export default {
        
        components: {
            Header,
             Footer
        },
        computed:{
            themeName(){return this.$route.meta.templateColor == 'dark'?['black-bg']: '';}
        },
    }

</script>

<script setup>
/*
    import { useRoute } from 'vue-router'
    import { reactive, computed } from 'vue'

    const route = useRoute()

    
    const themeName = computed(() => {
        return route.meta.templateColor === 'dark'?['black-bg']: '';
    })
*/
   
</script>

<template>
    <div class="boxed_wrapper" :class="themeName">
        <Header/>

        <RouterView/>

        <Footer />

    </div>
</template>
