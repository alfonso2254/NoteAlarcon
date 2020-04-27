const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Todos.vue") },
      { path: "/help", component: () => import("pages/Ayuda.vue") },
      { path: "/info", component: () => import("pages/Informacion.vue") }

    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
