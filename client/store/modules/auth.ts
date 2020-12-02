import axios from "axios";

import {
    AUTH_LOGIN,
    AUTH_LOGOUT
} from "../actions/auth";

const api = "/"

const actions = {
    [AUTH_LOGIN]: user => {
        return new Promise((resolve, reject) => {
            axios
                .post(api + "auth", user)
                .then(res => {
                    commit("setStorage", res.data);
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    [AUTH_LOGOUT]: state => {
        console.log(state)
        // localStorage.removeItem("_secure__ls__metadata");
        // localStorage.removeItem("vuex");
    }
};

export default {
    state,
    setters,
    getters,
    actions,
    mutations
};
