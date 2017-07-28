import LjDialog from './src/dialog.vue';

LjDialog.install = function (Vue) {
    Vue.component(LjDialog.name, LjDialog);
}

export default LjDialog;