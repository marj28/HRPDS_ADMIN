<template>
  <div>
    <div>
      <div class="row">
        <div class="col-1">
          <p>{{ controlNo }}</p>
          <!--  <h5 class="q-ml-lg">REQUEST UPDATE</h5> -->
        </div>
        <div class="col-12 col-sm-6 col-md-3 col-lg-2 q-mt-md">
          <q-avatar size="80px" class="shadow-10">
            <q-img :src="imgurl" />
          </q-avatar>
        </div>

        <div class="col-2 col-sm-2 col-md-2 col-lg-6 q-mt-md">
          <p>Full Name: {{ FUllname }}</p>
          <p class="q-mt-md">Designation:</p>
          <p class="uppadding">Status:</p>
        </div>
      </div>
      <div class="column items-center" style="">
        <div class="col" style="width: 90%">
          <q-card class="q-pa-sm" style="text-align: center">
            <q-table
              class="my-sticky-header-table"
              flat
              bordered
              title="Request for Update List"
              dense
              :rows="rows"
              :columns="columns"
              row-key="id"
              :rows-per-page-options="[0]"
            >
              <template v-slot:body-cell-actions="{ row }">
                <div class="actionsbtn q-gutter-lg">
                  <q-btn flat round color="green" @click="editItem(row)">
                    View Docu
                  </q-btn>
                  <q-btn flat round color="green" @click="editItem(row)">
                    Accept
                  </q-btn>
                  <q-btn
                    flat
                    round
                    color="deep-orange"
                    @click="deleteItem(row)"
                  >
                    DENY
                  </q-btn>
                </div>
              </template>
            </q-table>
          </q-card>
        </div>
      </div>
    </div>
    <div>
      <q-dialog v-model="DialogDeny" persistent="">
        <q-card style="width: 35%; height: 40%">
          <q-card-section>
            <div class="text-h6">REQUEST UPDATE DENIED</div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <p>Reason for Denial of Request Update :</p>
            <q-input v-model="text" filled type="textarea" dense="" />
          </q-card-section>
          <q-separator />

          <q-card-actions align="right">
            <q-btn
              flat
              label="Cancel"
              color="orange"
              v-close-popup
              @click="cancel"
            />
            <q-btn label="Save" color="green" v-close-popup @click="save" />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      DialogDeny: false,
      controlNo: "",

      columns: [
        {
          name: "requestfield",
          align: "left",
          label: "REQUEST FIELD",
          field: "requestfield",
          sortable: true,
        },
        {
          name: "datafrom",
          align: "left",
          label: "DATA FROM",
          field: "datafrom",
          sortable: true,
        },
        {
          name: "datato",
          align: "left",
          label: "DATA TO",
          field: "datato",
          sortable: true,
        },
        {
          name: "status",
          align: "left",
          label: "STATUS",
          field: "status",
          sortable: true,
        },
        {
          name: "actions",
          label: "ACTIONS",
          field: "actions",
          align: "center",
        },
      ],
      rows: [
        {
          /*    Controlno: "019807", */
          requestfield: "RESIDENTIAL PRVINCE",
          datafrom: "Davao Del Norte",
          datato: "Davao Del norte",
          status: "Status",
        },
        {
          /*  Controlno: "019807", */
          requestfield: "RESIDENTIAL PRVINCE",
          datafrom: "Davao Del Norte",
          datato: "Davao Del norte",
          status: "Status",
        },
        {
          /*   Controlno: "019807", */
          requestfield: "RESIDENTIAL PRVINCE",
          datafrom: "Davao Del Norte",
          datato: "Davao Del norte",
          status: "Status",
        },
        {
          /*   Controlno: "019807", */
          requestfield: "RESIDENTIAL PRVINCE",
          datafrom: "Davao Del Norte",
          datato: "Davao Del norte",
          status: "Status",
        },

        {
          /*   Controlno: "0323232", */
          requestfield: "RESIDENTIAL PRVINCE",
          datafrom: "Davao Del Norte",
          datato: "Davao Del norte",
          status: "Status",
        },
        {
          /*    Controlno: "0323232", */
          requestfield: "RESIDENTIAL PRVINCE",
          datafrom: "Davao Del Norte",
          datato: "Davao Del norte",
          status: "Status",
        },
        {
          /*   Controlno: "0323232", */
          requestfield: "RESIDENTIAL PRVINCE",
          datafrom: "Davao Del Norte",
          datato: "Davao Del norte",
          status: "Status",
        },
        {
          /*  Controlno: "0323232", */
          requestfield: "RESIDENTIAL PRVINCE",
          datafrom: "Davao Del Norte",
          datato: "Davao Del norte",
          status: "Status",
        },
      ],
    };
  },
  mounted() {
    this.controlNo = this.$route.params.controlNo;
    /*  this.FUllname = this.$route.params.FUllname; */
  },
  methods: {
    deleteItem() {
      this.DialogDeny = true;
    },
  },

  // created() {
  //   // Access the controlNumber from the Vuex store
  //   this.controlNumber = this.$store.state.controlNumber;
  // },
};
</script>

<style>
.uppadding {
  padding-top: -20px;
}
</style>
