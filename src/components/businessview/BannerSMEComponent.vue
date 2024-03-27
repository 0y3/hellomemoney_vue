<script>
export default {}
</script>

<template>
  <section
    class="sms-section min-vh-100 d-flex align-items-center bg-darkk position-relative overflow-hidden" style="background: #121212;">
    <div class="container-fluid">
      <div class="row justify-content-between py-5">
        <div class="col-md-12 text-center text-dark mb-4">
          <ul class="list1 clearfix list-flex">
            <li>SME (Small and Medium Enterprises)</li>
          </ul>
        </div>
        <div class="col-lg-6 col-md-6 offset-lg-1 offset-md-1 col-sm-12 content-column text-white align-self-center">
          <div class="SME_header">
            <h2>Tailored financial solutions for Small and Medium Enterprises (SMEs) with HelloMe Money</h2>
            <p class="mt-5">Access specialized accounts, tools, and services designed to meet the unique needs of your business.</p>
            
            <div class="action-btns mts-5">
              <RouterLink
                  :to="{ name: 'home' }"
                  class="btn stylebtn mr-2"
              >Get multicurrency account</RouterLink>
              
              <RouterLink
              :to="{ name: 'home' }"
              class="btn stylebtn"
              style="background: unset !important; color: #fff;"
              >Contact Us</RouterLink>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-5 col-sm-12 image-column text-right">
            <div class="image-box">
                <img src="/src/assets/img/Herosectionimages.png" width="550px" alt="">
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
  letter-spacing: 1.28px;
}

.btn.stylebtn {
  background: #fff;
  color: #121212;
  margin-bottom: 10px;
  border: 1px solid #fff !important;
}

</style>
