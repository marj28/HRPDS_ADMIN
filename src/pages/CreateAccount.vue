<template>
  <div>
    <!--  <MainLayout/> -->
    <q-flex
      class="q-gutter-md"
      justify="center"
      align="center"
      style="height: 100%"
    >
      <div>
        <h4>CREATE OFFICE ADMIN ACCOUNT</h4>
      </div>
    </q-flex>


   <!--  <div class="row " >
      <q-btn
          color="orange"
          class="q-pl-sm"
          min-width="92"
          rounded
          @click="$router.push('/AccountList').catch((err) => {})"
        >
          Back
        </q-btn>

    </div> -->
    <!--
      <q-flex
        class="q-gutter-md"
        justify="center"
        align="center"
        style="height: 100%"
      > -->
    <div class="q-gutter-md row justify-center">
      <q-card class="col-6" style="width: 1000px">


        <div class="row q-pa-md">
          <div></div>

          <div class="col-6 q-pa-md">
            <q-select
              filled
              v-model="selectname"
              label="Select Last Name"
              dense
              class="q-pa-sm text-uppercase"
            />
          </div>

          <div class="row">
            <div class="col-6 q-px-md">
              <q-input
                filled
                v-model="lastname"
                label="Last Name"
                dense
                class="q-pa-sm text-uppercase"
              />
            </div>

            <div class="col-6 q-px-md">
              <q-input
                filled
                v-model="status"
                label="Status"
                dense
                class="q-pa-sm text-uppercase"
              />
            </div>
            <div class="col-6 q-px-md">
              <q-input
                filled
                v-model="firstname"
                label="First Name"
                dense
                class="q-pa-sm text-uppercase"
              />
            </div>

            <div class="col-6 q-px-md">
              <q-input
                filled
                v-model="designation"
                label="Designation"
                dense
                class="q-pa-sm text-uppercase"
              />
            </div>

            <div class="col-6 q-px-md">
              <q-input
                filled
                v-model="middlename"
                label="Middle Name"
                dense
                class="q-pa-sm text-uppercase"
              />
            </div>
          </div>
        </div>
        <div
          class="q-gutter-lg"
          justify="center"
          align="center"
          style="height: 100%"
        >
          <div class="row">
            <div class="col-12 q-px-md">
              <h5>Login Credentials</h5>
            </div>
            <div class="col-6 q-px-md">
              <q-input
                filled
                v-model="password"
                label="Password"
                dense
                class="q-pa-sm text-uppercase"
              />
            </div>
            <div class="col-6 q-px-md">
              <q-input
                filled
                v-model="Confirmpassword"
                label="Confirm Password"
                dense
                class="q-pa-sm text-uppercase"
              />
            </div>
          </div>

          <div class="row justify-end q-pa-lg q-mt-sm">
            <q-btn color="green"> Save Account </q-btn>
          </div>
        </div>
      </q-card>
    </div>
    <!--   </q-flex> -->
  </div>
</template>

<script>
/* import { MainLayout } from "../layouts/MainLayout"; */
export default {
  data() {
    return {};
  },

  /*   components: {
    MainLayout,
  }, */
};
</script>
