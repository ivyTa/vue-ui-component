import Vue from 'vue'
import {LjButton, LjTag, LjMenu, LjMenuItem, LjMenuItemGroup, LjSubMenu, LjDialog,LjWatermark} from '../src/index.js';
import demo from './demo.vue';
Vue.component(LjButton.name, LjButton);
Vue.component(LjTag.name, LjTag);
Vue.component(LjMenu.name, LjMenu);
Vue.component(LjMenuItem.name, LjMenuItem);
Vue.component(LjMenuItemGroup.name, LjMenuItemGroup);
Vue.component(LjSubMenu.name, LjSubMenu);
Vue.component(LjDialog.name, LjDialog);
Vue.component(LjWatermark.name, LjWatermark);
new Vue({
    el: '#app',
    render: h => h(demo)
})


