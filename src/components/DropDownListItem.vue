<template>
  <option :value="value">{{name}}</option>
</template>
<script>
 export default {
     props: ['value','name']
 }
</script>
