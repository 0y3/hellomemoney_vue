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
                      :to="{ name: 'home' }"
                      class="shadow bg-darkk rounded"
                      aria-current="page"
                      >Personal Account</RouterLink>
                  </li>
                  <li class="current dropdown">
                    <RouterLink 
                    :to="{ name: 'businessaccount' }" class="dropdown-togglee"
                    >Business Account</RouterLink>
                    <ul :class="isDarkTheme">
                        <li>
                          <RouterLink 
                            :to="{ name: 'businessaccount_sme' }" class=""
                            >SME</RouterLink>
                        </li>
                        <li>
                          <RouterLink 
                            :to="{ name: 'businessaccount_soletrader' }" class=""
                            >Sole Trader</RouterLink>
                        </li>
                    </ul>
                  </li>
                  <li class="">
                    <RouterLink :to="{ name: 'about' }" class="">Company</RouterLink>
                  </li>
      <!-- <li class="nav-item dropdownn megamenu">
        <a id="megamenu" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle font-weight-bold text-uppercase">Dropdown Menu</a>
        <div aria-labelledby="megamenu" class="dropdown-menu border-0 p-0 m-0">
          <div class="container-fluid">
            <div class="row bg-dark text-light rounded-0 m-0 shadow-sm">
              <div class="col-12">
                <div class="p-4">
                  <div class="row">
                    <div class="col-sm-6 col-lg-3 mb-4">
                      <h6 class="font-weight-bold text-uppercase">Heading 1</h6>
                      <ul class="list-unstyled">
                        <li class="nav-item"><a href="#" class="nav-link text-small pb-0">Unique Features</a></li>
                        <li class="nav-item"><a href="#" class="nav-link text-small pb-0 ">Image Responsive</a></li>
                        <li class="nav-item"><a href="#" class="nav-link text-small pb-0 ">Auto Carousel</a></li>
                        <li class="nav-item"><a href="#" class="nav-link text-small pb-0 ">Newsletter Form</a></li>
                      </ul>
                    </div>
                    <div class="col-sm-6 col-lg-3 mb-4">
                      <h6 class="font-weight-bold text-uppercase">Heading 2</h6>
                      <ul class="list-unstyled">
                        <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Unique Features</a></li>
                        <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Image Responsive</a></li>
                        <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Auto Carousel</a></li>
                        <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Newsletter Form</a></li>
                      </ul>
                    </div>
                    <div class="col-sm-6 col-lg-3 mb-4">
                      <h6 class="font-weight-bold text-uppercase">Heading 3</h6>
                      <ul class="list-unstyled">
                        <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Unique Features</a></li>
                        <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Image Responsive</a></li>
                        <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Auto Carousel</a></li>
                        <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Newsletter Form</a></li>
                      </ul>
                    </div>
                    <div class="col-sm-6 col-lg-3 mb-4">
                      <h6 class="font-weight-bold text-uppercase">Heading 4</h6>
                      <ul class="list-unstyled">
                        <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Unique Features</a></li>
                        <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Image Responsive</a></li>
                        <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Auto Carousel</a></li>
                        <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Newsletter Form</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li> -->
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

.megamenu {
  position: static;
  .dropdown-menu {
  border: none;
  width: 100%;
  /* top: 20px!important;
  left: -20px!important; */
  }
}
</style>
