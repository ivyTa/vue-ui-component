import LjToast from './src/toast.vue';

LjToast.install = function (Vue) {
    Vue.component(LjToast.name,LjToast);
}

export default LjToast;