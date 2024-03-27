<script>
export default {}
</script>

<template>
  <section
    class="sms-section d-flex align-items-center position-relative overflow-hidden">
    <div class="container-fluid">
      <div class="row justify-content-between">
        <div class="col-md-12 text-center text-dark my-5">
          <ul class="list1 clearfix list-flex">
            <li>Sole Trader / Freelancer</li>
          </ul>
        </div>
        <div class="col-md-6 offset-md-3 col-sm-12 content-column text-white align-self-center text-center">
          <div class="SME_header">
            <h2>HelloMe Money caters to the financial requirements of sole traders and freelancers</h2>
            <p class="mt-5">Enjoy a dedicated account and features tailored to support the dynamic needs of your independent business.</p>
            
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
</template>

<style scoped>
.sms-section{
  background: url('/src/assets/img/bg_sole.png') no-repeat;
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
  font-weight: 500;
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
