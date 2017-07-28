import Vue from 'vue'
import {LjButton, LjTag, LjMenu, LjMenuItem, LjMenuItemGroup, LjSubMenu, LjDialog,LjWatermark,LjInput} from '../src/index.js';
import demo from './demo.vue';
Vue.component(LjButton.name, LjButton);
Vue.component(LjTag.name, LjTag);
Vue.component(LjMenu.name, LjMenu);
Vue.component(LjMenuItem.name, LjMenuItem);
Vue.component(LjMenuItemGroup.name, LjMenuItemGroup);
Vue.component(LjSubMenu.name, LjSubMenu);
Vue.component(LjDialog.name, LjDialog);
Vue.component(LjWatermark.name, LjWatermark);
Vue.component(LjInput.name, LjInput);
new Vue({
    el: '#app',
    render: h => h(demo)
})


