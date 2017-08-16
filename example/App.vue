<template>
  <div>
    <mp-button-group>
      <mp-button @click="handleClick">{{text}}</mp-button>
      <mp-button @click="openIndicator" customClass="active">indicator</mp-button>
      <mp-button @click="openAlert">alert</mp-button>
      <mp-button @click="openConfrim">confirm</mp-button>
    </mp-button-group>
    <mp-button-group :buttons="buttons">
    </mp-button-group>
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
    <mp-checkbox :title="checkboxTitle" :options="checkboxOptions" :value="checkboxValue" @change="onCheckboxChange">
    </mp-checkbox>
    
    <mp-radiobox align="right" name="radio" :title="radioboxTitle" :options="radioboxOptions" :value="radioboxValue" @change="onCheckboxChange">
    </mp-radiobox>
    
  </div>

</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      buttons: [
        { 
          text: 'xxx'
        },
        { 
          text: '123'
        }
      ],
      switchValue: false,
      text: 'toast',
      checkboxValue: [1, 2],
      checkboxTitle: 'checkbox',
      checkboxOptions: [
        {
          label: '11asd',
          value: 1,
          checked: false
        },
        {
          label: '2纯啊色的俄方',
          value: 2,
          checked: true,
          disabled: true
        }
      ],
      radioboxTitle: 'radiobox',
      radioboxValue: 0,
      radioboxOptions: [
         {
          label: '11asd',
          value: 1
        },
        {
          label: '2纯啊色的俄方',
          value: 2
        }
      ]
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
      this.indicator.show();
      setTimeout(() => {
        this.indicator.hide();
      }, 2000);
    },
    openAlert() {
      console.log('Alert');
      this.alert('xxx');
    },
    openConfrim() {
      console.log('Confirm');
      this.confirm('xxx');
    },
    onCheckboxChange(e) {
      console.log(e);
    }
  }
}
</script>
