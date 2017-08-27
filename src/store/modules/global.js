/**
 * Created by codoon on 16/12/1.
**/
import api from '../../assets/script/api';
import { Toast } from 'mint-ui';
import {
    GLOBAL_LOADING,
    GLOBAL_INDICATOR,
    GLOBAL_TOAST,
    CHANGE_USERINFO
} from '../mutation-types' ;

/*****************************分割线******************************/
const state = {
    loading: true,
    indicatorTime: null,
    toastMsg: '',
    userInfo: {}
};
/*****************************分割线******************************/
// actions
const actions = {
    loadHide({commit}, isLoad) {
        commit(GLOBAL_LOADING, isLoad);
    },

    globalToast({commit}, msg){
        commit(GLOBAL_TOAST, msg);
    },

    getUserInfoFromSever({commit}, params) {
        api.getUserInfo(params).then( data => {
            commit('CHANGE_USERINFO', data);
        })
    }
};
/*****************************分割线******************************/
// mutations
const mutations = {
    [GLOBAL_LOADING](state, status){
        state.loading = status;
    },

    [GLOBAL_TOAST](state, msg) {
        if(typeof msg != 'string' || msg.length < 1){
            return false;
        }
        state.toastMsg = msg;
        Toast({
            message: msg,
            duration: 2000
        });
    },

    [CHANGE_USERINFO] (state, data){
        state.userInfo = Object.assign({}, state.userInfo, data && data.data);
    }
};
/*****************************分割线******************************/
// getters
const getters = {
    loadStatus(state) {
        return state.loading;
    },

    indicatorTime(state) {
        return state.indicatorTime;
    },

    userInfo(state) {
        return state.userInfo
    }
};
/*****************************分割线******************************/
export default{
    state,
    actions,
    mutations,
    getters
}
