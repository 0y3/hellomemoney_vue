<script>
export default {
    
}
</script>


<template>
    <section class="hero-section ptb-100 min-vh-100 d-flex align-items-center bg-darkk position-relative overflow-hidden">
        <div class="auto-container">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-7 col-md-12 col-sm-12 content-column text-white">
                    <div class="hero-content-wrap jobHD">
                        <!-- <h5 class="text-warning ban-font-weight">#1 SOFTWARE COMPANY IN WORLD</h5> -->
                        <h1 class="fw-bold display-5 text-responsive"><span>GET</span> MULTICURRENCY <span>ACCOUNT</span> </h1>

                        <ul class="list clearfix list-flex">
                            <li>Get Euro/GBP IBAN Account in your name</li>
                            <li>No Credit Check</li>
                        </ul>

                        <ul class="list2 clearfix list-flex">
                            <li>Send Money Locally & internationally With Your HelloMe Money Account</li>
                            <li>Sign Up in Minute</li>
                            <li>24/7 Customer Support</li>
                            <li>Free Credit Scoure Builder</li>
                        </ul>
                        <div class="action-btns mts-5">
                            <RouterLink
                                :to="{ name: 'home' }"
                                class="text-responsive btn style1 mr-2"
                            >Personal account</RouterLink>
                            
                            <RouterLink
                            :to="{ name: 'businessaccount' }"
                            class="text-responsive btn style1"
                            style="background: #fff !important; color: #2a65ca;"
                            >Business Account</RouterLink>
                            <!-- <a href="" class="btn style1 mr-2">Personal account</a> -->
                            <!-- <a href="" class="btn style1" style="background: #fff !important; color: #2a65ca;">Business account</a> -->
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-12 mt-5 mt-lg-0 ">
                <div class="p-4 BA_calc">
                    <div class="service-block-six">
                      <div class="inner-boxies p-3" style="margin-bottom: unset;">
                          <div class="contact-style-two">
                              <h3 class="text-center pb-2">Send Money</h3>
                              <b class="pb-3">How much do you want to send?</b>
                              <form method="post" id="contact-form" class="default-form" novalidate="novalidate"> 
                                  <div class="row clearfix pt-3">
                                      <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-0">
                                          <label class="">Amout</label>
                                          <div class="input-group mb-3">
                                              <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fa fa-pound-sign" style="position: unset; "></i></span>
                                              </div>
                                              <input type="text" class="form-control no-text" aria-label="Amount (to the nearest dollar)">
                                              <div class="input-group-append" style="border: 2px solid #dedede;border-radius: 0px 9px 9px 0px;">
                                                  <button class="btnn btn-outline-secondaryy dropdown-toggle px-1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                      <img src="https://flagsapi.com/GB/flat/48.png" style="width: 30px;border-radius: 80px; height: auto;">
                                                  </button>
                                                  <div class="dropdown-menu">
                                                      <a class="dropdown-item" href="#">Action</a>
                                                      <a class="dropdown-item" href="#">Another action</a>
                                                      <a class="dropdown-item" href="#">Something else here</a>
                                                      <div role="separator" class="dropdown-divider"></div>
                                                      <a class="dropdown-item" href="#">Separated link</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-lg-12 col-md-12 col-sm-12 text-center" style="margin-top: -30px;">
                                          <hr class="hr-center offset-sm-2 col-sm-6">
                                          <i class="icon-2x-circle text-white fa-solid fa-right-left fa-rotate-90" style="background-color: #0a2380;"></i>
                                      </div>
                                      <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-1">
                                          <label class="">Recipient receives</label>
                                          <div class="input-group mb-3">
                                              <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                  <i class="fa-solid fa-naira-sign" style="position: unset; "></i>
                                              </span>
                                              </div>
                                              <input type="text" class="form-control no-text" aria-label="Amount (to the nearest dollar)">
                                              <div class="input-group-append" style="border: 2px solid #dedede;border-radius: 0px 9px 9px 0px;">
                                                  <button class="btnn btn-outline-secondaryy dropdown-toggle px-1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                      <img src="https://flagsapi.com/NG/flat/48.png" style="width: 30px;border-radius: 80px; height: auto;">
                                                  </button>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                          <label class=""><b>Delivery Option</b></label>
                                          <select name=""  class="form-control input-lg" style="height: 60px;box-shadow: 0px 10px 30px rgb(0 0 0 / 10%);">
                                              <option value="bank">Bank</option>
                                              <option value="bank">Bank</option>
                                              <option value="bank">Bank</option>
                                          </select>
                                      </div>
                                      <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                                          <div class="brackline p-3">
                                              <p>Our Rate: <span class="pull-right">1.00 GBP = 1420.00 NGN</span></p>
                                              <p>Payable amount: <span class="pull-right">5 GBP</span></p>
                                          </div>
                                      </div>
                                      <div class="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                          <a href="" class="text-responsive btn style1 style2" style="width: 100%;">Send</a>
                                      </div>
                                  </div>
                                  <br>
                                  <p class="form-messege text-center"></p>
                              </form>
                          </div>
                      </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>

    <!-- about-section -->
    <section class="about-sectionn" style="position: relative;">
            <div class="image-box d-none d-md-block" style="position: absolute; top: -170px; left: 50px;"><img src="/src/assets/img/Group47286.png" width="250px" alt=""></div>
            <div class="auto-container">
                <div class="sec-title centred">
                    <h3 class="mb-3">The complete financial stack for your business</h3>
                    <p>Top-end financial tools to help your business with its financial operations and cash flow.</p>
                    <p>We help companies of all types work better, save time and money with a simply better digital banking service that works.</p>
                </div>
                <div class="row clearfix mt-5">
                    <div class="col-md-4">
                        <div class="card mb-3 card_about" style="">
                            <div class="row no-gutters">
                                <div class="col-md-2 col-2">
                                    <img src="/src/assets/img/Rectangle6.png" width="72px"  class="card-img" alt=""/>
                                </div>
                                <div class="col-md-10 col-10">
                                    <div class="card-body py-0">
                                        <h5 class="card-title mb-1" style="font-weight: 500; font-size: 18px;">Speed</h5>
                                        <p class="card-text" style="font-size: 15px; line-height: 20px;">Open a personal/business-grade current account from anywhere in 10 minutes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card mb-3 card_about" style="">
                            <div class="row no-gutters">
                                <div class="col-md-2 col-2">
                                    <img src="/src/assets/img/Rectangle7.png" width="72px" class="card-img" alt=""/>
                                </div>
                                <div class="col-md-10 col-10">
                                    <div class="card-body py-0">
                                        <h5 class="card-title mb-1" style="font-weight: 500; font-size: 18px;">Security</h5>
                                        <p class="card-text" style="font-size: 15px; line-height: 20px;">Rely on bank-grade security with all your money fully insured </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="card mb-3 card_about" style="">
                            <div class="row no-gutters">
                                <div class="col-md-2 col-2">
                                    <img src="/src/assets/img/Rectangle8.png" width="72px" class="card-img" alt=""/>
                                </div>
                                <div class="col-md-10 col-10">
                                    <div class="card-body py-0">
                                        <h5 class="card-title mb-1" style="font-weight: 500; font-size: 18px;">Support</h5>
                                        <p class="card-text" style="font-size: 15px; line-height: 20px;">Get access to a trusted support team and resources whenever you want</p>
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
.hero-section {
  background: url('/src/assets/img/bg_blue.png') no-repeat;
  background-size: 100% 100%;
}
.BA_calc {
    background: url('/src/assets/img/Currencyconverter.png');
    background-size: 100% 100%;
    border-radius: 20px;
}
.contact-style-two .default-form .form-group input[type='text'], .contact-style-two .default-form .form-group input[type='email'], .contact-style-two .default-form .form-group textarea {
    position: relative;
    display: block;
    height: 60px;
    border: 1px solid #dedede;
    border-radius: 20px;
    font-size: 16px;
    color: #616161;
    text-align: left;
    background-color: #ffffff;
    transition: all 500ms ease;
    padding: 15px 60px 15px 30px;
}
.style2 {
  font-size: 20px;
  padding: 15px 20px;
  border-radius: 30px;
}
</style>