<template>
  <div>
    <div>
      <h5 class="q-ml-lg">REQUEST UPDATE</h5>

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
      columns: [
        {
          name: "requestname",
          align: "left",
          label: "REQUEST NAME",
          field: "test",
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
  methods: {
    deleteItem() {
      this.DialogDeny = true;
    },
  },
};
</script>
