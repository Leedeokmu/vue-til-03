import Vue from "vue";
import VueRouter from "vue-router";
import ItemView from "@/views/ItemView";
import UserView from "@/views/UserView";
import createListView from "@/views/CreateListView";
import bus from "@/utils/bus";
import store from "@/store"

Vue.use(VueRouter);
export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news',
            name: 'news',
            component: createListView('NewsView'),
            beforeEnter(to, from, next) {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => next())

            }
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView'),
            beforeEnter(to, from, next) {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => next())

            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobsView'),
            beforeEnter(to, from, next) {
                bus.$emit('start:spinner');
                store.dispatch('FETCH_LIST', to.name)
                    .then(() => next())

            }
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
             path: '/item/:id',
            component: ItemView,
        },
    ]
});