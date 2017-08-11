<template>
  <div class="mp-swipe-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MPSwipeItem',
  mounted() {
    this.$parent && this.$parent.itemMounted(this);
  },
  destroyed() {
    this.$parent && this.$parent.itemDestroyed(this);
  }
}
</script>

