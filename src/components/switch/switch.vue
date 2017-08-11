<template>
  <label class="mp-switch">
    <input class="mp-switch-input" :disabled="disabled" @change="onChange" type="checkbox" v-model="currentVaule" /> 
    <div class="mp-switch-box">
    </div>
    <div class="mp-switch-label">
      <slot></slot>
    </div>
  </label>  
</template>

<script>
export default {
  name: 'MPSwitch',
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onChange() {
      this.$emit('change', this.currentVaule);
    }
  },
  computed: {
    currentVaule: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
};
</script>

<style>
.mp-switch {
  display: flex;
  align-items: center;
  position: relative;
}
.mp-switch-input {
  display: none;
}
.mp-switch-box {
  display: inline-block;
  position: relative;
  width: 52px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  background: #d9d9d9;
}

.mp-switch-input:checked+.mp-switch-box {
  border-color: #cccccc;
  background-color: #cccccc;
}

.mp-switch-box:before, .mp-switch-box:after{
  content: " ";
  top: 0;
  left: 0;
  position: absolute;
  transition: transform 0.3s;
  border-radius: 15px;
}

.mp-switch-box:before {
  width: 50px;
  height: 30px;
  background-color: #fdfdfd;
}

.mp-switch-box:after {
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

.mp-switch-input:checked+.mp-switch-box:before {
  transform: scale(0);
}

.mp-switch-input:checked+.mp-switch-box:after {
  transform: translateX(20px);
}

</style>
