<template>
  <transition name="mp-toast-pop">
    <div class="mp-toast" v-show="visible" :class="toastClass" >
      <i class="mp-toast-icon" :class="iconClass" v-if="toastIconClass !== ' '"></i>
      <span class="mp-toast-text">
        {{message}}
      </span>
    </div>
  </transition>
</template>

<script>

const TOAST_TYPE = {
  NORMAL: 'normal',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  LOADING: 'loading'
};

const TOAST_POSITION = {
  MIDDLE: 'middle',
  TOP: 'top',
  BOTTOM: 'bottom'
};

export default {
  props: {
    message: String,
    icon: String,
    position: {
      type: String,
      default: TOAST_POSITION.MIDDLE // middle, top, bottom
    },
    type: {
      type: String,
      default: TOAST_TYPE.NORMAL // normal, success, warn, error, loading
    }
  },
  data() {
    return {
      visible: false
    };
  },
  computed: {
    toastClass: {
      get() {

      }
    },
    iconClass: {
      get() {
        let iconCls = '';
        if (this.type !== TOAST_TYPE.NORMAL) {
          iconCls += `mp-toast-icon_${this.type}`;
        } else if (this.type !== TOAST_TYPE.NORMAL) {
          iconCls += this.icon;
        }
        return iconCls;
      }
    },
    toastIconClass: {
      get() {
        const cls = [];
        if (this.icon) {
          cls.push('has-icon');
        }
        return cls.join(' ');
      }
    }
  }
};

</script>


<style>

.mp-toast {
  position: fixed;
  max-width: 80%;
  border-radius: 5px;
  padding: 10px;
  background: rgba(0,0,0,0.7);
  color: #ffffff;
  text-align: center;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.mp-toast-pop-enter-active {
  transition: opacity .3s ease;
}

.mp-toast-pop-leave-active {
  transition: opacity .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.mp-toast-pop-enter, .mp-toast-pop-leave-to {
  opacity: 0;
}

.mp-toast.middle {
  top: 50%;
  left: 50%;
  bottom: inherit;
  transform: translate(-50%, -50%);
}

.mp-toast.top {
  top: 50px;
  left: 50%;
  bottom: inherit;
  transform: translate(-50%, 0);
}

.mp-toast.bottom {
  top: inherit;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0);
}

.mp-toast-icon {
  display: block;
  text-align: center;
  font-size: 56px; /*px*/
}

.mp-toast-icon_success:after {
  content: " s";
}

.mp-toast-icon_error:after {
  content: " e";
}

.mp-toast-icon_loading:after {
  content: " l";
}

.mp-toast-icon_warning:after {
  content: " w";
}

.mp-toast-text {
  font-size: 56px; /*px*/
  display: block;
  text-align: center;
  padding-top: 0;  
}

.mp-toast.has-icon {
  padding: 20px;
}

.has-icon .mp-toast-text {
  padding-top: 10px;
}

</style>
