<template>
  <q-page>
    <q-table
      class="my-sticky-header-table"
      flat
      bordered
      title="Request for Update List"
      dense
      :rows="requests"
      :columns="columns"
      row-key="id"
      :rows-per-page-options="[5]"
    >
      <template v-slot:body-cell-actions="{ row }">
        <div class="actionsbtn q-gutter-lg">
          <q-btn flat round color="green" @click="viewdoc(row)">
            View Docu
          </q-btn>
          <q-btn
            v-if="row.status !== 'Accepted'"
            flat
            round
            color="green"
            @click="accept(row)"
          >
            Accept
          </q-btn>
          <q-btn
            v-if="row.status !== 'Accepted'"
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
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      // Sample data for the table
      requests: [
        { id: 1, name: "John Doe", status: "Pending" },
        { id: 2, name: "Jane Doe", status: "Accepted" },
        { id: 3, name: "Bob Smith", status: "Pending" },
        // Add more data as needed
      ],
      columns: [
        {
          name: "name",
          required: true,
          label: "Name",
          align: "left",
          field: "name",
          sortable: true,
        },
        {
          name: "status",
          label: "Status",
          align: "left",
          field: "status",
          sortable: true,
        },
        {
          name: "actions",
          label: "Actions",
          align: "center",
          field: "actions",
          sortable: false,
          slot: "actions", // Add this slot property
        },
        // Add more columns as needed
      ],
    };
  },
  methods: {
    viewdoc(row) {
      // Handle viewdoc action
      console.log("View Docu:", row);
    },
    accept(row) {
      // Handle accept action
      console.log("Accept:", row);
    },
    deleteItem(row) {
      // Handle deny action
      console.log("DENY:", row);
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here if needed */
</style>
