<script setup>
  import CountryTransferComponent from '@/components/businessview/CountryTransferComponent.vue';
</script>

<template>

  <section class="MC" style="background: url('/src/assets/img/WorldMap3.png') no-repeat">
    <div class="auto-container">
      <div class="row justify-content-between py-5">
        <div class="col-md-12 text-center text-white pb-5">
          <ul class="list1 clearfix list-flex">
            <li>International transfer</li>
          </ul>
        </div>
        <CountryTransferComponent
            :info="{
              imgName: 'uk_r.png',
              title: 'British pound',
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



