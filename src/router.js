import {createWebHistory, createRouter} from "vue-router";
// import Top from "@/components/Top.vue";
import Doughnut from "@/components/Doughnut.vue";
import IllustMaskDiagonalLine from "@/components/IllustMaskDiagonalLine.vue";

const routes = [
    {
        path: "/doughnut",
        name: "Doughnut",
        component: Doughnut
    },
    {
        path: "/illustMaskDL",
        name: "IllustMaskDiagonalLine",
        component: IllustMaskDiagonalLine
    }
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
