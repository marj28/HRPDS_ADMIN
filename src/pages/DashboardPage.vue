<template>
  <div>
    <h5 class="q-ml-lg"></h5>
    <!-- <q-separator class="q-mb-lg"></q-separator> -->
    <div class="column items-center" style="">
      <div class="col" style="width: 90%">
        <q-card class="q-pa-sm" style="text-align: center">
          <h4 class="q-mb-md q-mt-md" @click="navigateToRequestList">
            {{ store.request.length }}
          </h4>
          <p @click="navigateToRequestList">REQUEST FOR UPDATE</p>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
import { useDashboardStore } from "../stores/Dashboard";
export default {
  data() {
    return {};
  },

  methods: {
    navigateToRequestList() {
      this.$router.push("/RequestList");
    },
  },

  setup() {
    const store = useDashboardStore();
    store.getrequest();
    // console.log("imgurl=",imgurl);
    return {
      store,
    };
  },
};
</script>

<style scoped>
h4 {
  cursor: pointer;
}
p {
  cursor: pointer;
}
</style>
