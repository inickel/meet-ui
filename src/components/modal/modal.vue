<template>
 <transition name="mp-modal">
   <div class="mp-modal" v-show="visible" @click="onClick"> 
   </div>
 </transition> 
</template>
<script>
export default {
  name: 'MPModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick(e) {
      this.$emit('click', e, this);
    }
  }
}
</script>

<style>
.mp-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%; 
  background: rgba(0, 0, 0, 0.7);
}
</style>
