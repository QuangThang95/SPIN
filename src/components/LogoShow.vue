<template>
  <div class="logo-center">
    <img class="img-fluid" :src="logoURL"/>
  </div>
</template>
<script>
  export default {
    props: ['logoURL']
  }
</script>
<style scoped="">
  .logo-center{
    position: fixed;
    left: 50%;
  }
</style>
