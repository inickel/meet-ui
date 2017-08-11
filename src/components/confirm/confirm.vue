<template>
  <transition>
    <div class="mp-confirm"  v-show="visible">
      <div class="mp-confirm-header" style="display:none">header</div>
      <div class="mp-confirm-content">{{message}}</div>
      <div class="mp-confirm-footer">
        <button class="mp-button" @click="handleCancel">{{cancelText}}</button>
        <button class="mp-button" @click="handleConfirm">{{confirmText}}</button>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'MPConfirm',
  props: {
    message: String,
    confirmText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  },
  data() {
    return {
      visible: false
    }
  },
  watch: {
    visible(value) {
      if (value) {
        this.modal.show();
        this.$emit('show');
      } else {
        this.modal.hide();
        this.$emit('hide');
      }
    }
  },
  methods: {
    handleConfirm() {
      this.visible = false;
      this.$emit('confirm');
    },
    handleCancel() {
      this.visible = false;
      this.$emit('cancel');
    }
  }
}
</script>
<style>

.mp-confirm {
  position: absolute;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  z-index: 9999;
  transform: translate(-50%, -50%);
  width: 270px;
  min-height: 102px;
  overflow: hidden;
  background-color: #FFFFFF;
  border-radius: 12px;
}

.mp-confirm-content {
    position: relative;
    min-height: 18px;
    padding: 20px 40px;
    overflow: hidden;
    text-align: center;
    font-size: 34px; /*px*/
}

.mp-confirm-content:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #DDDDDD;
    color: #DDDDDD;
    transform-origin: 0 100%;
    transform: scaleY(.5);
}

.mp-confirm-footer {
  display: flex;
}

.mp-confirm .mp-button:first-child {
  color: #cccccc;
  position: relative;
}

.mp-confirm .mp-button:first-child:after {
  content: " ";
  position: absolute;
  right: 0;
  /* width: 1px; */
  height: 100%;
  border-right: 1px solid #DDDDDD;
  transform-origin: 0 100%;
  transform: scaleX(0.5);
}

.mp-confirm .mp-button {
  flex: 1;
  border: 0 none;
  color: #FF74B9;
  background: rgba(0, 0, 0, 0);
}
</style>

