import {createWebHistory, createRouter} from "vue-router";
import Top from "@/components/Top.vue";
import Doughnut from "@/components/Doughnut.vue";

const routes = [
    {
        path: "/",
        name: "Top",
        component: Top,
        children: [
            {
                path: "doughnut",
                name: "Doughnut",
                component: Doughnut
            }
        ]
    }
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
