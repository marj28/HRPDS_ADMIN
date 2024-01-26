import { defineStore } from "pinia";
import axios from "axios";

export const useDashboardStore = defineStore("DashboardStore", {
  state: () => ({
    request: [],
    users: [],
    usereducation: [],
    announcements: [],
    userrequest: [],
    requestChild: [],
    requestEduc_Background: [],
    requestCivil_service_Eligibility: [],
    requestwork_experience: [],
    requestVoluntary_Work: [],
    requestLearning_And_Development: [],
    requestskills: [],
    requestNon_Academic: [],
    request_Organization: [],
    requestReference: [],
    requestPic: [],
    userinfo: [],
    img: "",
    images: [],
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
      );
      this.announcements = res.data.announcement;
    },
    async saveannouncements(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`

      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/saveannouncement.php`,
        payload
      );
      console.log("Res Data", res.data);
      if (res.data == "duplicate") {
        return 1;
      } else {
        return 0;
      }
    },
    async getuserinfo(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/adminrequest.php`,
        payload
      );
      console.log("data userinfo=", res.data);

      // this.request=res.data.request;
      // this.users=Object.values(res.data.users);
      // console.log("user users=",this.users);

      this.userinfo = res.data.User;
      this.usereducation = res.data.Education;
      this.usereligibility = res.data.Eligibility;
      this.userexperience = res.data.Experience;
      this.uservoluntary = res.data.Voluntary;
      this.usertraining = res.data.Training;
      this.userskills = res.data.Skills;
      this.userreference = res.data.Reference;

      this.img = res.data.img;
    },
    async getsinglerequest(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/requests.php`,
        payload
      );
      console.log("data=", res.data);
      // this.request=res.data.request;
      // this.users=Object.values(res.data.users);
      // console.log("user users=",this.users);
      this.userrequest = res.data.request;
      this.requestChild = res.data.Child;
      this.requestEduc_Background = res.data.Education;
      this.requestCivil_service_Eligibility = res.data.Civilservice;
      this.requestwork_experience = res.data.WorkExperience;
      this.requestVoluntary_Work = res.data.Voluntary;
      this.requestLearning_And_Development = res.data.Trainings;
      this.requestskills = res.data.Skills;
      this.requestNon_Academic = res.data.NonAcademic;
      this.request_Organization = res.data.Organization;
      this.requestReference = res.data.Reference;
      this.requestPic = res.data.Pic;
    },
    async getimg(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/sessionimg.php`,
        payload
      );
      // console.log("data=",res.data);\

      this.images = res.data.img;

      //   console.log("userinfo=",this.degree);
    },
    async accept(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/acceptedrequest.php`,
        payload
      );
      console.log("accepteddata=", res.data);

      //   console.log("userinfo=",this.degree);
    },
    async reject(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/rejectedrequest.php`,
        payload
      );
      console.log("reject=", res.data);

      //   console.log("userinfo=",this.degree);
    },
  },
});
