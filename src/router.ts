// Init router
import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./components/HomeView.vue";
import WeatherView from "./components/WeatherView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/weather", component: WeatherView },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
