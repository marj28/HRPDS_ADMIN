// store/form.js
import { defineStore } from "pinia";
import axios from "axios";

export const useFormStore = defineStore({
  id: "form",

  state: () => ({
    activeStep: 1,

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
      step1: {},
    },
  }),

  actions: {
    updateInput(payload) {
      const { step, input, value } = payload;
      this[`${step}${input}`] = value;
    },

    checkChanges(payload) {
      const { step } = payload;

      // Check if any input in the current step has been edited
      const isEdited =
        this[`${step}Input1`] !== this.sampleData[step].input1 ||
        this[`${step}Input2`] !== this.sampleData[step].input2 ||
        this[`${step}Input3`] !== this.sampleData[step].input3 ||
        this[`${step}Input4`] !== this.sampleData[step].input4 ||
        this[`${step}Input5`] !== this.sampleData[step].input5;

      // You might want to commit the result to state if needed
      // this.setEditedStatus({ step, isEdited });

      return isEdited;
    },

    canProceedToNextStep(payload) {
      const { step } = payload;

      // Check if any input in the current step has been edited
      return !this.checkChanges({ step });
    },

    goToNextStep(payload) {
      const { step } = payload;

      // Prompt user if trying to leave a step with edited inputs
      if (
        this.canProceedToNextStep({ step }) ||
        confirm("You have unsaved changes. Are you sure you want to leave?")
      ) {
        this.incrementActiveStep();
      }
    },

    goToPreviousStep() {
      this.decrementActiveStep();
    },
  },
});
