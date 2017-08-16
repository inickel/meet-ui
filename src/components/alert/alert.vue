<template>
  <transition>
    <div class="mp-alert"  v-show="visible">
      <div class="mp-alert-header" style="display:none">{{header}}</div>
      <div class="mp-alert-message">
        <slot>{{message}}</slot>
      </div>
      <div class="mp-alert-footer">
        <button class="mp-button" @click="handleClick">{{text}}</button>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'MPAlert',
  props: {
    header: {
      type: String
    },
    message: {
      type: String,
      // required: true
    },
    text: {
      type: String,
      default: '确定'
    }
  },
  data() {
    return {
      visible: false
    };
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
    handleClick() {
      this.visible = false;
    }
  }
}
</script>
<style>
.mp-alert {
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

.mp-alert-message {
    position: relative;
    min-height: 18px;
    padding: 20px 40px;
    overflow: hidden;
    text-align: center;
    font-size: 34px; /*px*/
}

.mp-alert-message:after {
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

.mp-alert .mp-button {
  border: 0 none;
  color: #FF74B9;
  background: rgba(0, 0, 0, 0);
}
</style>

