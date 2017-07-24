import LjButton from './src/button.vue';

LjButton.install = function (Vue) {
    Vue.component(LjButton.name, LjButton);
}

export default LjButton;