import { defineStore } from "pinia";
import axios from "axios";

export const useRequestStore = defineStore("Request", {
  state: () => ({
    request: [],
    requestChild: [],
    requestCivilService: [],
    requestEducation: [],
    requestTrainings: [],
    requestWorkExperience: [],
    requestNonAcademic: [],
    requestSkills: [],
    requestOrganization: [],
    requestVoluntary: [],
    images: [],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async getrequest(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/requests.php`,
        payload
      );
      // console.log("data=",res.data);\

      this.request = res.data.request;
      this.requestChild = res.data.Child;
      this.requestCivilService = res.data.Civilservice;
      this.requestEducation = res.data.Education;
      this.requestTrainings = res.data.Trainings;
      this.requestWorkExperience = res.data.WorkExperience;
      this.requestNonAcademic = res.data.NonAcademic;
      this.requestSkills = res.data.Skills;
      this.requestOrganization = res.data.Organization;
      this.requestVoluntary = res.data.Voluntary;
      //   console.log("userinfo=",this.degree);
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
  },
});
