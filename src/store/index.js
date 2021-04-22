import Vue from "vue";
import Vuex from "vuex"
import mutations from "@/store/mutations";
import actions from "@/store/actions";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {},
        item: {},
        list: [],
    },
    getters:{
        fetchedAsks(state){
            return state.asks
        },
        fetchedItem(state){
            return state.item;
        },
        fetchedUser(state){
            return state.user;
        }
    },
    mutations,
    actions
})