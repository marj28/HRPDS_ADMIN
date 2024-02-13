import { defineStore } from "pinia";
import axios from "axios";

export const useUserInfoStore = defineStore("UserInfo", {
  state: () => ({
    degree: "",
    civilservice: [],
    workexp: [],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async getworkexp(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/servicerecord.php`,
        payload
      );
      // console.log("data=",res.data);
      this.WorkExp = "";
      this.workexp = res.data.WorkExp;
      //   console.log("userinfo=",this.degree);
    },
    async getcivilservice() {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.get(
        `http://10.0.1.23:82/HRPORTAL/civilservice.php`
      );
      //   console.log("data=",res.data);
      this.civilservice = res.data.civil;
      //   console.log("userinfo=",this.degree);
    },

    async educationdegree() {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.get(`http://10.0.1.23:82/HRPORTAL/degrees.php`);
      //   console.log("data=",res.data);
      this.degree = res.data.degrees;
      //   console.log("userinfo=",this.degree);
    },
    async saveTraining(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/saveupdatechild.php`,
        payload
      );
      // console.log("data=", res.data);
      //  this.degree=res.data.degrees;
      //   console.log("userinfo=",this.degree);
      if (res.data == "done") {
        return 1;
      } else if (res.date == "Duplicate") {
        return 2;
      } else {
        return 0;
      }
    },
    async saveOrganization(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/saveupdateOrganization.php`,
        payload
      );
      // console.log("data=", res.data);
      //  this.degree=res.data.degrees;
      //   console.log("userinfo=",this.degree);
      if (res.data == "done") {
        return 1;
      } else if (res.date == "Duplicate") {
        return 2;
      } else {
        return 0;
      }
    },
    async saveNonAcademic(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/saveupdateNonAcademic.php`,
        payload
      );
      // console.log("data=", res.data);
      //  this.degree=res.data.degrees;
      //   console.log("userinfo=",this.degree);
      if (res.data == "done") {
        return 1;
      } else if (res.date == "Duplicate") {
        return 2;
      } else {
        return 0;
      }
    },
    async saveSkills(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/saveupdateskills.php`,
        payload
      );
      // console.log("data=", res.data);
      //  this.degree=res.data.degrees;
      //   console.log("userinfo=",this.degree);
      if (res.data == "done") {
        return 1;
      } else if (res.date == "Duplicate") {
        return 2;
      } else {
        return 0;
      }
    },
    async saveVoluntary(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/saveupdateVoluntary.php`,
        payload
      );
      // console.log("data=", res.data);
      //  this.degree=res.data.degrees;
      //   console.log("userinfo=",this.degree);
      if (res.data == "done") {
        return 1;
      } else if (res.date == "Duplicate") {
        return 2;
      } else {
        return 0;
      }
    },
    async saveWorkExperience(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/saveupdateworkexperience.php`,
        payload
      );
      // console.log("data=", res.data);
      //  this.degree=res.data.degrees;
      //   console.log("userinfo=",this.degree);
      if (res.data == "done") {
        return 1;
      } else if (res.date == "Duplicate") {
        return 2;
      } else {
        return 0;
      }
    },
    async saveeducation(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/saveupdateeducation.php`,
        payload
      );
      console.log("data=", res.data);
      //  this.degree=res.data.degrees;
      //   console.log("userinfo=",this.degree);
      if (res.data == "done") {
        return 1;
      } else if (res.date == "Duplicate") {
        return 2;
      } else {
        return 0;
      }
    },
    async savechildren(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/saveupdatechild.php`,
        payload
      );
      console.log("data=", res.data);
      //  this.degree=res.data.degrees;
      //   console.log("userinfo=",this.degree);
      if (res.data == "done") {
        return 1;
      } else if (res.date == "Duplicate") {
        return 2;
      } else {
        return 0;
      }
    },
    async savecivilservice(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/saveupdatecivilservice.php`,
        payload
      );
      console.log("data=", res.data);
      //  this.degree=res.data.degrees;
      //   console.log("userinfo=",this.degree);
      if (res.data == "done") {
        return 1;
      } else if (res.date == "Duplicate") {
        return 2;
      } else {
        return 0;
      }
    },
    async savereference(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/saveupdateReference.php`,
        payload
      );
      // console.log("data=", res.data);
      //  this.degree=res.data.degrees;
      //   console.log("userinfo=",this.degree);
      if (res.data == "done") {
        return 1;
      } else if (res.date == "Duplicate") {
        return 2;
      } else {
        return 0;
      }
    },
    async savePic(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/saveupdatePic.php`,
        payload
      );
      // console.log("data=", res.data);
      //  this.degree=res.data.degrees;
      //   console.log("userinfo=",this.degree);
      if (res.data == "done") {
        return 1;
      } else if (res.date == "Duplicate") {
        return 2;
      } else {
        return 0;
      }
    },
  },
  persist: true,
});
