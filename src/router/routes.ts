import VueRouter, { RouteConfig } from "vue-router";
import Top from "../views/Top.vue";
import Biography from "../views/Biography.vue";
import Works from "../views/Works.vue";
import Skills from "../views/Skills.vue";


const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Top",
    component: Top,
  },
  {
    path: "/biography",
    name: "Biography",
    component: Biography,
  },
  {
    path: "/works",
    name: "Works",
    component: Works,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
];

export default routes;
