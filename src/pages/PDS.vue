<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      alternative-labels
      color="primary"
      contracted
      animated
    >
      <q-step
        :name="1"
        title="Personal Information"
        icon="settings"
        :done="step > 1"
      >
        PERSONAL INFORMATION

        <PersonalInformation />
      </q-step>

      <q-step
        :name="2"
        title="Family Background"
        icon="create_new_folder"
        :done="step > 2"
      >
        FAMILY BACKGROUND
        <FamilyBackground />
      </q-step>

      <q-step
        :name="3"
        title="Educational Background"
        icon="add_comment"
        :done="step > 3"
      >
        <!--    EDUCATIONAL BACKGROUND -->
        <EducationalBackground />
        <br />
        <!--      CIVIL SERVICE ELIGIBILITY -->
        <CivilService />
        <br />
        <!--     WORK EXPERIENCE -->
        <WorkExperience />
      </q-step>

      <q-step
        :name="4"
        title="VOLUNTARY WORK OR INVOLVEMENT IN CIVIC / NON-GOVERNMENT / PEOPLE / VOLUNTARY ORGANIZATION/S"
        icon="create_new_folder"
        :done="step > 4"
      >
        <!-- VOLUNTARY WORK OR INVOLVEMENT IN CIVIC / NON-GOVERNMENT / PEOPLE /
        VOLUNTARY ORGANIZATION/S -->
        <VoluntaryWork />
        <br />
        <!-- LEARNING AND DEVELOPMENT (L&D) INTERVENTIONS/TRAINING PROGRAMS ATTENDED -->
        <LearningAndDevelopment />
        <br />
       <!--  OTHER INFORMATION -->
        <OtherInformation />
      </q-step>

      <q-step
        :name="5"
        title="BackPage"
        icon="create_new_folder"
        :done="step > 5"
      >
        <BackPage />
      </q-step>

      <!-- <q-step
        :name="6"
        title="OTHER INFORMATION"
        icon="create_new_folder"
        :done="step > 6"
      >
        OTHER INFORMATION
      </q-step> -->

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="$refs.stepper.next()"
            color="primary"
            :label="step === 5 ? 'Finish' : 'Continue'"
          />
          <q-btn
            @click="printPage"
            color="green"
            :label="'View PDS'"
            class="q-ml-sm"
            outlined
          />
          <q-btn
            v-if="step > 1"
            flat
            color="primary"
            @click="$refs.stepper.previous()"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </div>
</template>

<script>
import { ref } from "vue";
import PersonalInformation from "./personalInformation.vue";
import FamilyBackground from "./familyBackground.vue";
import EducationalBackground from "./educationalBackground.vue";
import CivilService from "./civilService.vue";
import WorkExperience from "./workExperience.vue";
import VoluntaryWork from "./voluntaryWork.vue";
import LearningAndDevelopment from "./learningAndDevelopment.vue";
import OtherInformation from "./otherInformation.vue";
import BackPage from "./backPage.vue";

export default {
  data() {
    return {
      step: ref(1),
      model: ref(null),
      cit: ref(null),
      options: ["Single", "Married", "Widowed", "Separated", "Other/s"],
      citizenship: ["Filipino", "Dual Citizenship"],
      extension: ["Jr.", "Sr.", "III"],
      ReferenceDialog: false,
    };
  },
  methods: {
    printPage() {
      // Open the print dialog when the button is clicked
      // window.print();
      this.$router.push("/printpds");
    },
  },
  components: {
    PersonalInformation,
    FamilyBackground,
    EducationalBackground,
    CivilService,
    WorkExperience,
    VoluntaryWork,
    LearningAndDevelopment,
    OtherInformation,
    BackPage,
  },
};
</script>
