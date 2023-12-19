import { defineStore } from "pinia";
import axios from "axios";

export const useDashboardStore = defineStore("DashboardStore", {
  state: () => ({
    request:[],
    users:[],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async getrequest() {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.get(

        `http://10.0.1.23:82/HRPORTAL/admindashboard.php`
      )
      // console.log("data=",res.data);
      this.request=res.data.request;
      this.users=Object.values(res.data.users);
      // console.log("user users=",this.users);
    },
  },
});
