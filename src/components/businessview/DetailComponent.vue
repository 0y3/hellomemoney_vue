<script>
import WhyChooseUsComponent from '@/components/businessview/WhyChooseUsComponent.vue'
export default {
  name: 'DetailComponent',
  components: {
    WhyChooseUsComponent
  }
}
</script>

<template>
  <!-- about-section -->
  <section class="about-sectionn">
    <div class="auto-container py-5">
      <div class="text-center p-4 BA_about">
        <!-- <span class="">Why Choose HelloMe Money Business Accounts?</span> -->
        <span style="position: relative;">
            <span class="BA_about_span">Why Choose HelloMe Money Business Accounts?</span>
            <img class="d-none d-md-block" src="/src/assets/img/down_line2.png" width="75px" alt="" />
        </span>
        
      </div>
      <div class="row clearfix mt-5">
        <!-- <div class="col-md-6">
          <WhyChooseUsComponent />
        </div> -->
        <div class="col-md-6">
            <div class="card mb-5 card_about text-white" style="">
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
        </div>

        <div class="col-md-6">
            <div class="card mb-5 card_about text-white" style="">
                <div class="row no-gutters">
                    <div class="col-md-12">
                        <div class="card-body py-0">
                            <h3 class="card-title mb-2">Tailored for Every Business Size</h3>
                            <p class="pl-3 pr-4">
                                Whether you're a thriving enterprise or a dynamic startup, our business accounts cater to all. 
                                Organize your finances efficiently, manage expenses seamlessly, 
                                and streamline financial operations with features crafted for businesses of every scale
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card mb-5 card_about text-white" style="">
                <div class="row no-gutters">
                    <div class="col-md-12">
                        <div class="card-body py-0">
                            <h3 class="card-title mb-2">Streamlined International Transfers</h3>
                            <p class="pl-3 pr-4">
                                Say goodbye to complex and costly international transfers. With HelloMe Money, 
                                you can transfer funds globally with ease, taking advantage of competitive exchange rates and low transaction fees.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-6">
          <!-- <WhyChooseUsComponent /> -->
            <div class="card mb-5 card_about text-white" style="">
                <div class="row no-gutters">
                    <div class="col-md-12">
                        <div class="card-body py-0">
                            <h3 class="card-title mb-2">Smart Expense Management</h3>
                            <p class="pl-3 pr-4">
                                 HelloMe Money provides tools to effortlessly manage your business expenses. 
                                From automated invoicing to intuitive expense tracking, our platform ensures that you stay on top of your financial game.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card mb-5 card_about text-white" style="">
                <div class="row no-gutters">
                    <div class="col-md-12">
                        <div class="card-body py-0">
                            <h3 class="card-title mb-2">Secure and Transparent</h3>
                            <p class="pl-3 pr-4">
                                Your business's financial security is our priority. Benefit from a secure and transparent financial environment, 
                                where encryption and authentication measures ensure the safety of every transaction.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="card mb-5 card_about text-white" style="">
                <div class="row no-gutters">
                    <div class="col-md-12">
                        <div class="card-body py-0">
                            <h3 class="card-title mb-2">Personalized Access Control</h3>
                            <p class="pl-3 pr-4">
                                 Tailor access permissions for your team members based on their roles and responsibilities. 
                                Our platform enables you to manage privacy and access control with precision, ensuring a secure and controlled financial environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </section>
  <!-- about-section end -->
</template>

<style scoped>

.BA_about h3 {
  position: relative;
  color: #2c7ddf;
  font-family: ClashGrotesk-Regular;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.68px;
}

.BA_about img {
  position: absolute;
  top: 15px;
  right: -125px;
  transform: rotate(180deg);
  z-index: 1;
}

.BA_about .BA_about_span {
  position: relative;
  color: #2c7ddf;
  font-family: ClashGrotesk-Regular;
  font-size: 34px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.68px;
}

/*
.BA_about span:before {
  content: url('/img/down_line.png');
  position: absolute;
  right: 0px;
  top: 0px;
} */


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
