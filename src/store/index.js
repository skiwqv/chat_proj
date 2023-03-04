import Vue from "vue";
import Vuex from 'vuex'
import user from "./user";
import profile from "./profile";
import chat from "./chat"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user, profile,chat
    }
})