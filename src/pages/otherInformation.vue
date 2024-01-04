<template>
  <div>
    <div class="row">
      <div class="col-md-4 col-sm-12 col-xs-12 q-pa-xs">
        <q-card>
          <q-card-section class="scroll">
            <div class="text-h6">
              SPECIAL SKILLS AND HOBBIES
          <!--     <q-btn label="Add" @click="SkillDialog = true"></q-btn> -->
            </div>
          </q-card-section>
          <q-table
            class="my-sticky-header-table"
            flat
            bordered
            title=""
            dense
            :rows="skills"
            :columns="columnSkills"
            row-key="id"
          ></q-table>
        </q-card>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 q-pa-xs">
        <!-- NON-ACADEMIC DISTINCTIONS / RECOGNITION -->
        <q-card>
          <q-card-section class="scroll">
            <div class="text-h6">
              NON-ACADEMIC DISTINCTIONS
              <!-- <q-btn label="Add" @click="NonAcademicDialog = true"></q-btn> -->
            </div>
          </q-card-section>
          <q-table
            class="my-sticky-header-table"
            flat
            bordered
            title=""
            dense
            :rows="academic"
            :columns="columnAcademic"
            row-key="id"
          ></q-table>
        </q-card>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12 q-pa-xs">
        <!-- MEMBERSHIP IN ASSOCIATION/ORGANIZATION -->
        <q-card>
          <q-card-section class="scroll">
            <div class="text-h6">
              MEMBERSHIP IN ASSOCIATION
             <!--  <q-btn label="Add" @click="MembershipDialog = true"></q-btn> -->
            </div>
          </q-card-section>
          <q-table
            class="my-sticky-header-table"
            flat
            bordered
            title=""
            dense
            :rows="organization"
            :columns="columnMembership"
            row-key="id"
          ></q-table>
        </q-card>
      </div>
    </div>

    <q-dialog
      v-model="SkillDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="" style="width: 500px">
        <q-card-section>
          <div class="text-h6">Add</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="row">
            <div class="col">
              <q-input
                filled
                v-model="SkillsandHobbies"
                label="Skills and Hobbies"
                dense
                class="q-pa-sm text-uppercase"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup size="md" />
          <q-btn
            label="Request Update"
            color="secondary"
            size="md"
            v-close-popup
            @click="saveskill()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- NON-ACADEMIC -->
    <q-dialog
      v-model="NonAcademicDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="" style="width: 500px">
        <q-card-section>
          <div class="text-h6">Add</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="row">
            <div class="col">
              <q-input
                filled
                v-model="NonAcademic"
                label="NON-ACADEMIC DISTINCTIONS / RECOGNITION    "
                dense
                class="q-pa-sm text-uppercase"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup size="md" />
          <q-btn
            label="Request Update"
            color="secondary"
            size="md"
            v-close-popup
            @click="savenonacedemic()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- MEMBERSHIP IN ASSOCIATION/ORGANIZATION   -->
    <q-dialog
      v-model="MembershipDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="" style="width: 500px">
        <q-card-section>
          <div class="text-h6">Add</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <div class="row">
            <div class="col">
              <q-input
                filled
                v-model="Membership"
                label="MEMBERSHIP IN ASSOCIATION/ORGANIZATION      "
                dense
                class="q-pa-sm text-uppercase"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup size="md" />
          <q-btn
            label="Request Update"
            color="secondary"
            size="md"
            v-close-popup
            @click="saveorganization()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="small">
      <q-card style="width: 300px">
        <q-card-section>
          <div class="text-h6">{{ smalltitle }}!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ smallmessage }}
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";
import { useDashboardStore } from "../stores/Dashboard";

export default {
  data() {
    return {
      small: false,
      smalltitle: "",
      smallmessage: "",
      SkillsandHobbies: "",
      NonAcademic: "",
      Membership: "",
      ControlNo: "",
      inputRules: [(v) => !!v || "Field is required"],
      skills: [],
      academic: [],
      organization: [],
      SkillDialog: false,
      NonAcademicDialog: false,
      MembershipDialog: false,
      model: ref(null),
      name: "",
      dateofbirth: "",
      columnSkills: [
        {
          name: "SkillsandHobbies",
          required: true,
          label: "Skills and Hobbies",
          align: "left",
          field: "Skills",
          format: (val) => `${val}`,
          sortable: true,
        },
      ],

      columnAcademic: [
        {
          name: "NonAcademic",
          required: true,
          label: "Non-Academic Distinction",
          align: "left",
          field: "NonAcademic",
          format: (val) => `${val}`,
          sortable: true,
        },
      ],

      columnMembership: [
        {
          name: "Membership",
          required: true,
          label: "Membership in Organization",
          align: "left",
          field: "Organization",
          format: (val) => `${val}`,
          sortable: true,
        },
      ],
    };
  },
  created() {
    const userstore = useDashboardStore();
    //dara go
    this.skills = userstore.userskills;
    this.academic = userstore.useracademic;
    this.organization = userstore.userorganization;
    this.ControlNo = userstore.controlno;
    console.log("skills=", this.skills);
    // console.log("academic=",this.academic)
    // console.log("organization=",this.organization)
  },
  methods: {
    saveskill() {
      if (!this.SkillsandHobbies.trim()) {
        let Form = new FormData();

        Form.append("ControlNo", this.ControlNo);
        Form.append("skill", this.SkillsandHobbies);

        const userstore = useUserInfoStore();
        userstore.saveSkills(Form).then((res) => {
          console.log("res=", res);
          if (res == 1) {
            this.secondDialog = false;
            this.smalltitle = "Requested!";
            this.smallmessage =
              "The request for update has been sent to the HR.";
            this.small = true;
          } else if (res == 2) {
            this.secondDialog = false;
            this.smalltitle = "Duplicate Entry!";
            this.smallmessage =
              "The request for update has already been sent to the HR, Please check the Request history for more information.";
            this.small = true;
          } else {
            this.secondDialog = false;
            this.smalltitle = "Error!";
            this.smallmessage =
              "Please contact the SPM Team on local number 508";
            this.small = true;
          }
        });
      }
    },
    savenonacedemic() {
      if (!this.NonAcademic.trim()) {
        let Form = new FormData();

        Form.append("ControlNo", this.ControlNo);
        Form.append("NonAcademic", this.NonAcademic);

        const userstore = useUserInfoStore();
        userstore.saveNonAcademic(Form).then((res) => {
          console.log("res=", res);
          if (res == 1) {
            this.secondDialog = false;
            this.smalltitle = "Requested!";
            this.smallmessage =
              "The request for update has been sent to the HR.";
            this.small = true;
          } else if (res == 2) {
            this.secondDialog = false;
            this.smalltitle = "Duplicate Entry!";
            this.smallmessage =
              "The request for update has already been sent to the HR, Please check the Request history for more information.";
            this.small = true;
          } else {
            this.secondDialog = false;
            this.smalltitle = "Error!";
            this.smallmessage =
              "Please contact the SPM Team on local number 508";
            this.small = true;
          }
        });
      }
    },
    saveorganization() {
      if (!this.Membership.trim()) {
        let Form = new FormData();

        Form.append("ControlNo", this.ControlNo);
        Form.append("Organization", this.Membership);

        const userstore = useUserInfoStore();
        userstore.saveOrganization(Form).then((res) => {
          console.log("res=", res);
          if (res == 1) {
            this.secondDialog = false;
            this.smalltitle = "Requested!";
            this.smallmessage =
              "The request for update has been sent to the HR.";
            this.small = true;
          } else if (res == 2) {
            this.secondDialog = false;
            this.smalltitle = "Duplicate Entry!";
            this.smallmessage =
              "The request for update has already been sent to the HR, Please check the Request history for more information.";
            this.small = true;
          } else {
            this.secondDialog = false;
            this.smalltitle = "Error!";
            this.smallmessage =
              "Please contact the SPM Team on local number 508";
            this.small = true;
          }
        });
      }
    },
  },
};
</script>
