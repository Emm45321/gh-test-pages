import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    { path: '/deploy-test/', component: ()=>import('../views/Home.vue') },
    { path: '/deploy-test/caroverview', component: ()=>import('../views/CarOverview.vue')},
  ];

  const router = createRouter({
    history: createWebHistory(), // Use history mode for cleaner URLs (optional)
    routes,
  });

  export default router;