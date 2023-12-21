import { defineStore } from "pinia";
import axios from "axios";

export const useDashboardStore = defineStore("DashboardStore", {
  state: () => ({
    request:[],
    users:[],
    announcements:[],
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
    async getannouncements() {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.get(

        `http://10.0.1.23:82/HRPORTAL/announcement.php`
      )
      this.announcements=res.data.announcement;
      // console.log("data=",res.data);
      // this.request=res.data.request;
      // this.users=Object.values(res.data.users);
      // console.log("user users=",this.users);
    },
    async saveannouncements(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(

        `http://10.0.1.23:82/HRPORTAL/saveannouncement.php`,
        payload
      )
      if(res.data == "duplicate"){
        return 1;
      }else{
        return 0;
      }
      // console.log("data=",res.data);
      // this.request=res.data.request;
      // this.users=Object.values(res.data.users);
      // console.log("user users=",this.users);
    },
  },
});