<template>
  <div id="q-app">
    <q-layout view="lHh Lpr fff">
      <q-page-container>
        <q-page
          class="window-height window-width row justify-center items-center"
        >
          <div class="column q-pa-lg">
            <div class="row">
              <q-card
                square
                class="shadow-24"
                style="width: 400px; height: auto"
              >
                <q-card-section>
                  <div class="column items-center">
                    <img
                      src="../assets/imgs/logo.png"
                      alt="Tagum City"
                      style="height: 50%; width: 50%"
                    />
                  </div>

                  <div style="font-size: small" class="q-my-md text-center">
                    {{ title }}
                  </div>
                  <div style="font-size: x-large" class="q-my-md text-center">
                    Administrator's Record Management System
                  </div>
                </q-card-section>
                <q-card-section>
                  <!-- <q-fab
                    color="primary"
                    @click="switchTypeForm"
                    icon="add"
                    class="absolute"
                    style="top: 0; right: 12px; transform: translateY(-50%)"
                  >
                    <q-tooltip> Регистрация нового пользователя </q-tooltip>
                  </q-fab> -->
                  <q-form class="q-px-sm">
                    <!-- <q-input
                      ref="email"
                      square
                      clearable
                      v-model="email"
                      type="email"
                      lazy-rules
                      :rules="[this.required, this.isEmail, this.short]"
                      label="Email"
                    >
                      <template v-slot:prepend>
                        <q-icon name="email" />
                      </template>
                    </q-input> -->
                    <q-input
                      ref="username"
                      square
                      clearable
                      v-model="username"
                      lazy-rules
                      :rules="[this.required, this.short]"
                      type="username"
                      label="UserID"
                      @keydown.enter.prevent="next()"
                    >
                      <template v-slot:prepend>
                        <q-icon name="person" />
                      </template>
                    </q-input>
                    <q-input
                      ref="password"
                      square
                      clearable
                      v-model="password"
                      :type="passwordFieldType"
                      lazy-rules
                      :rules="[this.required]"
                      label="Password"
                      @keydown.enter.prevent="submit()"
                    >
                      <template v-slot:prepend>
                        <q-icon name="lock" />
                      </template>
                      <template v-slot:append>
                        <q-icon
                          :name="visibilityIcon"
                          @click="switchVisibility()"
                          class="cursor-pointer"
                        />
                      </template>
                    </q-input>
                  </q-form>
                </q-card-section>

                <q-card-actions class="q-px-lg">
                  <q-btn
                    unelevated
                    size="lg"
                    color="secondary"
                    @click="submit()"
                    class="full-width text-white"
                    :label="btnLabel"
                  />
                </q-card-actions>
                <q-card-section class="text-center q-pa-sm"> </q-card-section>
              </q-card>
            </div>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { useLoginStore } from "../stores/LoginStore";
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "LoginPage",
  data: function () {
    return {
      title: "City Human Resource Management Office",

      username: "",
      password: "",

      passwordFieldType: "password",
      btnLabel: "LOGIN",
      visibility: false,
      visibilityIcon: "visibility",
    };
  },
  setup() {
    const $q = useQuasar();

    return {
      showNotif() {
        $q.notify({
          icon: "error",
          color: "negative",
          message: "Login Failed",
          position: "center",
          timeout: "1000",
        });
      },

      showNotifsixdigits() {
        $q.notify({
          icon: "error",
          color: "negative",
          message: "User ID Must be at Least 6 Digits",
          position: "center",
          timeout: "2000",
        });
      },

      showLoading() {
        $q.loading.show({
          message: "Please Wait",
        });
      },
      hideLoading() {
        $q.loading.hide();
      },
    };
  },
  methods: {
    switchVisibility() {
      this.visibility = !this.visibility;
      this.passwordFieldType = this.visibility ? "text" : "password";
      this.visibilityIcon = this.visibility ? "visibility_off" : "visibility";
    },
    next() {
      this.$refs["password"].focus();
    },
    short(val) {
      return (val && val.length > 5) || "UserId must be 6 digits ex:`011790`";
    },
    required(val) {
      return (val && val.length > 0) || "Field must be filled in";
    },

    submit() {
      if (this.username.length < 6) {
        console.log("Email must be at least 6 characters long");
        this.showNotifsixdigits();
        return;
      }
      this.$refs.username.validate();
      this.$refs.password.validate();
      if (!this.$refs.username.hasError && !this.$refs.password.hasError) {
        this.showLoading();
        const store = useLoginStore();
        const data = new FormData();
        data.append("controlno", this.username);
        data.append("password", this.password);

        store.userlogin(data).then((e) => {
          this.hideLoading();
          if (e == 0 || e == 2 || e == 3) {
            console.log("failed!");
            //   $q.notify({
            //   icon: 'done',
            //   color: 'positive',
            //   message: 'Авторизация'
            // })
            this.showNotif();
          } else {
            // console.log("Success!")
            this.$router.push({ path: "/Dashboard" });
          }
        });
      }
    },
  },
});
</script>
