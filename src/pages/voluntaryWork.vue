<template>
  <div>
    <q-card>
      <q-card-section style="max-height: 50vh" class="scroll">
        <div class="text-h6">
          VOLUNTARY WORK
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
          <q-form ref="voluntary" lazy-rules>
            <div class="row">
              <div class="col">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="Name"
                  label="Name and Address of Organization"
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
                  v-model="InclusiveDateFrom"
                  label="Inclusive Date From"
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
                  v-model="InclusiveDateTo"
                  label="Inclusive Date To"
                  dense
                  class="q-pa-sm"
                  type="date"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="NumberofHours"
                  label="Number of Hours"
                  dense
                  class="q-pa-sm"
                />
              </div>
              <div class="col">
                <q-input
                  lazy-rules
                  :rules="inputRules"
                  filled
                  v-model="Position"
                  label="Position"
                  dense
                  class="q-pa-sm"
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
            v-close-popup
            @click="addVoluntary()"
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
      ControlNo: "",
      small: false,
      smalltitle: "",
      smallmessage: "",
      inputRules: [(v) => !!v || "Field is required"],
      Name: "",
      InclusiveDateFrom: "",
      InclusiveDateTo: "",
      NumberofHours: "",
      Position: "",

      personal: [],
      secondDialog: false,
      model: ref(null),
      name: "",
      dateofbirth: "",
      columns: [
        {
          name: "Name",
          required: true,
          label: "NAME & ADDRESS OF ORGANIZATION",
          align: "left",
          field: "OrgName",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "InclusiveDateFrom",
          align: "center",
          label: "From",
          field: "DateFrom",
          sortable: true,
        },
        {
          name: "InclusiveDateTo",
          align: "center",
          label: "To",
          field: "DateTo",
          sortable: true,
        },
        {
          name: "NumberofHours",
          align: "center",
          label: "Number of Hours",
          field: "NoHours",
          sortable: true,
        },
        {
          name: "Position",
          align: "center",
          label: "Position",
          field: "OrgPosition",
          sortable: true,
        },
      ],
    };
  },
  created() {
    const userstore = useDashboardStore();
    this.ControlNo = userstore.controlno;
    this.personal = userstore.uservoluntary;

    console.log("voluntary=", this.personal);
  },
  methods: {
    async addVoluntary() {
      const valid = await this.$refs.voluntary.validate();
      if (!this.fileimage) {
        this.smalltitle = "Error!";
        this.smallmessage =
          "You need to upload a suppporting document in image format.";
        this.small = true;
      }
      if (valid) {
        let Form = new FormData();

        Form.append("ControlNo", this.ControlNo);
        Form.append("Orgname", this.name);
        Form.append("Datefrom", this.InclusiveDateFrom);
        Form.append("Dateto", this.InclusiveDateTo);
        Form.append("NoHours", this.NumberofHours);
        Form.append("OrgPosition", this.Position);

        Form.append("file", this.fileimage);
        const userstore = useUserInfoStore();
        userstore.saveVoluntary(Form).then((res) => {
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
  setup() {
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

    // additionalinfo.civilservice().then((res) => {
    //   eligibilityoptions.value = [...additionalinfo.civilservice];
    //   origdata.value = [...additionalinfo.civilservice];
    // });
    // const filterFn = (val, update, abort) => {
    //   const needle = (val || "").toLowerCase();
    //   const filteredItems = origdata.value.filter((item) =>
    //     item.Descriptions.toLowerCase().includes(needle)
    //   );

    //   update(() => {
    //     eligibilityoptions.value = filteredItems;
    //   });
    // };
    return {
      file,
      fileimage,
      fileimagesrc,
      handleUpload,
      handleUploadBtnClick,
    };
  },
};
</script>
