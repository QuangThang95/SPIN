<template>
  <div class="form-group">
    <label v-if="label != null" :for="id">{{label}}</label>
    <select class="form-control" :id="id">
      <app-drop-down-list-item v-for="item in listItem" :key="item.value" :value="item.value" :name="item.name"></app-drop-down-list-item>
    </select>
  </div>
</template>
<script>
  import DropDownListItem from './DropDownListItem.vue';
  export default {
      props: ['id','label','listItem'],
      components:{
        appDropDownListItem: DropDownListItem
      }
  }
</script>
