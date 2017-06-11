<template>
  <div id="app" class="container-fluid">
    <div class="row justify-content-md-center align-items-center mt-5">
      <div class="col-sm-12 col-md-8">
        <!--<app-drop-down-list id="select1" label="Select a group" :listItem="listItem"></app-drop-down-list>-->
        <div class="clearfix">
          <button :disabled="!isReset" v-on:click="spin()" class="btn btn-primary btn-lg float-left">Spin</button>
          <button v-on:click="reset()" class="btn btn-warning btn-lg float-right">Reset</button>
        </div>
        <br>
        <app-wheel ref="wheel"></app-wheel>
      </div>
    </div>
    <app-logo-show v-on:show="clgt" v-if="isSpinComplete" :logoURL="logoSelected"></app-logo-show>
  </div>
</template>

<script>
  import DropDownList from './components/DropDownList.vue';
  import Wheel from './components/Wheel.vue';
  import LogoShow from './components/LogoShow.vue';

  export default {
    name: 'app',
    components: {
      appDropDownList: DropDownList,
      appWheel: Wheel,
      appLogoShow: LogoShow
    },
    data(){
      return {
        listItem: [
          {name: 'English Premier League', value: 1},
          {name: 'La Liga', value: 2},
          {name: 'Serie A', value: 3}
        ],
        isReset: true,
        isSpinComplete: false,
        logoSelected : null
      }
    },
    methods: {
      spin(){
        this.$refs.wheel.startSpin();
        this.isReset = false;
      },
      reset(){
        this.$refs.wheel.resetWheel();
        this.isReset = true;
        this.isSpinComplete = false;
      },
      completeSpin(ops){
          console.log('complete spin');
          this.isSpinComplete = ops.isSpinComplete;
          this.logoSelected = ops.logoSelected;
      },
      clgt: function(){
          console.log('Trigged');
      }
    },
    watch: {
      isSpinComplete: function () {
        console.log("Value changed "+this.isSpinComplete);
      }
    }
  }
</script>

<style>

</style>
