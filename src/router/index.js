import { createRouter, createWebHistory } from "vue-router";

// Import your views
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import ShopView from "../views/ShopView.vue";
import ChairsView from "../views/shop/ChairsView.vue";
import DesksView from "../views/shop/DesksView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/shop",
    name: "Shop",
    component: ShopView,
    children: [
      {
        path: "desks",
        name: "Desks",
        component: DesksView,
      },
      {
        path: "chairs",
        name: "Chairs",
        component: ChairsView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
