<script setup>
    import { computed  } from 'vue';
    import { useRoute } from 'vue-router'

    const route = useRoute()

    
    const isDarkTheme = computed(() => {
        return route.meta.templateColor === 'dark' ? ['black-bg'] : '';
    })


    // route.meta.templateColor === 'dark'? document.getElementByClass("boxed_wrapper").classList.add("black-bg") : document.getElementByClass("boxed_wrapper").classList.remove("black-bg")

</script>

<template>
  <!-- Navbar Start -->
  <!-- <fa-icon icon="fa-solid fa-user" /> -->
  <header class="main-header header-style-two col-md-10 offset-md-1">
    <!-- header-lower -->
    <div class="header-lower">
      <div class="auto-container-fluid">
        <div class="outer-box clearfix bg-white" :class="isDarkTheme">
          <div class="logo-box pull-left">
            <figure class="logo">
              <RouterLink :to="{ name: 'home' }" class="active" aria-current="page"
                ><img src="/src/assets/img/logo.png" width="200px" height="auto" alt=""
              /></RouterLink>
            </figure>
          </div>
          <div class="menu-area pull-leftt clearfix">
            <!--Mobile Navigation Toggler-->
            <div class="mobile-nav-toggler">
              <i class="icon-bar"></i>
              <i class="icon-bar"></i>
              <i class="icon-bar"></i>
            </div>
            <nav class="main-menu navbar-expand-md navbar-light">
              <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                <ul class="navigation clearfix">
                  <li class="current">
                    <RouterLink
                      :to="{ name: 'about' }"
                      class="shadow bg-darkk rounded"
                      aria-current="page"
                      >Personal Account</RouterLink
                    >
                  </li>
                  <li class="">
                    <RouterLink :to="{ name: 'businessaccount' }" class=""
                      >Business Account</RouterLink
                    >
                  </li>
                  <li class="">
                    <RouterLink :to="{ name: 'about' }" class="">Company</RouterLink>
                  </li>
                </ul>
              </div>
            </nav>
            <div class="pull-right">
              <div class="btn-box">
                <a href="" class="theme-btn btn-six mr-1">Login</a>
                <a href="" class="theme-btn" style="background-color: #2a65ca !important">Signup</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Navbar End -->
</template>

<style scoped>
/* :global(.boxed_wrapper) {
        background-color: v-bind('theme.color');
         background-color: var(themeName) 
    } */
.black-bg nav ul li a {
  color: #fff !important;
}
</style>
