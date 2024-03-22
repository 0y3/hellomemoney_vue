<script setup>
  import CountryTransferComponent from '@/components/businessview/CountryTransferComponent.vue';
</script>

<template>

  <section class="MC">
    <div class="auto-container">
      <div class="row justify-content-between py-5">
        <div class="col-md-12 text-center text-white pb-2">
          <ul class="list1 clearfix list-flex">
            <li>International transfer</li>
          </ul>
        </div>
        <div class="col-md-12">
          <div class="image-box pb-4 text-center">
                <figure class="image"><img src="/src/assets/img/flags/Africa.png" width="" alt=""></figure>
          </div>
          
          
          <ul class="list d-flex flex-wrap">
           <CountryTransferComponent
              :info="{
                imgName: 'DZ.png',
                name: 'Algeria',
              }"
           />
           <CountryTransferComponent
              :info="{
                imgName: 'BW.png',
                name: 'Botswana',
              }"
           />
           <CountryTransferComponent
              :info="{
                imgName: 'BU.png',
                name: 'Burundi',
              }"
           />
           <CountryTransferComponent
              :info="{
                imgName: 'CA.png',
                name: 'Cameroon',
              }"
           />
           <CountryTransferComponent
              :info="{
                imgName: 'CV.png',
                name: 'Cape Verde',
              }"
           />

           <CountryTransferComponent
              :info="{
                imgName: 'KM.png',
                name: 'Comoros',
              }"
           />
           <CountryTransferComponent
              :info="{
                imgName: 'CD.png',
                name: 'Cote D’ivoire',
              }"
           />
           <CountryTransferComponent
              :info="{
                imgName: 'DJ.png',
                name: 'Djibouti',
              }"
           />
           <CountryTransferComponent
              :info="{
                imgName: 'DC.png',
                name: 'Dr Congo',
              }"
           />
           <CountryTransferComponent
              :info="{
                imgName: 'EG.png',
                name: 'Egypt',
              }"
           />
          </ul>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.MC{
  background: url('/src/assets/img/WorldMap3.png') no-repeat;
  /* background-size: 100% 100%; */
}

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



