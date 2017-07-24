import Vue from 'vue'
import {LjButton,LjTag} from '../src/index.js';
import demo from './demo.vue';
Vue.component(LjButton.name, LjButton);
Vue.component(LjTag.name, LjTag);
new Vue({
    el: '#app',
    render: h => h(demo)
})


