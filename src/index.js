import LjButton from '../packages/button/index';
import LjTag from '../packages/tag/index';
import {LjMenu, LjMenuItem, LjMenuItemGroup, LjSubMenu} from '../packages/menu/index';
import LjDialog from '../packages/dialog/index';
import LjWatermark from '../packages/watermark/index';

const components = [
    LjButton,
    LjTag,
    LjMenu,
    LjMenuItem,
    LjMenuItemGroup,
    LjSubMenu,
    LjDialog,
    LjWatermark,
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
    LjMenu,
    LjMenuItem,
    LjMenuItemGroup,
    LjSubMenu,
    LjDialog,
    LjWatermark,
};