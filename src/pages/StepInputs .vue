<template>
  <div class="q-pa-md">
    <q-input
      :value="sampleData.step1.input1"
      @input="handleInputChange('step1', 'input1')"
      v-model="input1"
      label="Input 1"
    ></q-input>
    <q-input v-model="input2" label="Input 2"></q-input>
    <q-input v-model="input3" label="Input 3"></q-input>
    <q-input v-model="input4" label="Input 4"></q-input>
    <q-input v-model="input5" label="Input 5"></q-input>
  </div>
</template>

<script>
export default {
  props: {
    sampleData: Object,
    handleInputChange: Function,
  },
  data() {
    return {

      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",

    };
  },
};
</script>
