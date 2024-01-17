<template>
  <div class="q-pa-md">
    <q-input v-model="step3Input1" label="Input 2"></q-input>
    <q-input v-model="step3Input2" label="Input 3"></q-input>
    <q-input v-model="step3Input3" label="Input 4"></q-input>
    <q-input v-model="step3Input4" label="Input 5"></q-input>
  </div>
</template>

<script>
export default {
  /*  props: {
    sampleData: Object,
    handleInputChange: Function,
  }, */
  data() {
    return {
      step3Input1: "",
      step3Input2: "",
      step3Input3: "",
      step3Input4: "",

      sampleData: {
        step1: {},
      },
    };
  },

  watch: {
    step1Input1(newValue) {
      this.checkChanges("step1");
    },
    step1Input2(newValue) {
      this.checkChanges("step1");
    },
    step1Input3(newValue) {
      this.checkChanges("step1");
    },
    step1Input4(newValue) {
      this.checkChanges("step1");
    },
    step1Input5(newValue) {
      this.checkChanges("step1");
    },
  },
};
</script>
