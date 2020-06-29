<template>
  <div id="app" class="container-fluid">
    <div class="row justify-content-md-center align-items-center mt-5">
      <div class="col-sm-12 col-md-8">
        <h2 style="text-align:center"></h2>
        <b-card-group deck>
      <b-card border-variant="light" header="Vòng Quay May Mắn" class="text-center">
      </b-card>
    </b-card-group>
        <!--<app-drop-down-list id="select1" label="Select a group" :listItem="listItem"></app-drop-down-list>-->
        <div class="clearfix" style="text-align:center">
          <button :disabled="!isReset" v-on:click="spin()"  class="btn btn-primary btn-lg ">Spin</button>
          <!-- <button v-on:click="reset()" class="btn btn-warning btn-lg float-right">Reset</button> -->
        </div>
        <app-wheel ref="wheel"></app-wheel>
      <b-modal class="test-modal" ref="my-modal"  @hidden="reset" hide-footer :title="`Kết Quả Của Lượt Quay <${objectData&&objectData.text}>`">
      <div class="d-block text-center">
        <h2>{{objectData&&objectData.logo}}</h2>
      </div>
    </b-modal>
      </div>
    </div>
    <div class="bottom">Bản Quyền của <b>Quang Thắng</b> </div>
    <!-- <app-logo-show v-on:show="clgt" v-if="isSpinComplete" :logoURL="logoSelected"></app-logo-show> -->
  </div>
</template>

<script>
  import DropDownList from './components/DropDownList.vue';
  import Wheel from './components/Wheel.vue';
  // import LogoShow from './components/LogoShow.vue';

  export default {
    name: 'app',
    components: {
      appDropDownList: DropDownList,
      appWheel: Wheel,
      // appLogoShow: LogoShow
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
        logoSelected : null,
        objectData : null
      }
    },
    methods: {
      spin(){
        this.$refs.wheel.resetWheel();
        this.$refs.wheel.startSpin();
        this.isReset = false;
      },
      reset(){
        // this.$refs.wheel.resetWheel();
        this.isReset = true;
        this.isSpinComplete = false;
      },
      completeSpin(ops){
          console.log('complete spin',ops);
          this.isSpinComplete = ops.isSpinComplete;
          this.logoSelected = ops.logoSelected;
      },
      clgt(logoSelected){
          console.log(logoSelected);
          this.$refs['my-modal'].show()
          this.isSpinComplete = true;
          this.logoSelected = logoSelected.logo;
          this.objectData= logoSelected;
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
.modal .modal-dialog {
  /* font: 2.5em ; */
  font-size: 4.5em;
    max-width: 60%;
    margin: 0;
    top: 15%;
    bottom: 0;
    left: 20%;
    right: 0;
    height: 180px;
    display: flex;
    position: fixed;
    z-index: 100000;
    color: rgb(63, 57, 57)
}
.bottom{
      position: fixed;
          bottom: 20px;
    right: 30px;
    font-size: 15px;
    font-weight: inherit
}
</style>
