import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "Home",
        component: () =>
            import(/* webpackChunkName: "home" */ "../views/Home.vue")
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/hooks",
        name: "Hooks",
        component: () =>
            import(/* webpackChunkName: "hooks" */ "../views/Hooks.vue")
    },
    {
        path: "/hoc",
        name: "Hoc",
        component: () =>
            import(/* webpackChunkName: "hoc" */ "../views/Hoc.vue")
    }
];

const router = new VueRouter({
    //mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;