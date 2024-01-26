<template>
  <q-page>
    <q-table
      :rows="sortedTableData"
      :columns="columns"
      row-key="id"
      :rows-per-page-options="[50, 10, 20, 50]"
    >
      <!--   <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <q-badge
            :color="getStatusColor(props.row.status)"
            :label="props.row.status"
          ></q-badge>
        </q-td>
      </template> -->
    </q-table>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          name: "fullname",
          label: "Full Name",
          align: "left",
          field: "fullname",
        },
        {
          name: "status",
          label: "Status",
          align: "left",
          field: "status",
          sortable: true,
        },
      ],
      tableData: [
        { id: 1, fullname: "John Doe", status: "ACCEPT" },
        { id: 2, fullname: "Roderick", status: "ACCEPT" },
        { id: 3, fullname: "Alice Johnson", status: "DENY" },
        { id: 7, fullname: "Bob Smith", status: "PENDING" },
        { id: 8, fullname: "Jogz", status: "PENDING" },
        { id: 9, fullname: "Kimmy", status: "ACCEPT" },
        { id: 9, fullname: "Joemarie", status: "DENY" },
        // Add more data as needed
        // ...
      ],
    };
  },
  computed: {
    sortedTableData() {
      return [...this.tableData].sort(
        (a, b) => this.statusOrder[a.status] - this.statusOrder[b.status]
      );
    },
  },

  created() {
    this.sortStatusOrder();
  },
  methods: {
    sortStatusOrder() {
      // Define a custom sorting order based on the order 'PENDING', 'ACCEPT', 'DENY'
      this.statusOrder = { PENDING: 1, ACCEPT: 2, DENY: 3 };
    },
  },
};
</script>
