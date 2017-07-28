import LjWatermark from './src/watermark.vue';

LjWatermark.install = function (Vue) {
    Vue.component(LjWatermark.name,LjWatermark);
}

export default LjWatermark;