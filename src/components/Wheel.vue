<template>
<div>
  <div class="the_wheel mx-auto d-flex align-items-center">
    <canvas id="canvas" width="434" height="434">
      <p style="{color: white}" align="center">Sorry, your browser doesn't support canvas. Please try
        another.</p>
    </canvas>
  </div>
      <b-row class="my-1" >
      <label for="range-1">Set Time (<code> {{ duration }}</code> s )</label>
    <b-form-input id="range-1" v-model="duration" type="range" min="0" max="30" step="1"></b-form-input>

    </b-row>
    <b-row class="my-1" >
      <label for="range-2">Set Speed ( <code> {{ spin }}</code> rad/s)</label>
    <b-form-input id="range-2" v-model="spin" type="range" min="0" max="100" step="1"></b-form-input>
    </b-row>
    <div class="row" >
    <div style="height:50px"></div>
    </div>
  </div>
</template>
<script>
  import Winwheel from '../assets/js/Winwheel';
  import axios from 'axios';
  import jsonData from '../data/data';
  export default{
    data(){
      return {
        theWheel: null,
        clubs: jsonData,
        wheelSpinning: false,
        duration:5,
        spin:30
      }
    },
    watch:{
      duration(){
        this.theWheel.animation.duration = this.duration
      },spin(){
        this.theWheel.animation.spins = this.spin
      },

    },
    mounted(){
      console.log('Loading data...');
      this.theWheel = new Winwheel({
        'outerRadius': 212,        // Set outer radius so wheel fits inside the background.
        'innerRadius': 75,         // Make wheel hollow so segments don't go all way to center.
        'textFontSize': 22,         // Set default font size for the segments.
        'textOrientation': 'vertical', // Make text vertial so goes down from the outside of wheel.
        'textAlignment': 'outer',    // Align text to outside of wheel.
        'numSegments': this.clubs.length,         // Specify number of segments.
        'segments': this.clubs,            // Define segments including colour and text.
        'animation':           // Specify the animation to use.
          {
            'type': 'spinToStop',
            'duration': this.duration,     // Duration in seconds.
            'spins': this.spin,     // Default number of complete spins.
            'callbackFinished': this.alertPrize
          }
      });
    },
    methods: {
      startSpin(){
        if (!this.wheelSpinning) {
          this.theWheel.animation.spins = 9;
          this.theWheel.startAnimation();
          this.wheelSpinning = true;
        }
      },
      resetWheel(){
        this.theWheel.stopAnimation(false);  // Stop the animation, false as param so does not call callback function.
        this.theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
        this.theWheel.draw();                // Call draw to render changes to the wheel.

        this.wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
      },
      alertPrize(){
        console.log('Alert');
        // Get the segment indicated by the pointer on the wheel background which is at 0 degrees.
        let winningSegment = this.theWheel.getIndicatedSegment();

        // Just alert to the user what happened.
        // In a real project probably want to do something more interesting than this with the result.
        // alert("You have got " + winningSegment.fullName);
//        this.$emit('show',{isSpinComplete: true, logoSelected: winningSegment.logo});
        this.$parent.clgt(winningSegment);
      }
    }
  }
</script>
<style scoped>

  /* Sets the background image for the wheel */
  .the_wheel {
    background-image: url(../assets/wheel_back.png);
    background-position: center;
    background-repeat: no-repeat;
    width: 434px;
    height: 582px;
  }

  /* Do some css reset on selected elements */
  h1, p {
    margin: 0;
  }

  div.power_controls {
    margin-right: 70px;
  }

  div.html5_logo {
    margin-left: 70px;
  }

  /* Style applied to the spin button once a power has been selected */
  .clickable {
    cursor: pointer;
  }

  /* Other misc styles */
  .margin_bottom {
    margin-bottom: 5px;
  }
</style>
