import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    { path: '/', component: ()=>import('../views/Home.vue') },
  ];

  const router = createRouter({
    history: createWebHistory(), // Use history mode for cleaner URLs (optional)
    routes,
  });

  export default router;