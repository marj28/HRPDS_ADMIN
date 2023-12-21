<template>
  <div>
    <div>
      <h5 class="q-ml-lg">HRPDS ANNOUNCEMENT</h5>
      <div class="column items-center" style="">
        <div class="col" style="width: 90%">
          <q-btn
            label="CREATE"
            @click="Rowclick"
            class="q-mb-sm q-mr-md text-green"
          />
          <q-card class="q-pa-sm" style="text-align: center">
            <q-table
              class="my-sticky-header-table"
              flat
              bordered
              title="Announcement List"
              dense
              :rows="announcement"
              :columns="columns"
              row-key="id"
              :rows-per-page-options="[0]"
            >
              <template v-slot:body-cell-actions="{ row }">
                <div class="actionsbtn">
                  <q-btn
                    icon="edit"
                    flat
                    round
                    color="secondary"
                    @click="editItem(row)"
                  >
                  </q-btn>
                  <q-btn
                    icon="delete"
                    flat
                    round
                    color="deep-orange"
                    @click="deleteItem(row)"
                  >
                  </q-btn>
                </div>
              </template>
            </q-table>
          </q-card>

          <q-dialog v-model="CreationDialog" persistent>
            <q-card style="width: 40%; height: auto">
              <q-card-section>
                <div class="text-h6">Announcement Details</div>
              </q-card-section>

              <q-separator />

              <q-card-section style="height: auto" class="scroll">
                <q-form>
                  <div class="row">
                    <div class="col-12">
                      <q-input
                        filled
                        v-model="announcementname"
                        label="Announcement Name"
                        dense
                        class="q-pa-sm"
                      />
                    </div>
                  </div>
                </q-form>
              </q-card-section>

              <q-separator />

              <q-card-actions align="right">
                <q-btn
                  flat
                  label="Cancel"
                  color="primary"
                  v-close-popup
                  @click="cancel"
                />
                <q-btn
                  label="Save"
                  color="green"
                  v-close-popup
                  @click="save"
                />
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useDashboardStore } from 'src/stores/Dashboard';
export default {
  data() {
    return {
      id:'',
      announcementname:'',
      CreationDialog: false,
      announcement:[],
      columns: [
        {
          name: "announcementname",
          align: "left",
          label: "ANNOUNCEMENT NAME",
          field: "Announcement",
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
          test: "Test Sample 1",
        },
      ],
    };
  },
  created(){
    const store=useDashboardStore();
    store.getannouncements().then(res=>{
      this.announcement=store.announcements;
      console.log('announcement=',this.announcement)
    })
  },
  methods: {
    // deleteItem() {
    //   this.DialogDeny = true;
    // },
    Rowclick() {

        this.announcementname= "",

      this.CreationDialog = true;
    },

    cancel() {
      this.CreationDialog = false
    },

    save() {
      const store=useDashboardStore();
      if(this.id){
         const store=useDashboardStore();
      let data=new FormData;
      data.append("announcement",this.announcementname);
      data.append("id",this.id);
      data.append("type","edit");
      store.saveannouncements(data).then(res=>{
        store.getannouncements().then(res=>{
          this.announcement=store.announcements;
        })
      })
      this.id="";
      this.announcementname="";
      }else{
      if(this.announcementname.trim() !==""){
        let data=new FormData();
        data.append("announcement",this.announcementname);
        data.append("type","save");
        store.saveannouncements(data).then(res=>{
          if(res == 0){
            store.getannouncements().then(res=>{
              this.announcement=store.announcements
            })
          }
        })
      }
    }
      this.CreationDialog = false
    },

    editItem(item) {
      this.announcementname=item.Announcement;
      this.id=item.ID;
      this.CreationDialog=true

    },
    deleteItem(item){
      const store=useDashboardStore();
      let data=new FormData;
      data.append("id",item.ID);
      data.append("type","delete");
      store.saveannouncements(data).then(res=>{
        store.getannouncements().then(res=>{
          this.announcement=store.announcements;
        })
      })
    }

  },
};
</script>
