import { defineStore } from "pinia";
import axios from "axios";

export const useLoginStore = defineStore("LoginStore", {
  state: () => ({
    controlno: "",
    userinfo: [],
    usereducation: [],
    userexperience: [],
    usereligibility: [],
    uservoluntary: [],
    usertraining: [],
    userskills: [],
    useracademic: [],
    userorganization: [],
    userreference: [],
    pics: false,
    img: "",
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    async userlogin(payload) {
      // `http://10.0.1.23:82/HRPORTAL/login.php`
      let res = await axios.post(
        `http://10.0.1.23:82/HRPORTAL/loginadmin.php`,
        payload
      );
      // console.log("data=",res.data);
      if (res.data["auth"] == "failed") return 0;
      if (res.data["auth"] == "none") return 2;
      if (res.data["auth"] == "inactive") return 3;
      if (res.data["auth"] == undefined) return 0;
      this.controlno = res.data.controlno;
      this.userinfo = res.data.User;
      this.pics = res.data.pics;
      this.usereducation = res.data.Education;
      this.userexperience = res.data.Experience;
      this.usereligibility = res.data.Eligibility;
      this.uservoluntary = res.data.Voluntary;
      this.usertraining = res.data.Training;
      this.userskills = res.data.Skills;
      this.useracademic = res.data.Academic;
      this.userorganization = res.data.Organization;
      this.userreference = res.data.Reference;
      this.img = res.data.img;
      // console.log("userinfo=",res.data);
      return 1;
    },
  },
  persist: true,
});
