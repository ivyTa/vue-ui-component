import LjMenu from './src/meny.vue';

LjMenu.install = function (Vue) {
    Vue.component(LjMenu.name,LjMenu);
}

export default LjMenu;