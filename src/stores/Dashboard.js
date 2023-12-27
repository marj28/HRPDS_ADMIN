import { defineStore } from "pinia";
import axios from "axios";

export const useDashboardStore = defineStore("DashboardStore", {
  state: () => ({
    request:[],
    users:[],
    announcements:[],
    userrequest:[],
    userinfo:[],
    img:'',
    images:[]
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async getrequest() {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.get(

        `http://10.0.1.23:82/HRPORTAL/admindashboard.php`
      );

      this.request = res.data.request;
      this.users = Object.values(res.data.users);

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

    },
    async getuserinfo(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(

        `http://10.0.1.23:82/HRPORTAL/adminrequest.php`,
        payload
      )
      console.log("data userinfo=",res.data);

      // this.request=res.data.request;
      // this.users=Object.values(res.data.users);
      // console.log("user users=",this.users);
      this.userinfo=res.data.User;
      this.img = res.data.img;

    },
    async getsinglerequest(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(

        `http://10.0.1.23:82/HRPORTAL/requests.php`,
        payload
      )
      console.log("data=",res.data);
      // this.request=res.data.request;
      // this.users=Object.values(res.data.users);
      // console.log("user users=",this.users);
      this.userrequest=res.data.request;
    },
    async getimg(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/sessionimg.php`,
        payload
      );
      // console.log("data=",res.data);\

        this.images=res.data.img;

      //   console.log("userinfo=",this.degree);
    },
    async accept(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/acceptedrequest.php`,
        payload
      );
      console.log("accepteddata=",res.data);



      //   console.log("userinfo=",this.degree);
    },
    async reject(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/rejectedrequest.php`,
        payload
      );
      console.log("reject=",res.data);



      //   console.log("userinfo=",this.degree);
    },

  },
});
