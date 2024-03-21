<template>
  <div>
    <h5 class="q-ml-lg"></h5>
    <!-- <q-separator class="q-mb-lg"></q-separator> -->
    <div class="column items-center" style="">
      <div class="col" style="width: 90%">
        <q-card class="q-pa-sm" style="text-align: center">
          <h4 class="q-mb-md q-mt-md" @click="navigateToRequestList">
            <template v-if="isLoading">
              <q-spinner :size="80" color="primary" />
            </template>
            <template v-else>
              {{ store.request.length }}
            </template>
          </h4>
          <p @click="navigateToRequestList">REQUEST FOR UPDATE</p>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { useDashboardStore } from "../stores/Dashboard";
import { ref } from "vue";

export default {
  setup() {
    const store = useDashboardStore();
    const isLoading = ref(true);

    const fetchData = async () => {
      try {
        await store.getrequest();
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        isLoading.value = false; // Set loading state to false regardless of success or failure
      }
    };

    fetchData();

    return {
      store,
      isLoading,
    };
  },

  methods: {
    navigateToRequestList() {
      this.$router.push("/RequestList");
    },
  },
};
</script>
