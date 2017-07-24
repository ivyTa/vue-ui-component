import Vue from 'vue'
import Element from 'element-ui'
import demo from './demo.vue';
Vue.use(Element)
new Vue({
    el: '#app',
    render: h => h(demo)
})


