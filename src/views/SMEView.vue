<script setup>
  import BannerSMEComponent from '@/components/businessview/BannerSMEComponent.vue';
  import ContentComponent from '@/components/businessview/ContentComponent.vue';
  import ContentImgComponent from '@/components/businessview/ContentImgComponent.vue';
</script>

<template>
  <BannerSMEComponent/>

  <section class="sme_service py-5">

    <div class="auto-container">
      <div class="row py-4">
          <ContentComponent
            :info="{
              imgName: 'path_v.png',
              name: 'Tailored Solutions',
              desc: 'Discover tailored financial solutions crafted specifically for Small and Medium Enterprises (SMEs). Our Business Account is designed to address the unique needs of your growing business, providing specialized accounts, tools, and services to streamline your financial operations'
            }"
          />
          <ContentImgComponent
            :info="{
              imgName: 'r_v1.png',
            }"
          />
      </div>

      <div class="row py-4">
          <ContentImgComponent
            :info="{
              imgName: `r_v.png`,
            }"
          />

          <ContentComponent
            :info="{
              imgName: `bank_v.png`,
              name: `Streamlined Banking`,
              desc: `Experience seamless banking with HelloMe Money's Business Account. From managing cash flow to making international payments, our platform offers intuitive tools and features to simplify your day-to-day banking tasks. Say goodbye to complexity and hello to effortless financial management.`
            }"
          />
      </div>

      
      <div class="row py-4">
          <ContentComponent
            :info="{
              imgName: `ranking_v.png`,
              name: `Growth Opportunities`,
              desc: `Unlock growth opportunities for your business with HelloMe Money. Our Business Account empowers SMEs to plan for the future, offering resources and support to fuel expansion and success. Whether you're scaling up or venturing into new markets, HelloMe Money is here to help you thrive.`
            }"
          />
          <ContentImgComponent
            :info="{
              imgName: `r_v1.png`,
            }"
          />
      </div>
    </div>

  </section>

</template>

<style scoped>
.sme_service{
  background: url('/src/assets/img/bg_blackblue.png') no-repeat;
  /* background-size: 100% 100%; */
}

</style>



