<script setup>
  import ContentComponent from '@/components/businessview/ContentComponent.vue';
  import ContentImgComponent from '@/components/businessview/ContentImgComponent.vue';
</script>

<template>

  <section
    class="sms-section d-flex align-items-center position-relative overflow-hidden">
    <div class="container-fluid">
      <div class="row justify-content-between">
        <div class="col-md-12 text-center text-dark my-5">
          <ul class="list1 clearfix list-flex">
            <li>Crypto Exchange</li>
          </ul>
        </div>
        <div class="col-md-6 offset-md-3 col-sm-12 content-column text-white align-self-center text-center">
          <div class="SME_header">
            <h2>Explore the world of cryptocurrency with HelloMe Money's crypto exchange.</h2>
            <p class="mt-5"> 
              Buy, sell, and trade various cryptocurrencies securely, all within the HelloMe Money platform.
            </p>
            
            <div class="action-btns mts-5">
              <RouterLink
                  :to="{ name: 'home' }"
                  class="btn stylebtn mr-2"
              >Get Started</RouterLink>
              
              <RouterLink
              :to="{ name: 'home' }"
              class="btn stylebtn"
              style="background: unset !important; color: #fff;"
              >Contact Us</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

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

.sms-section{
  background: url('/src/assets/img/bg_ex.png') no-repeat;
  /* background-size: 100% 100%; */
}
.list1 li {
  position: relative;
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #121212;
  margin-bottom: 18px;
  margin-right: 10px;
  background: white;
  padding: 8px 16px;
  border-radius: 30px;
  line-height: 25px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.SME_header h2{
  font-family: ClashGrotesk-Variable;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px;
  /* letter-spacing: 1.28px; */
}

.SME_header p{
  font-family: ClashGrotesk-Variable;
  font-size: 28px;
  font-weight: 300;
  letter-spacing: 0.08px;
}

.btn.stylebtn {
  background: #fff;
  color: #121212;
  margin-bottom: 10px;
  border: 1px solid #fff !important;
}

</style>



