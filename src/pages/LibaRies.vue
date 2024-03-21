<template>
  <div class="row">
    <div class="col-12 q-px-lg q-mt-lg">
      <q-btn
        flat
        round
        color="green"
        @click="CreationDialog_Eligibility = true"
      >
        ADD
      </q-btn>
      <q-table
        class="my-sticky-header-table q-px-md"
        flat
        bordered
        title="ELIGIBILITY LIBRARIES"
        dense
        :rows="eligibilitydata"
        :columns="columncivilservice"
        row-key="id"
      >
        <template v-slot:body-cell-actions="{ row }">
          <div class="actionsbtn q-gutter-lg">
            <q-btn flat round color="green" @click="accept_NonAcademic(row)">
              EDIT
            </q-btn>
            <q-btn
              flat
              round
              color="deep-orange"
              @click="deleteItem_Non_Academic(row)"
            >
              DELETE
            </q-btn>
          </div>
        </template>
      </q-table>
    </div>

    <q-dialog v-model="CreationDialog_Eligibility" persistent>
      <q-card style="width: 40%; height: auto">
        <q-card-section>
          <div class="text-h6">ADD ELIGIBILITY</div>

          <q-card-section style="height: auto" class="scroll">
            <q-form>
              <div class="row">
                <div class="col-12">
                  <q-input
                    type="textarea"
                    filled
                    v-model="eligibiligy"
                    label="NAME ELIGIBILITY"
                    dense
                    class="q-pa-sm"
                  />
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-separator />

        <q-card-actions align="right">
          <q-btn
            flat
            label="Cancel"
            color="primary"
            v-close-popup
            @click="cancel"
          />
          <q-btn label="Save" color="green" v-close-popup @click="save" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="CreationDialog_Education" persistent>
      <q-card style="width: 40%; height: auto">
        <q-card-section>
          <div class="text-h6">ADD EDUCATION/DEGREE/COURSE</div>

          <q-card-section style="height: auto" class="scroll">
            <q-form>
              <div class="row">
                <div class="col-12">
                  <q-input
                    type="textarea"
                    filled
                    v-model="education"
                    label="NAME EDUCATION/DEGREE/COURSE"
                    dense
                    class="q-pa-sm"
                  />
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-separator />

        <q-card-actions align="right">
          <q-btn
            flat
            label="Cancel"
            color="primary"
            v-close-popup
            @click="cancel"
          />
          <q-btn label="Save" color="green" v-close-popup @click="save" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <div class="col-12 q-px-lg q-mt-lg">
      <q-btn flat round color="green" @click="CreationDialog_Education = true">
        ADD
      </q-btn>
      <q-table
        class="my-sticky-header-table q-px-md"
        flat
        bordered
        title="EDUCATION LIBRARIES"
        dense
        :rows="educationlibraries"
        :columns="columneducation"
        row-key="id"
      >
        <template v-slot:body-cell-actions="{ row }">
          <div class="actionsbtn q-gutter-lg">
            <q-btn flat round color="green" @click="accept_NonAcademic(row)">
              EDIT
            </q-btn>
            <q-btn
              flat
              round
              color="deep-orange"
              @click="deleteItem_Non_Academic(row)"
            >
              DELETE
            </q-btn>
          </div>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CreationDialog_Eligibility: false,
      CreationDialog_Education: false,
      columncivilservice: [
        {
          name: "eligibiligy",
          align: "left",
          label: "Eligibility",
          field: "eligibiligy",
          sortable: true,
        },

        {
          name: "actions",
          label: "ACTIONS",
          field: "actions",
          align: "left",
        },
      ],

      columneducation: [
        {
          name: "education",
          align: "left",
          label: "BASIC EDUCATION/DEGREE/COURSE",
          field: "education",
          sortable: true,
        },

        {
          name: "actions",
          label: "ACTIONS",
          field: "actions",
          align: "left",
        },
      ],

      eligibilitydata: [
        { id: 1, eligibiligy: "Civil Service" },
        { id: 1, eligibiligy: "License Professional Teacher" },
      ],

      educationlibraries: [
        { id: 1, education: "Bachelor of scienc in bulkanayzing" },
        { id: 1, education: "Electronic Letro ug LongNeck" },
      ],
    };
  },
};
</script>
