<script setup>
    import { computed  } from 'vue';
    import { useRoute } from 'vue-router'

    const route = useRoute()

    const footerSize = computed(() => {
        return route.meta.footerSize == 2 ?2 :1
    });

    const isDarkTheme = computed(() => {
        return route.meta.templateColor === 'dark' ? ['black-bg', 'footer_black']: ['blue-bg', 'footer_blue'];
    })

</script>


<template>
  <!-- Footer Start -->
  <footer class="main-footer footer-style-five">
    <div 
        class="footer-top-two pb-4" 
        :class="isDarkTheme"
    >
      <div class="auto-container">
        <div class="row clearfix text-white">
          <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
            <div class="footer-widget links-widget ml-40">
              <div class="widget-title mb-2">
                <h3>Who we are</h3>
              </div>
              <div class="widget-content">
                <ul class="links-list clearfix pl-3">
                  <p>
                    <RouterLink :to="{ name: 'about' }" class="" aria-current="">About Us</RouterLink
                    >
                  </p>
                  <p>
                    <RouterLink :to="{ name: 'about' }" class="" aria-current="">
                      Code of Conduct
                    </RouterLink>
                  </p>
                  <p>Partner with us</p>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
            <div class="footer-widget links-widget ml-40">
              <div class="widget-title mb-2">
                <h3>Legal</h3>
              </div>
              <div class="widget-content">
                <ul class="links-list clearfix pl-3">
                  <p>Terms & Conditions</p>
                  <p>Privacy Policy</p>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
            <div class="footer-widget contact-widget ml-40">
              <div class="widget-title mb-2">
                <h3>Contact Us</h3>
              </div>
              <div class="widget-content">
                <ul class="info-list clearfix">
                  <li>
                    <p>
                      <span class="pspan">United Kingdom Office:</span><br />
                      2nd Floor, 30 Churchill Pl, London <br />
                      E14 5EU United Kingdom
                    </p>
                  </li>

                  <li>
                    <p class="pt-4">
                      <span class="pspan">Canada Office:</span><br />
                      44322 YALE RD UNIT 3B #203<br />
                      CHILLIWACK, BC, CANADA V2R4H1
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-sm-12 footer-column text-center pt-5">
            <p>Copyright © 2024 HelloMe Money. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>

    <div 
        v-if="footerSize === 2"
        class="footer-bottom" 
        :class="isDarkTheme"
    >
      <div class="auto-container auto-container_p">
        <div class="bottom-inner clearfix">
          <p>
            HelloMe Money is a trading name of HelloMe Limited, a company registered in England and
            Wales under registration no: 12541573 with a registered office at 30 Churchill Place,
            Canary Wharf, London E14 5RE. We oprate in accordance with the 'Data Protection Act
            1998' with ICO Reference number:Zb247046.
          </p>

          <p class="pt-3">
            HelloMe Canada Corp, a subsidiary of HelloMe Limited, is registered in British Columbia,
            Canada, with its registered office located at 44322 YALE RD UNIT 3B #203 Chilliwack BC,
            CA V2R4H1. It is authorized by Fintrac under the MSB number M24732796 to provide
            financial services.
          </p>

          <p class="pt-3">
            Limited UK is a financial technology and remittance company registered in the United
            Kingdom under registration number 7302407 as an Authorised Payment Institution with the
            registered office at Unit 51, Skylines Business Village, London. E14 9TS. The Company is
            regulated by the Financial Conduct Authority (FCA) and Her Majesty’s Revenue & Customs
            (HMRC). Cashpot facilitates international payments and remittance services for customers
            on behalf of HelloMe Money.
          </p>

          <p class="pt-3">
            Moorwand as e-money license holder of Moorwand Ltd is a company incorporated and
            registered in England & Wales under registration No. 8491211 with a registered office at
            Irongate House, 30 Dukes Place, London, EC3A 7LP, United Kingdom. Moorwand Ltd is
            authorised by the Financial Conduct Authority under the Electronic Money Regulations
            2011 (Register ref: 900709) to issue electronic money and payment instruments. The
            HelloMe Money GBP account and EUR SEPA IBAN are issued by Moorwand Ltd.
          </p>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer End -->
</template>

<style scoped>
.footer_blue {
  background: url('/src/assets/img/footer_background_blue.png') no-repeat;
  background-size: 100% 100%;
}

.footer_black {
  background: url('/src/assets/img/footer_background_black.png') no-repeat;
  background-size: 100% 100%;
}
.auto-container_p{
    font-family: 'Sora';
    color: #FFF;
    text-align: justify;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}
</style>
