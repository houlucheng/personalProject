<template>
  <div id="app">
    <div id="tabbar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
  components: {},
  data() {
      return {
      }
  },
}
</script>

<style>
#tabbar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgba(100,100,100,.2);
}

</style>
