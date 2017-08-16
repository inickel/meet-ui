<template>
  <section class="mp-row">
    <div class="mp-row-label">
      <slot name="icon">
        <i v-if="icon" class="mp-row-icon mp-icon" :class="'mp-icon-' + icon"></i>
      </slot>
      <slot name="label">
        {{label}}
      </slot>
      <slot name="badge">
        <span v-if="badge" class="mp-badge" v-show="badge">{{badge}}</span>
      </slot>
    </div>
    <div class="mp-row-text">
      <slot name="text">{{text}}</slot>
    </div>
    <div class="mp-row-arrow"></div>
  </section>
</template>

<script>

export default {
  name: 'MPRow',
  props: {
    text: {
      type: String
    },
    label: {
      type: String,
      default: 'label'
    }, 
    badge: {
      type: String,
      default: ''
    },
    icon: {
      type: String
    }
  }
}

</script>
<style>

.mp-badge {
  margin-left: 5px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  background-color: #F43530;
  border-radius: 32.72px;
  font-size: 24px; /*px*/
  color: #FFFFFF;
  letter-spacing: 0;
  padding: 2px 10px;
}

.mp-row {
  box-sizing: border-box;
  min-height: 48px;
  padding: 10px 15px;
  overflow: hidden;
  position: relative;
  font-size: 34px; /*px*/
}

.mp-row-icon {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 25px;
  height: 25px;
  border-radius: 25px;
  margin-right: 15px;
}

.mp-row:after {
  content: " ";
  border-bottom: 1px solid #dddddd;
  width: 100%;
  position: absolute;
  transform-origin: 0 100%;
  transform: scaleY(0.5);
  clear: both;
  bottom: 0;
  left: 0;
}

.mp-row-label {
  float: left;
}

.mp-row-text {
  float: right;
  color: #cccccc;
}

.mp-row-arrow:after {
  content: " ";
  display: inline-block;
  height: 6px;
  width: 6px;
  border-width: 2px 2px 0 0;
  border-color: #B5B5B5;
  border-style: solid;
  transform: matrix(.71, .71, -0.71, .71, 0, 0);
  position: absolute;
  top: 50%;
  right: 5px;
  margin-top: -4px;
}
</style>
