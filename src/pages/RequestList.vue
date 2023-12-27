<template>
  <div>
    <div class="col-12 col-sm-6 col-md-3 col-lg-9 q-mt-sm">
      <q-card class="my-card" bordered>
        <div class="row justify-start">
          <div class="col-2 q-pa-md">
            <b><p style="font-size: 20px; color: #0c0c0c">Request List</p></b>
          </div>


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
          :rows="userrequest"
          :columns="columns"



          :rows-per-page-options="[5,10,15,20,100]"

        >
          <template v-slot:body="props">
            <q-tr :props="props" @click="handleRowClick(props.row)">
              <q-td key="Controlno" :props="props">
                {{ props.row.controlno }}
              </q-td>
              <q-td key="fullname" :props="props">
                <!--  <q-badge color="green"> -->
                {{ props.row.name1 }}
                <!--   </q-badge> -->
              </q-td>
              <q-td key="Designation" :props="props">
                {{ props.row.designation }}
              </q-td>
              <q-td key="Status" :props="props">
                {{ props.row.status }}
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
import { useDashboardStore } from "../stores/Dashboard";
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
          field: "controlno",
          sortable: true,
        },
        {
          name: "fullname",
          required: true,
          label: "Full Name",
          align: "center",
          field: "name1",


          sortable: true,
        },

        {
          name: "Designation",
          label: "Designation",
          field: "designation",
          sortable: true,
          align: "center"
        },
        { name: "Status", label: "Status", field: "status",align:"center" },
      ],


      userrequest:[],
    };
  },

  computed: {},

  created() {
    const store=useDashboardStore();

 console.log("imgurl=",store.users);
 this.userrequest=store.users

  },

  methods: {
    handleRowClick(row) {
      console.log("Clicked row:", row.controlno);
      this.$router.push({
        name: "RequestUpdate",
        params: { controlNo: row.controlno },
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
  setup(){
    // const store=useDashboardStore();

    //  console.log("imgurl=",store.users);
    //  this.userrequest=Object.values(store.users)
    return {
      // store,


    }
  }
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
