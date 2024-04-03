<script setup>
  import BannerSoleTradeComponent from '@/components/businessview/BannerSoleTradeComponent.vue';
  import ContentComponent from '@/components/businessview/ContentComponent.vue';
  import ContentImgComponent from '@/components/businessview/ContentImgComponent.vue';
</script>

<template>
  <BannerSoleTradeComponent/>

  <section class="py-5">

    <div class="auto-container">
      <div class="row py-4">
          <ContentComponent
            :info="{
              imgName: 'security-safe.png',
              name: `Dedicated Account`,
              desc: `Experience the convenience of a dedicated account designed specifically for sole traders and freelancers. HelloMe Money understands the unique financial needs of independent professionals, providing a platform tailored to support your business endeavors.`
            }"
          />
          <ContentImgComponent
            :info="{
              imgName: 'r_v2.png',
            }"
          />
      </div>

      <div class="row py-4">
          <ContentImgComponent
            :info="{
              imgName: `r_v1.png`,
            }"
          />

          <ContentComponent
            :info="{
              imgName: `frame_v.png`,
              name: `Tailored Features`,
              desc: `Enjoy a range of features tailored to meet the dynamic needs of your independent business. From simplified invoicing to efficient expense tracking, HelloMe Money offers tools to streamline your financial management and help you focus on what you do best.` 
            }"
          />
      </div>

    </div>

  </section>

</template>

<style scoped>

</style>



