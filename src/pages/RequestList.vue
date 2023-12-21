<template>
  <div>
    <div class="col-12 col-sm-6 col-md-3 col-lg-9 q-mt-sm">
      <q-card class="my-card" bordered>
        <div class="row justify-start">
          <div class="col-2 q-pa-md">
            <b><p style="font-size: 20px; color: #0c0c0c">Request List</p></b>
          </div>

          <q-dialog v-model="dialogpersonal" persistent>
            <q-card style="width: 50%; height: 75%">
              <q-card-section>
                <div class="text-h6">Personal Details</div>
              </q-card-section>

              <q-separator />

              <div class="row">
                <div class="col-12 col-sm-6 col-md-3 col-lg-6">
                  <div class="q-pa-sm q-ml-xl">
                    <label>
                      <img
                        v-if="imageUrl"
                        :src="imageUrl"
                        alt="Selected Image"
                        style="
                          cursor: pointer;
                          max-width: 200%;
                          max-height: 195px;
                        "
                        @click="openFileInput"
                      />
                      <div v-else class="placeholder" style="cursor: pointer">
                        Click to add an image
                      </div>
                      <input
                        ref="fileInput"
                        type="file"
                        style="display: none"
                        @change="handleFileChange"
                      />
                    </label>
                  </div>
                </div>

                <div class="col-12 col-sm-6 col-md-3 col-lg-6 q-pa-sm">
                  <q-input
                    filled
                    label="Nationality"
                    v-model="fixedValue_Nationality"
                    dense
                    class="q-pa-sm"
                  />
                </div>
              </div>

              <q-card-section style="max-height: 50vh" class="scroll">
                <q-form>
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <q-input
                        filled
                        label="First Name"
                        dense
                        class="q-pa-sm"
                      />
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <q-input
                        filled
                        label="Middle Name"
                        dense
                        class="q-pa-sm"
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-6 col-sm-12">
                      <q-input filled label="Last Name" dense class="q-pa-sm" />
                    </div>

                    <div class="col-lg-12 col-md-6 col-sm-12">
                      <q-input
                        filled
                        label="Occupation"
                        dense
                        class="q-pa-sm"
                      />
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <q-input filled label="Age" dense class="q-pa-sm" />
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <!--  <q-input filled label="Sex" dense class="q-pa-sm" /> -->
                      <!--   <q-select
                        class="q-pa-sm"
                        label="Sex"
                        transition-show="jump-up"
                        transition-hide="jump-up"
                        filled
                        dense
                        v-model="model"
                        :options="options_sex"
                      /> -->
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-12 col-md-6 col-sm-12">
                      <q-input
                        filled
                        label="Place of Work"
                        dense
                        class="q-pa-sm"
                      />
                    </div>
                  </div>
                  <q-separator class="q-mb-sm"></q-separator>
                </q-form>
              </q-card-section>
            </q-card>
            <q-card style="width: 50%; height: 75%">
              <q-card-section>
                <div class="text-h6">Health Details</div>
              </q-card-section>

              <q-separator />

              <q-card-section style="max-height: 50vh" class="scroll">
                <q-form>
                  <div class="row justify-center q-ma-sm">
                    <div class="col-lg-12">
                      <q-card class="imunizationbackgroundcolor">
                        <p class="row justify-center">Immunization</p>
                      </q-card>
                    </div>
                  </div>

                  <div class="row q-ma-sm">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-card>
                        <p
                          class="row justify-center imunizationbackgroundcolor_caption"
                        >
                          Date
                        </p>
                      </q-card>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-card>
                        <p
                          class="row justify-center imunizationbackgroundcolor_caption"
                        >
                          Kind
                        </p>
                      </q-card>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-card>
                        <p
                          class="row justify-center imunizationbackgroundcolor_caption"
                        >
                          Result
                        </p>
                      </q-card>
                    </div>
                  </div>

                  <div class="row rowup">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-input filled type="date" dense class="q-pa-sm" />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-input filled dense class="q-pa-sm" />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-input filled dense class="q-pa-sm" />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-input filled type="date" dense class="q-pa-sm" />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-input filled dense class="q-pa-sm" />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-input filled dense class="q-pa-sm" />
                    </div>
                  </div>
                </q-form>
              </q-card-section>

              <q-card-section style="max-height: 50vh" class="rowup1">
                <q-form>
                  <div class="row justify-center q-ma-sm rowup1">
                    <div class="col-lg-12">
                      <q-card class="imunizationbackgroundcolor">
                        <p class="row justify-center">X-Ray/Sputum</p>
                      </q-card>
                    </div>
                  </div>

                  <div class="row q-ma-sm">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-card>
                        <p
                          class="row justify-center imunizationbackgroundcolor_caption"
                        >
                          Date
                        </p>
                      </q-card>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-card>
                        <p
                          class="row justify-center imunizationbackgroundcolor_caption"
                        >
                          Kind
                        </p>
                      </q-card>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-card>
                        <p
                          class="row justify-center imunizationbackgroundcolor_caption"
                        >
                          Result
                        </p>
                      </q-card>
                    </div>
                  </div>

                  <div class="row rowup1">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-input filled type="date" dense class="q-pa-sm" />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-input
                        v-model="fixedValue_xray"
                        filled
                        input-style="text-align: center"
                        dense
                        class="q-pa-sm"
                      />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-input filled dense class="q-pa-sm" />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-input filled type="date" dense class="q-pa-sm" />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-input
                        filled
                        v-model="fixedValue_Sputum"
                        input-style="text-align: center"
                        dense
                        class="q-pa-sm"
                      />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-input filled dense class="q-pa-sm" />
                    </div>
                  </div>
                  <q-separator class="q-mb-sm"></q-separator>
                </q-form>
              </q-card-section>

              <q-card-section style="max-height: 50vh" class="rowup1">
                <q-form>
                  <div class="row justify-center q-ma-sm rowup">
                    <div class="col-lg-12">
                      <q-card class="imunizationbackgroundcolor">
                        <p class="row justify-center">
                          Stool and Other Exam. RQD.
                        </p>
                      </q-card>
                    </div>
                  </div>

                  <div class="row q-ma-sm">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-card>
                        <p
                          class="row justify-center imunizationbackgroundcolor_caption"
                        >
                          Date
                        </p>
                      </q-card>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-card>
                        <p
                          class="row justify-center imunizationbackgroundcolor_caption"
                        >
                          Kind
                        </p>
                      </q-card>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-card>
                        <p
                          class="row justify-center imunizationbackgroundcolor_caption"
                        >
                          Result
                        </p>
                      </q-card>
                    </div>
                  </div>

                  <div class="row rowup">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-input filled type="date" dense class="q-pa-sm" />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-input
                        filled
                        input-style="text-align: center"
                        v-model="fixedValue_Stool"
                        dense
                        class="q-pa-sm"
                      />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-input filled dense class="q-pa-sm" />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-input filled type="date" dense class="q-pa-sm" />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-input
                        filled
                        dense
                        input-style="text-align: center"
                        v-model="fixedValue_Urine"
                        class="q-pa-sm"
                      />
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-12">
                      <q-input filled dense class="q-pa-sm" />
                    </div>
                  </div>
                  <q-separator class="q-mb-sm"></q-separator>
                </q-form>
              </q-card-section>
              <q-card-actions align="right">
                <q-btn
                  flat
                  label="Cancel"
                  color="primary"
                  v-close-popup
                  size="md"
                />
                <q-btn
                  label="Save"
                  color="secondary"
                  size="md"
                  v-close-popup
                  @click="save"
                />
              </q-card-actions>
            </q-card>
          </q-dialog>

          <!--       <div class="col-8 q-pa-sm">
            <q-btn
              icon="camera_enhance"
              glossy
              color="secondary"
              label="Add"
              @click="Rowclick"
            />
          </div> -->

          <div class="col-2 q-pa-sm">
            <!--    <template v-slot:top-right> -->
            <q-input
              borderless
              dense
              debounce="300"
              v-model="filter"
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
            <!--    </template> -->
          </div>
        </div>
        <!--    <div class="row dashboard">
            <div class="col-12 col-sm-6 col-md-6 col-lg-6">
              <q-card class="my-card" bordered>
                <q-card-section>
                  <PieChart :chart-data="ChartDatas()" class="pie" />
                </q-card-section>
              </q-card>
            </div>
          </div> -->
        <q-table
          class="my-sticky-dynamic"
          flat
          bordered
          :filter="filter"
          :rows="seed"
          :columns="columns"
          :loading="loading"
          row-key="Controlno"
          virtual-scroll
          :virtual-scroll-item-size="48"
          :virtual-scroll-sticky-size-start="48"
          :pagination="pagination"
          :rows-per-page-options="[0]"
          @virtual-scroll="onScroll"
        >
          <template v-slot:body="props">
            <q-tr :props="props" @click="handleRowClick(props.row)">
              <q-td key="Controlno" :props="props">
                {{ props.row.Controlno }}
              </q-td>
              <q-td key="fullname" :props="props">
                <!--  <q-badge color="green"> -->
                {{ props.row.fullname }}
                <!--   </q-badge> -->
              </q-td>
              <q-td key="Designation" :props="props">
                {{ props.row.Designation }}
              </q-td>
              <q-td key="Status" :props="props">
                {{ props.row.Status }}
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </q-card>
    </div>
  </div>
</template>

<script>
/* import HorizontalBarChart from "../components/HorizontalBarChart.vue"; */
/* import PieChart from "../components/PieChart.vue"; */

import { defineComponent } from "vue";
import { ref, computed, nextTick } from "vue";
export default defineComponent({
  name: "App",

  components: {
    /*   HorizontalBarChart, */
    /*   PieChart, */
  },
  data() {
    return {
      imageUrl: null,
      dialogpersonal: false,
      filter: "",
      controlNo: "",
      model: ref(null),

      columns: [
        {
          name: "Controlno",
          align: "center",
          label: "Control no",
          field: "Controlno",
          sortable: true,
        },
        {
          name: "fullname",
          required: true,
          label: "Full Name",
          align: "center",
          field: (row) => row.fullname,
          format: (val) => val,

          sortable: true,
        },

        {
          name: "Designation",
          label: "Designation",
          field: "Designation",
          sortable: true,
        },
        { name: "Status", label: "Status", field: "Status" },
      ],

      seed: [
        {
          Controlno: "0323232",
          fullname: "Joemarie Rendon",
          Designation: "Programmer",
          Status: "Married",
        },
        {
          Controlno: "0323232",
          fullname: "Jograd Mahusay",
          Designation: "Web Developer",
          Status: "Single",
        },
        {
          Controlno: "0323232",
          fullname: "Pablo Escobar",
          Designation: "Delivery Boy",
          Status: "Single",
        },
        {
          Controlno: "0323232",
          fullname: "Stepehn Curry",
          Designation: "Buss Driver",
          Status: "Single",
        },
        {
          Controlno: "019807",
          fullname: "Honey Marjie Curay",
          Designation: "Front End Web Dev",
          Status: "Single",
        },
        {
          Controlno: "0323232",
          fullname: "Carlo QUEZON",
          Designation: "Network Administrator",
          Status: "Single",
        },
      ],
    };
  },

  computed: {},

  created() {},

  methods: {
    handleRowClick(row) {
      console.log("Clicked row:", row.Controlno);
      this.$router.push({
        name: "RequestUpdate",
        params: { controlNo: row.Controlno },
      });
    },
    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        // Reset imageUrl before updating with the new image
        this.imageUrl = null;

        this.imageUrl = URL.createObjectURL(file);
        this.$emit("image-selected", this.imageUrl);
        // You can emit this imageUrl to the parent component if needed
      }
    },
    ChartDatas() {
      const activecount = this.ActiveCount;
      const inactive = this.personnelsCount - activecount;
      const chartData = {
        labels: ["Active", "End of Contract"],
        datasets: [
          {
            data: [activecount, inactive],
            backgroundColor: ["#77DD76", "#FFB6B3"],
          },
        ],
      };
      return chartData;
    },

    Rowclick() {
      this.dialogpersonal = true;
    },
  },
});
</script>

<style scoped>
.placeholder {
  border: 2px dashed #ccc;
  padding-top: 80px;
  text-align: center;
  color: #777;
  width: 200px;
  height: 195px;
}
.imunizationbackgroundcolor {
  background-color: black;
  color: white;
}
.imunizationbackgroundcolor_caption {
  background-color: #057407;
  color: white;
  margin-top: -13%;
}

.rowup {
  margin-top: -4%;
}

.rowup1 {
  margin-top: -3%;
}
.dashboard {
  padding: 2%;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}

.my-card {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  margin: 1%;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
