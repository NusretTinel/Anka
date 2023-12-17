<template>
  <div>
    <div class="sticky-top">
      <Navbar class="navbar_container"/>
    </div>

    <div class="go-top-area">
      <div class="go-top-wrap">
        <div class="go-top-btn-wrap">
          <a href="#" class="go-top go-top-btn d-block">
            <i class="fa fa-angle-double-up"></i>
            <i class="fa fa-angle-double-up"></i>
          </a>
        </div>
      </div>
    </div>
    <!--====== GO TO TOP PART ENDS ======-->
  </div>
</template>
<script>

import Navbar from "@/components/Utility/Navbar/index";


export default {
  components: {

    Navbar,
  },
  data: () => ({
    sidebar: false,
  }),
}


</script>
