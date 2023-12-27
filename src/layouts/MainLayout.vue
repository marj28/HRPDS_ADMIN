<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header> -->

    <q-drawer v-model="drawer" show-if-above :width="300" :breakpoint="500">
      <q-scroll-area
        style="
          height: calc(100% - 200px);
          margin-top: 200px;
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item clickable v-ripple exact to="/Dashboard">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> HOME </q-item-section>
          </q-item>

          <q-item clickable v-ripple exact to="/RequestList">
            <q-item-section avatar>
              <q-icon name="border_color" />
            </q-item-section>

            <q-item-section> REQUEST UPDATE</q-item-section>
          </q-item>

         <!--  <q-item clickable v-ripple exact to="/PDS">
            <q-item-section avatar>
              <q-icon name="border_color" />
            </q-item-section>

            <q-item-section> PDS </q-item-section>
          </q-item> -->

          <q-item clickable v-ripple exact to="/Announcement">
            <q-item-section avatar>
              <q-icon name="campaign" />
            </q-item-section>

            <q-item-section> ANNOUNCEMENT </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        style="height: 200px; border-right: 1px solid #ddd"
      >
        <div
          class="absolute-bottom bg-transparent column items-center text-black"
        >
          <q-avatar size="100px" class="shadow-24">
            <q-img :src="imgurl" />
          </q-avatar>
          <div class="text-weight-bold q-mt-md">
            {{ store.userinfo[0].Firstname }}
            {{ store.userinfo[0].MIddlename }} {{ store.userinfo[0].Surname }}
          </div>
          <div>{{ store.controlno }}</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { useLoginStore } from "../stores/LoginStore";

export default defineComponent({
  name: "MainLayout",
  data: function () {
    return {
      drawer: "",
    };
  },
  mounted() {},
  methods: {},

  setup() {
    const store = useLoginStore();
    let imgurl = "";
    if (store.userinfo[0].Sex == "MALE") {
      imgurl = "../../public/imgs/male.png";
    } else {
      imgurl = "../../public/imgs/female.png";
    }

    if (store.pics) {
      imgurl = `http://10.0.1.23:82/Pics/${store.img}`;
    }
    // console.log("imgurl=",imgurl);
    return {
      store,
      imgurl,
    };
  },
});
</script>
