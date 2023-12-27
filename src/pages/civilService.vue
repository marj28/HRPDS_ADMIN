<template>
  <div>
    <q-card>
      <q-card-section style="max-height: 50vh" class="scroll">
        <div class="text-h6">
          CIVIL SERVICE ELIGIBILITY
         <!--  <q-btn label="Add" @click="secondDialog = true"></q-btn> -->
        </div>
      </q-card-section>
      <q-table
        class="my-sticky-header-table"
        flat
        bordered
        title=""
        dense
        :rows="personal"
        :columns="columns"
        row-key="id"
      ></q-table>
    </q-card>
    <q-dialog
      v-model="secondDialog"
      persistent
      transition-show="scale"
      transition-hide="scale"
    >
      <q-card class="" style="width: 500px">
        <q-card-section>
          <div class="text-h6">Add Details</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-form ref="service" lazy-rules>
            <div class="row">
              <div class="col">
                <q-select
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="name"
                  use-input
                  hide-selected
                  fill-input
                  input-debounce="0"
                  label="Eligibility"
                  dense
                  class="q-pa-sm text-uppercase"
                  :options="eligibilityoptions"
                  :option-label="(degree) => degree.Descriptions"
                  @filter="filterFn"
                />
              </div>
              <div class="col">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="rating"
                  label="Rating"
                  dense
                  class="q-pa-sm"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="dateofexamination"
                  label="Date of Examination"
                  dense
                  class="q-pa-sm"
                  type="date"
                />
              </div>
              <div class="col">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="PlaceofExamination"
                  label="Place of Examination"
                  dense
                  class="q-pa-sm text-uppercase"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <q-input
                  filled
                  v-model="LicenseNumber"
                  label="License Number"
                  dense
                  class="q-pa-sm"
                />
              </div>
              <div class="col">
                <q-input
                  filled
                  v-model="dateofvalidity"
                  label="Date of Validity"
                  dense
                  class="q-pa-sm"
                  type="date"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <q-file
                  lazy-rules
                  :rules="inputRules"
                  style="display: none"
                  v-model="fileimage"
                  @update:model-value="handleUpload"
                  accept=".jpg, image/*"
                  ref="file"
                ></q-file>
                <div class="column items-center">
                  <q-btn
                    type="button"
                    label="Upload Supporting Document"
                    @click="handleUploadBtnClick"
                  ></q-btn>
                </div>
              </div>
            </div>
            <div class="q-pt-sm">
              <q-img
                lazy-rules
                :rules="inputRules"
                :src="fileimagesrc"
                spinner-color="white"
              ></q-img>
            </div>
          </q-form>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup size="md" />
          <q-btn
            label="Request Update"
            color="secondary"
            size="md"
            @click="saveservice()"
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
import { useLoginStore } from "../stores/LoginStore";
import { ref } from "vue";
import { useUserInfoStore } from "../stores/AdditionalStore";
export default {
  data() {
    return {
      Controlno: "",
      eligibilitytitles: [],
      smalltitle: "",
      smallmessage: "",
      small: false,
      inputRules: [(v) => !!v || "Field is required"],
      dateofvalidity: "",
      PlaceofExamination: "",
      rating: "",
      dateofexamination: "",
      personal: [],
      secondDialog: false,
      model: ref(null),
      name: [],
      LicenseNumber: "",
      dateofbirth: "",
      columns: [
        {
          name: "Eligibility",
          required: true,
          label: "Eligibility",
          align: "left",
          field: "CivilServe",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "Rating",
          align: "center",
          label: "Rating (if Applicable)",
          field: "Rates",
          format: (val) => {
            const numVal = Number(val);
            if (!isNaN(numVal)) {
              return `${numVal.toFixed(2)}`;
            }
            return val;
          },
          sortable: true,
        },
        {
          name: "DateofExamination",
          align: "center",
          label: "Date of Examination",
          field: "Dates",
          sortable: true,
        },
        {
          name: "PlaceofExamination",
          align: "center",
          label: "Place of Examination",
          field: "Place",
          sortable: true,
        },
        {
          name: "LicenseNumber",
          align: "center",
          label: "License Number",
          field: "LNumber",
          sortable: true,
        },
        {
          name: "DateofValidity",
          align: "center",
          label: "Date of Validity",
          field: "LDate",
          sortable: true,
        },
      ],
      rows: [
        {
          Eligibility: "2",
          Rating: "s",
          DateofExamination: "s",
          PlaceofExamination: "s",
          LicenseNumber: "s",
          DateofValidity: "s",
        },
      ],
    };
  },
  created() {
    const userstore = useLoginStore();
    this.personal = userstore.usereligibility;

    this.Controlno = userstore.controlno;
    console.log("eligibility=", this.personal);
    // const store = useUserInfoStore();
    // store.civilservice();
    // this.eligibilitytitles=store.civilservice;
  },
  setup() {
    const eligibilityoptions = ref([]);
    const origdata = ref([]);
    const additionalinfo = useUserInfoStore();

    const file = ref(null);
    const fileimage = ref(null);
    const fileimagesrc = ref("");
    const handleUpload = () => {
      if (fileimage.value) {
        fileimagesrc.value = URL.createObjectURL(fileimage.value);
      }
    };
    const handleUploadBtnClick = () => {
      file.value.pickFiles();
    };

    additionalinfo.getcivilservice().then((res) => {
      eligibilityoptions.value = [...additionalinfo.civilservice];
      origdata.value = [...additionalinfo.civilservice];
    });
    const filterFn = (val, update, abort) => {
      const needle = (val || "").toLowerCase();
      const filteredItems = origdata.value.filter((item) =>
        item.Descriptions.toLowerCase().includes(needle)
      );

      update(() => {
        eligibilityoptions.value = filteredItems;
      });
    };
    return {
      file,
      fileimage,
      fileimagesrc,
      handleUpload,
      handleUploadBtnClick,
      filterFn,
      eligibilityoptions,
    };
  },
  methods: {
    async saveservice() {
      const valid = await this.$refs.service.validate();
      if (!this.fileimage) {
        this.smalltitle = "Error!";
        this.smallmessage =
          "You need to upload a suppporting document in image format.";
        this.small = true;
      }
      if (valid) {
        let Form = new FormData();
        Form.append("Codes", this.name.codes);
        Form.append("ControlNo", this.Controlno);
        Form.append("CivilServe", this.name.Descriptions);
        Form.append("Dates", this.dateofexamination);
        Form.append("Rates", this.rating);
        Form.append("Place", this.PlaceofExamination);
        Form.append("Lnumber", this.LicenseNumber);
        Form.append("Ldate", this.dateofvalidity);
        Form.append("file", this.fileimage);
        const store = useUserInfoStore();
        store.savecivilservice(Form).then((res) => {
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
        this.name = [];
        this.dateofexamination = "";
        this.rating = "";
        this.PlaceofExamination = "";
        this.LicenseNumber = "";
        this.dateofvalidity = "";
        this.fileimage = ref("");
      }
    },
  },
};
</script>
