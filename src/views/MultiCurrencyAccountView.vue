<script setup>
import CurrencyComponent from '@/components/businessview/CurrencyComponent.vue'
</script>

<template>
  <section class="MC" style="background: url('/src/assets/img/WorldMap2.png') no-repeat">
    <div class="auto-container">
      <div class="row justify-content-between py-5">
        <div class="col-md-12 text-center text-white pb-5">
          <ul class="list1 clearfix list-flex">
            <li>Get a multi-currency account</li>
          </ul>
        </div>

        <CurrencyComponent
          :info="{
            imgName: 'uk_r.png',
            name: 'British pound',
            desc: 'Get GBP account details'
          }"
        />

        <CurrencyComponent
          :info="{
            imgName: 'eur_r.png',
            name: 'Euro',
            desc: 'Get EUR account details'
          }"
        />

        <CurrencyComponent
          :info="{
            imgName: 'cad_r.png',
            name: 'Canadian Dollar',
            desc: 'Get CAD account details'
          }"
        />

        <CurrencyComponent
          :info="{
            imgName: 'us_r.png',
            name: 'US Dollar',
            desc: 'Get USD account details'
          }"
        />

        <CurrencyComponent
          :info="{
            imgName: 'ng_r.png',
            name: 'Naira',
            desc: 'Get NAIRA account details'
          }"
        />

        <CurrencyComponent
          :info="{
            imgName: 'aud_r.png',
            name: 'Australia dollar',
            desc: 'Get AUD account details'
          }"
        />

        <CurrencyComponent
          :info="{
            imgName: 'nzd_r.png',
            name: 'New Zealand Dollar',
            desc: 'Get NZD account details'
          }"
        />

        <CurrencyComponent
          :info="{
            imgName: 'singapore_r.png',
            name: 'Singapore Dollar',
            desc: 'Get SGD account details'
          }"
        />

        <CurrencyComponent
          :info="{
            imgName: 'aed_r.png',
            name: 'Arab Emirate Dirham',
            desc: 'Get AED account details'
          }"
        />

        <CurrencyComponent
          :info="{
            imgName: 'china_r.png',
            name: 'China Yuan',
            desc: 'Get CNY account details'
          }"
        />

        <CurrencyComponent
          :info="{
            imgName: 'indian_r.png',
            name: 'Indian Rupee',
            desc: 'Get INR account details'
          }"
        />
        <CurrencyComponent
          :info="{
            imgName: 'turkey_r.png',
            name: 'Turkish lira',
            desc: 'Get TRY account details'
          }"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.list1 li {
  position: relative;
  display: block;
  font-size: 14px;
  color: #fff;
  background: #195399;
  padding: 8px 16px;
  border-radius: 30px;
  line-height: 25px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
