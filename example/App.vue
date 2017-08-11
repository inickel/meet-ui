<template>
  <div>
    <mp-button @click="handleClick">{{text}}</mp-button>
    <br />
    <mp-button @click="openIndicator">indicator</mp-button>
    <br />
    <mp-button @click="openAlert">alert</mp-button>
    <br />
    <mp-button @click="openConfrim">confirm</mp-button>
    <mp-row label="标题">
      <template slot="text">test-row</template>
    </mp-row>
    <mp-row label="标题" badge="2">
      <template slot="text">test-row</template>
    </mp-row>
    <mp-row label="标题" badge="1">
      test-row
    </mp-row>
    <mp-row icon="a.img">
      <template slot="text">
        <mp-switch v-model="switchValue" @change="onSwitchChange"></mp-switch>
      </template>
    </mp-row>
  </div>

</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      switchValue: false,
      text: 'toast'
    };
  },
  methods: {
    onSwitchChange(e) {
      console.log('switch', e);
      // this.switchValue = !
    },
    handleClick() {
      console.log('toast');
      this.toast('asd');
    },
    openIndicator() {
      console.log('Indicator');
      this.$Indicator.show();
      setTimeout(() => {
        this.$Indicator.hide();
      }, 2000);
    },
    openAlert() {
      console.log('Alert');
      this.$Alert('xxx');
    },
    openConfrim() {
      console.log('Confirm');
      this.$Confirm('xxx');
    }
  }
}
</script>
