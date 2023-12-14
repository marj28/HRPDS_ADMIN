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
        path: "/RequestUpdate",
        component: () => import("pages/RequestUpdate.vue"),
      },
      {
        path: "/Announcement",
        component: () => import("pages/AnnouncementPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
