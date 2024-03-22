<script>
export default {}
</script>

<template>
  <section
    class="hero-section min-vh-100 d-flex align-items-center bg-darkk position-relative overflow-hidden"
    style="background: url('/src/assets/img/ba_bg.png') no-repeat; background-size: 100% 100%"
  >
    <div class="auto-container">
      <div class="row justify-content-between py-5">
        <div class="col-md-12 text-center pt-5 text-white">
          <ul class="list1 clearfix list-flex">
            <li>Business Account</li>
          </ul>
        </div>
        <div class="col-lg-7 col-md-12 col-sm-12 content-column text-white">
          <div class="BA_header">
            <h1 class="fw-bold display-5 mb-0">
              <span>Empowering Your </span><br />Financial <span>Frontier</span>
            </h1>
            <div
              class="divider"
              style="background: url('/img/glow_line.png') no-repeat; background-size: 100% 100%"
            ></div>

            <p class="mt-0">
              Unlock the full potential of your business with HelloMe Money Business Accounts, where
              financial empowerment meets seamless transactions. Our platform is meticulously
              crafted to cater to the unique needs of businesses, offering a host of features
              designed to simplify, accelerate, and secure your financial operations
            </p>
            <div class="action-btns mts-5">
              <a href="" class="btn style1">Get multicurrency account</a>
              <a href="" class="btn style1" style="background: #fff !important; color: #2a65ca"
                >International payment</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-12 mt-5 mt-lg-0">
          <div
            class="p-4 BA_calc position-relative"
            style="
              background: url('/src/assets/img/Currency\ converter.png');
              background-size: 100% 100%;
              border-radius: 20px;
            "
          >
            <div class="service-block-six">
              <div class="inner-boxies p-3" style="margin-bottom: unset">
                <div class="contact-style-two">
                  <h3 class="text-center pb-2">Send Money</h3>
                  <b class="pb-3">How much do you want to send?</b>
                  <form
                    method="post"
                    id="contact-form"
                    class="default-form"
                    novalidate="novalidate"
                  >
                    <div class="row clearfix pt-3">
                      <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-0">
                        <label class="">Amout</label>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text"
                              ><i class="fa fa-pound-sign" style="position: unset"></i
                            ></span>
                          </div>
                          <input
                            type="text"
                            class="form-control no-text"
                            aria-label="Amount (to the nearest dollar)"
                          />
                          <div
                            class="input-group-append"
                            style="border: 2px solid #dedede; border-radius: 0px 9px 9px 0px"
                          >
                            <button
                              class="btnn btn-outline-secondaryy dropdown-toggle px-1"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <img
                                src="https://flagsapi.com/GB/flat/48.png"
                                style="width: 30px; border-radius: 80px; height: auto"
                              />
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
                      <div
                        class="col-lg-12 col-md-12 col-sm-12 text-center"
                        style="margin-top: -30px"
                      >
                        <hr class="hr-center offset-sm-2 col-sm-6" />
                        <i
                          class="icon-2x-circle text-white fa-solid fa-right-left fa-rotate-90"
                          style="background-color: #0a2380"
                        ></i>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-1">
                        <label class="">Recipient receives</label>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text">
                              <i class="fa-solid fa-naira-sign" style="position: unset"></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            class="form-control no-text"
                            aria-label="Amount (to the nearest dollar)"
                          />
                          <div
                            class="input-group-append"
                            style="border: 2px solid #dedede; border-radius: 0px 9px 9px 0px"
                          >
                            <button
                              class="btnn btn-outline-secondaryy dropdown-toggle px-1"
                              type="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <img
                                src="https://flagsapi.com/NG/flat/48.png"
                                style="width: 30px; border-radius: 80px; height: auto"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12 form-group mb-3">
                        <label class=""><b>Delivery Option</b></label>
                        <select
                          name=""
                          class="form-control input-lg"
                          style="height: 60px; box-shadow: 0px 10px 30px rgb(0 0 0 / 10%)"
                        >
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
                      <div class="col-lg-6 col-md-6 col-sm-12 form-group message-btn mb-2">
                        <a href="" class="btn style1 style2" style="width: 100%">Compare price</a>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-12 form-group message-btn mb-2">
                        <a
                          href=""
                          class="btn style1 style2"
                          style="width: 100%; background: #fff !important; color: #2a65ca"
                          >Get Started</a
                        >
                      </div>
                    </div>
                    <br />
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
</template>

<style scoped>
.contact-style-two .default-form .form-group input[type='text'],
.contact-style-two .default-form .form-group input[type='email'],
.contact-style-two .default-form .form-group textarea {
  position: relative;
  display: block;
  width: unset !important;
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
.list1 li {
  position: relative;
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #2a65ca;
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
.fw-bold {
  color: #fff;
  font-family: ClashGrotesk-Variable;
  font-size: 90px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
.fw-bold span {
  font-weight: 400;
  font-size: 70px;
}
.divider {
  position: relative;
  display: inline-block;
  width: 60%;
  height: 40px;
  top: -15px;
  background-repeat: no-repeat;
}
.BA_header p {
  color: #fff;
  text-align: justify;
  font-family: ClashGrotesk-Variable;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 166.667% */
  letter-spacing: 0.96px;
  padding-right: 7rem;
}
.btn {
  text-transform: unset;
}
.style2 {
  font-size: 20px;
  padding: 15px 20px;
  border-radius: 30px;
}
/* .BA_calc {
  position: relative;
} */

.BA_calc:before {
  content: url('/src/assets/img/down_line2.png');
  position: absolute;
  bottom: -75px;
  left: -65px;
} 
</style>
