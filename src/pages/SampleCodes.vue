<template>
  <div class="q-pa-md">
    <q-stepper v-model="activeStep">
      <q-step
        :name="1"
        title="Personal Information"
        icon="settings"
        :done="activeStep > 1"
      >
        <!-- Step 1 content with 5 q-inputs -->
        <!-- <div class="q-pa-md">
          <q-input
            @input="handleInputChange('step1', 'input1')"
            v-model="step1Input1"
            label="Input 1"
          ></q-input>
          <q-input v-model="step1Input2" label="Input 2"></q-input>
          <q-input v-model="step1Input3" label="Input 3"></q-input>
          <q-input v-model="step1Input4" label="Input 4"></q-input>
          <q-input v-model="step1Input5" label="Input 5"></q-input>
        </div> -->
        <StepInputs
          :sampleData="sampleData"
          :handleInputChange="handleInputChange"
        />
        <!-- Step 1 navigation buttons -->
        <div class="q-mt-md q-flex justify-between">
          <q-btn @click="goToPreviousStep" :disable="activeStep === 0"
            >Back</q-btn
          >
          <q-btn @click="goToNextStep('step1')">Next</q-btn>
        </div>
      </q-step>

      <q-step
        :name="2"
        title="Family Background"
        icon="create_new_folder"
        :done="activeStep > 2"
      >
        <!-- Step 2 content with 5 q-inputs -->
        <div class="q-pa-md">
          <q-input v-model="step2Input1" label="Input 1"></q-input>
          <q-input v-model="step2Input2" label="Input 2"></q-input>
          <q-input v-model="step2Input3" label="Input 3"></q-input>
          <q-input v-model="step2Input4" label="Input 4"></q-input>
          <q-input v-model="step2Input5" label="Input 5"></q-input>
        </div>

        <!-- Step 2 navigation buttons -->
        <div class="q-mt-md q-flex justify-between">
          <q-btn @click="goToPreviousStep">Back</q-btn>
          <q-btn @click="goToNextStep">Next</q-btn>
        </div>
      </q-step>

      <q-step
        :name="3"
        title="Educational Background"
        icon="add_comment"
        :done="activeStep > 3"
      >
        <!-- Step 3 content with 5 q-inputs -->

        <q-input v-model="step3Input1" label="Input 1"></q-input>
        <q-input v-model="step3Input2" label="Input 2"></q-input>
        <q-input v-model="step3Input3" label="Input 3"></q-input>
        <q-input v-model="step3Input4" label="Input 4"></q-input>
        <q-input v-model="step3Input5" label="Input 5"></q-input>

        <!-- Step 3 navigation buttons -->
        <div class="q-mt-md q-flex justify-between">
          <q-btn @click="goToPreviousStep" :disable="activeStep === 0"
            >Back</q-btn
          >
          <q-btn @click="submitForm" :disable="!canProceedToNextStep"
            >Submit</q-btn
          >
        </div>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { ref } from "vue";
import StepInputs from "./StepInputs .vue";

export default {
  data() {
    return {
      activeStep: ref(1),
      stepperColor: "primary",

      // Step 1 inputs
      step1Input1: "",
      step1Input2: "",
      step1Input3: "",
      step1Input4: "",
      step1Input5: "",

      // Step 2 inputs
      step2Input1: "",
      step2Input2: "",
      step2Input3: "",
      step2Input4: "",
      step2Input5: "",

      // Step 3 inputs
      step3Input1: "",
      step3Input2: "",
      step3Input3: "",
      step3Input4: "",
      step3Input5: "",

      sampleData: {
        step1: {
          input1: "Sample Data 1",
          input2: "Sample Data 2",
          input3: "Sample Data 3",
          input4: "Sample Data 4",
          input5: "Sample Data 5",
        },
        step2: {
          input1: "Sample Data A",
          input2: "Sample Data B",
          input3: "Sample Data C",
          input4: "Sample Data D",
          input5: "Sample Data E",
        },
        step3: {
          input1: "Sample Data X",
          input2: "Sample Data Y",
          input3: "Sample Data Z",
          input4: "Sample Data W",
          input5: "Sample Data V",
        },
      },
    };
  },

  components: {
    StepInputs,
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
    // Repeat similar watch handlers for Step 2 and Step 3 inputs
  },
  methods: {
    checkChanges(step) {
      // Check if any input in the current step has been edited
      const isEdited =
        this[`${step}Input1`] !== this.sampleData[step].input1 ||
        this[`${step}Input2`] !== this.sampleData[step].input2 ||
        this[`${step}Input3`] !== this.sampleData[step].input3 ||
        this[`${step}Input4`] !== this.sampleData[step].input4 ||
        this[`${step}Input5`] !== this.sampleData[step].input5;

      this[`${step}Edited`] = isEdited;
    },
    canProceedToNextStep(step) {
      // Check if any input in the current step has been edited
      return !this[`${step}Edited`];
    },
    goToNextStep(step) {
      // Prompt user if trying to leave a step with edited inputs
      if (
        this.canProceedToNextStep(step) ||
        confirm("You have unsaved changes. Are you sure you want to leave?")
      ) {
        this.activeStep += 1;
      }
    },
    goToPreviousStep() {
      this.activeStep -= 1;
    },
  },
};
</script>
