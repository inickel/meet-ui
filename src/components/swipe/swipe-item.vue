<template>
  <div class="mp-swipe">
    <div class="mp-swipe-wrap">
      <slot></slot>
    </div>
    <div class="mp-swipe-indicator">
      <span v-for="{$index} in items" :class="{'active': $index === index}">
      </span>
    </div>
  </div>
</template>
