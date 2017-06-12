<template>
  <div class="logo-center d-flex align-items-center justify-content-center">
    <img class="img-fluid" :src="logoURL"/>
  </div>
</template>
<script>
// import {TweenMax} from 'gsap';
export default {
  props: ['logoURL'],
  mounted(){
    let animation = TweenMax.from(".img-fluid", 2, {scale: .05,rotationY:'+=360'});
  }
}
</script>
<style scoped="">
.logo-center{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgba(0,0,0,0.5);
}
</style>
