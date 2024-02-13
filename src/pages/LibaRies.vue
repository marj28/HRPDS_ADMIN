<template>
  <div class="row">
    <div class="col-12 q-px-lg q-mt-lg">
      <q-btn flat round color="green" @click="accept_NonAcademic(row)">
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

    <div class="col-12 q-px-lg q-mt-lg">
      <q-btn flat round color="green" @click="accept_NonAcademic(row)">
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
