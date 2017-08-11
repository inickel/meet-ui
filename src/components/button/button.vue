<template>
  <button 
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
    class="mp-button"
    @click="handleClick"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
  export default {
    name: 'MPButton',
    componentName: 'MPButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean
    },
    methods: {
      handleClick(e) {
        this.$emit('click', e);
      }
    }
  };
</script>

<style>
.mp-button {
  align-items: center;
  display: block;
  box-sizing: border-box;
  height: 45px;
  line-height: 45px;
  text-align: center;
  text-decoration: none;
  border-radius: 6px;
  font-size: 32px; /*px*/
  white-space: nowrap;
  letter-spacing: 0;
  border: 0 none;
  padding: 0 5px;
  position: relative;
  -webkit-appearance: none;
  width: 100%;
}

.mp-button span {
  display: inline-block;
}

.mp-button:focus {
  border:0 none;
  outline: 0 none;
}

/* theme */
.mp-button {
  color: #ffffff;
  background-color: #FF74B9;
}

.mp-button_primary {
  color: #ffffff;
  background-color: #FF74B9;
}

.mp-button:disabled {
  color: #ffffff;
  background: #dddddd;
}

</style>
