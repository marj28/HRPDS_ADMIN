<template>
  <div>
    <div>
                <div class="row">
                  <div class="col-1">
                    <!--   <p>{{ controlNo }}</p> -->
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
              </div>
    <div class="q-pa-md">
      <div class="q-gutter-y-md" style="max-width: 1500px">
        <q-card>
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >

            <q-tab name="List" label="Request for Update List" />
            <q-tab name="pds" label="PERSONAL DATA SHEET" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="pds">
              <PDS />
            </q-tab-panel>

            <q-tab-panel name="List">

              <div class="column items-center" style="">
                <div class="col" style="width: 90%">
                  <q-card class="q-pa-sm" style="text-align: center">
                    <q-table
                      class="my-sticky-header-table"
                      flat
                      bordered
                      title="Request for Update List"
                      dense
                      :rows="requests"
                      :columns="columns"
                      row-key="id"
                      :rows-per-page-options="[0]"
                    >
                      <template v-slot:body-cell-actions="{ row }">
                        <div class="actionsbtn q-gutter-lg">
                          <q-btn
                            flat
                            round
                            color="green"
                            @click="editItem(row)"
                          >
                            View Docu
                          </q-btn>
                          <q-btn
                            flat
                            round
                            color="green"
                            @click="editItem(row)"
                          >
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
            </q-tab-panel>
          </q-tab-panels>
        </q-card>

        <q-card> </q-card>
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

            />
            <q-btn label="Save" color="green" v-close-popup @click="reject" />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="viewdocs" persistent="">
        <q-card style="width: 35%; height: 40%">
          <q-card-section>
            <div class="text-h6">SUPPORTING DOCUMENTS</div>
          </q-card-section>

          <q-separator />

          <q-card-section>
            <div v-if="images.length > 0">
                <q-img v-for="(file, index) in images" :key="index" :src=imagesource(file) alt="Uploaded Image" style="
                    height: 2in;
                    max-width: 2in;
                    border-color: black;
                    border-radius: 10%;
                    border-width: 2%;
                    border-style: solid;
                  " />
              </div>
          </q-card-section>
          <q-separator />

        <q-card-actions align="right">

          <q-btn label="Close" color="green" v-close-popup  />
        </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>
<script>
import { useDashboardStore } from 'src/stores/Dashboard';
import { ref } from "vue";
import PDS from "./PDS.vue";
export default {
  data() {
    return {
      DialogDeny: false,
      viewdocs:false,
      controlNo: "",
      tab: ref("List"),
      columns: [
        {
          name: "requestfield",
          align: "left",
          label: "REQUEST FIELD",
          field: "label",
          sortable: true,
        },
        {
          name: "datafrom",
          align: "left",
          label: "DATA FROM",
          field: "Dfrom",
          sortable: true,
        },
        {
          name: "datato",
          align: "left",
          label: "DATA TO",
          field: "Dto",
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
      requests:[],
      userinfo:[],
      imgurl:'',
      images:[],
        id:'',
        text:''
    };
  },
  components: {
    PDS,
  },

  // mounted() {
  //   this.controlNo = this.$route.params.controlNo;
  //   /*  this.FUllname = this.$route.params.FUllname; */
  // },
  methods: {
    imagesource(file){
      const imgsrc='http://10.0.1.23:82/Pics/' + file.imgname
      return imgsrc
    },
    viewdoc(row){
      const store=useDashboardStore();
      let data=new FormData;
    data.append('ControlNo',this.controlNo);
    data.append('SessionID',row.sessionID);
    store.getimg(data).then(res=>{
      this.images=store.images
      this.viewdocs=true
    })
    },
    deleteItem() {
      this.DialogDeny = true;
    },
    accept(row){
      const store=useDashboardStore();
      let data=new FormData;
      data.append("column",row.col);
      data.append("value",row.Dto);
      data.append("controlno",this.controlNo)
      data.append("id",row.ID)
      store.accept(data).then(res=>{
        let data2=new FormData;
      data2.append("ControlNo",this.controlNo)
      store.getsinglerequest(data2).then(res=>{
        // console.log("result=",res)
      this.requests=store.userrequest
      // console.log("userinfo=",this.requests)

    })
      })
    },
    opendialog(row){
      this.text=""
      this.id=row.ID
      this.DialogDeny=true
    },
    reject(){
      const store=useDashboardStore();
      let data=new FormData;

      data.append("id",this.id)
      data.append("remarks",this.text)
      store.reject(data).then(res=>{
        let data2=new FormData;
      data2.append("ControlNo",this.controlNo)
      store.getsinglerequest(data2).then(res=>{
      this.requests=store.userrequest
      console.log("userinfo=",this.requests)

    })
      })
    }
  },


  created() {
    // Access the controlNumber from the Vuex store
    this.controlNo = this.$route.params.controlNo;
    const store=useDashboardStore();
    let data=new FormData;
    data.append("controlno",this.controlNo)
    store.getuserinfo(data).then(res=>{
      this.userinfo=store.userinfo
      this.imgurl="http://10.0.1.23:82/pics/" + store.img
    })
    let data2=new FormData;
    data2.append("ControlNo",this.controlNo)
    store.getsinglerequest(data2).then(res=>{
      this.requests=store.userrequest
      console.log("userinfo=",this.requests)

    })


  },
};
</script>

<style>
.uppadding {
  padding-top: -20px;
}
</style>
