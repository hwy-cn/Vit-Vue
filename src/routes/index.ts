import { createMemoryHistory, createWebHistory, createRouter } from "vue-router";

import HelloWorld from "@/components/HelloWorld.vue";
import Home from "@/view/Home/index.vue";
import Resume from "@/view/Resume/index.vue";
import Layout from "@/components/Layout/index.vue";
const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/resume",
    component: Resume,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
