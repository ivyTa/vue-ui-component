import LjButton from '../packages/button/index';
import LjTag from '../packages/tag/index';
import {LjMenu, LjMenuItem, LjMenuItemGroup, LjSubMenu} from '../packages/menu/index';
import LjDialog from '../packages/dialog/index';
import LjWatermark from '../packages/watermark/index';
import LjInput from '../packages/input/index';
import LjRadio from '../packages/radio/index';
import LjCheckbox from '../packages/checkbox/index';
import LjToast from '../packages/toast/index';
import LjSelect from '../packages/select/index';

const components = [
    LjButton,
    LjTag,
    LjMenu,
    LjMenuItem,
    LjMenuItemGroup,
    LjSubMenu,
    LjDialog,
    LjWatermark,
    LjInput,
    LjRadio,
    LjCheckbox,
    LjToast,
    LjSelect,
];

const install = function (Vue) {
    if (install.installed) return;
    components.map(component => {
        Vue.component(component.name, component);
    });
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
;
export  {
    LjButton,
    LjTag,
    LjMenu,
    LjMenuItem,
    LjMenuItemGroup,
    LjSubMenu,
    LjDialog,
    LjWatermark,
    LjInput,
    LjRadio,
    LjCheckbox,
    LjToast,
    LjSelect,
};