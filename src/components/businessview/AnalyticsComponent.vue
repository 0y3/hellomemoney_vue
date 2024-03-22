<script></script>

<template>
  <!-- Analytics Section  Start -->
  <section class="pt-5 bg-white">
    <div class="container">
      <div class="row gx-5">
        <div class="col-lg-6">
          <div class="image-box">
            <figure class="image"><img src="/src/assets/img/man-suit-showing-phone.png" alt="" /></figure>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="about-content">

            <div class="card card_about" style="">
              <div class="row no-gutters">
                <div class="col-md-3">
                  <img src="/src/assets/img/crm.png" width="150px" alt="..." />
                </div>
                <div class="col-md-9 p-0">
                  <div class="card-body py-0">
                    <h3 class="card-title mb-3">Integrated Reporting and Analytics</h3>
                    <p class="card-text text-justify">
                      Stay informed with comprehensive reporting tools, analytics, and monthly
                      statements. Integration with accounting software ensures a seamless flow of
                      vital financial information.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card card_about" style="">
              <div class="row no-gutters">
                <div class="col-md-3">
                  <img src="/src/assets/img/brainstorming.png" width="150px" alt="" />
                </div>
                <div class="col-md-9 p-0">
                  <div class="card-body py-0">
                    <h3 class="card-title mb-3">Teams for Enhanced Collaboration</h3>
                    <p class="card-text text-justify">
                        Elevate teamwork with our Teams feature, allowing you to control spending and permissions from a centralized location. 
                        Collaborate effortlessly while maintaining financial oversight.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Analytics Section  End -->
</template>

<style scoped>
.card_about:first-child{
    margin-top: 1rem;
    margin-bottom: 3rem;
}
.card {
  background-color: unset;
  border: unset;
  border-radius: unset;
  font-family: ClashGrotesk-Regular;
  color: #444;
}

 .card-body > h3{
    font-family: ClashGrotesk-Regular;
    font-size: 20px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.48px;
}
.card-body > p{
    /* font-family: ClashGrotesk-light; */
    font-size: 15px;
    letter-spacing: 0.64px;
    line-height: 24px;
    font-weight: 400;;
    text-align: justify;
}
</style>
