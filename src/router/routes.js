const routes = [
  {
    path: "/",
    component: () => import("layouts/Login.vue"),
    // children: [
    //   { path: '', component: () => import('pages/IndexPage.vue') }
    // ]
  },

  {
    path: "/Dashboard",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/DashboardPage.vue") },

      {
        path: "/RequestList",
        component: () => import("pages/RequestList.vue"),
      },
      {
        path: "/Announcement",
        component: () => import("pages/AnnouncementPage.vue"),
      },

      {
        path: "/AccountList",
        component: () => import("pages/AccountList.vue"),
      },

      {
        path: "/LibaRies",
        component: () => import("pages/LibaRies.vue"),
      },

      { path: "/PDS", component: () => import("pages/PDS.vue") },

      {
        path: "/RequestUpdate/:controlNo",
        name: "RequestUpdate",
        component: () => import("pages/RequestUpdate.vue"),
        props: true, // Adjust the path based on your project structure
      },
      {
        path: "/SampleCodes",
        name: "SampleCodes",
        component: () => import("pages/SampleCodes.vue"),
        // children: [
        //   { path: '', component: () => import('pages/IndexPage.vue') }
        // ]
      },

      {
        path: "/CreateAccount",
        component: () => import("pages/CreateAccount.vue"),
      },
    ],
  },
  { path: "/printpds", component: () => import("pages/PrintLayout.vue") },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
