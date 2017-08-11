<template>
  <transition class="mp-indicator">
    <div class="mp-indicator" v-show="visible">
      <div class="mp-indicator-wrapper" style="padding: 20px;">
        <span class="mp-indicator-spin">
          <div class="mp-spinner-snake"></div>
        </span>
        <span class="mp-indicator-text">加载中...</span>
      </div>
      <div class="mp-indicator-mask"></div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'MPIndicator',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
.mp-indicator {
  transition: opacity .2s linear;
}

.mp-indicator-wrapper {
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  box-sizing: border-box;
  text-align: center;
}

.mp-indicator-text {
  display: block;
  color: #fff;
  text-align: center;
  margin-top: 10px;
  font-size: 28px; /*px*/
}

.mp-indicator-spin {
  display: inline-block;
  text-align: center;

}

.mp-indicator-mask {
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  opacity: 0;
  background: transparent;
}

.mp-indicator-enter,
.mp-indicator-leave-active {
  opacity: 0;
}

.mp-spinner-snake {
  animation: mp-spinner-rotate 0.8s infinite linear;
  border: 4px solid transparent;
  border-radius: 50%;
  border-top-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-bottom-color: rgb(204, 204, 204);
  height: 16px;
  width: 16px;
}

@keyframes mp-spinner-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes mp-spinner-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>


