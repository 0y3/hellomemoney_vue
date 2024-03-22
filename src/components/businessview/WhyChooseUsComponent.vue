<script>
// export default {
//     name: 'WhyChooseUsComponent',
//     props: {
//     }
// }
</script>


<template>

    <!-- WhyChooseUsComponent  -->
    <div class="card mb-3 card_about text-white" style="">
        <div class="row no-gutters">
            <div class="col-md-12">
                <div class="card-body py-0">
                    <h3 class="card-title mb-2">Multi-Currency Flexibility</h3>
                    <p class="pl-3 pr-4">
                        Conduct transactions in over 30 currencies without the constraints 
                        of a traditional banking setup. Our multi-currency accounts enable your business to operate globally, 
                        effortlessly navigating through diverse financial landscapes.
                    </p>
                </div>
            </div>
        </div>
    </div>
            
    <!-- WhyChooseUsComponent end -->

</template>

<style scoped>

.card {
    background-color: unset;
    border: unset;
    border-radius: unset;
    font-family: ClashGrotesk-Regular;
}

.card-body > h3{
    color: #fff;
    font-family: ClashGrotesk-Regular;
    font-size: 20px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.96px;
}

.card-body > h3:before{
    content: url('/src/assets/img/top_line.png');
    padding-right: 5px;
    position: absolute;
    top: -4px;
    left: -30px;

}

.card-body > p{
    font-family: ClashGrotesk-light;
    font-size: 15px;
    letter-spacing: 0.64px;
    line-height: 28px;
    font-weight: 400;;
    text-align: justify;
}
</style>