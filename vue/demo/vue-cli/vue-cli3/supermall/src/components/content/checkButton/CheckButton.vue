<template>
  <div class="check-button" :class="{check:isChecked}">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
      isChecked: {
          type: Boolean,
          default: false
      }
  },
  data() {
    return {}
  }

}

</script>
<style scoped>
    .check-button {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: 2px solid #aaa;
    }
    .check-button img {
        width: 100%;
    }
    .check {
        border-color: var(--color-high-text);
        background-color: var(--color-high-text);
    }
</style>