import {createWebHistory, createRouter} from "vue-router";
import Top from "@/components/Top.vue";
// import Doughnut from "@/components/Doughnut.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Top
    }
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
