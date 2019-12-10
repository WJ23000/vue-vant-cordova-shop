import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let store = new Vuex.Store({
    // 1. state
    state:{
        isLogin: localStorage.getItem("isLogin"),
        evaluList: ""
    },

    // 2. getters(此处方法给其他页面提供用户数据)
    getters:{
        // 参数列表state指的是state数据
        getLoginFn(state){
            return state.isLogin;
        },
        getEvaluListFn(state) {
            return state.evaluList;
        }
    },
    // 3. actions
    // 通常跟api接口打交道(此处方法给其他页面提供数据返回用户数据)
    actions:{
        // 设置评论
        // 参数列表：{commit, state}
        // state指的是state数据
        // commit调用mutations的方法 
        // name就是调用此方法时要传的参数
        setLoginFn({commit,state}, name){
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("setLogin", name);
        },
        setEvaluListFn({ commit, state }, name) {
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("setEvaluList", name);
        },
    },
    // 4. mutations
    mutations:{
        // state指的是state的数据
        // name传递过来的数据
        setLogin(state, name){
            state.isLogin = name;//将传参设置给state的user
            localStorage.setItem("isLogin",name);
        },
        setEvaluList(state, name) {
            state.evaluList = name;//将传参设置给state的user
        }
    }
});

export default store;



/**
 * 备注：
 *      vuex使用方法参照EvaluList.vue页面
 */