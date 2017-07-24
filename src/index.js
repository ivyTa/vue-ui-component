import LjButton from '../packages/button/index.js';
import LjTag from '../packages/tag/index.js';

const components = [
    LjButton,
    LjTag,
];

const install = function (Vue) {
    if (install.installed) return;
    components.map(component => {
        Vue.component(component.name, component);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};
export  {
    LjButton,
    LjTag,
};