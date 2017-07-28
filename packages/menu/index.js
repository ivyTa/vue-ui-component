import LjMenu from './src/menu.vue';
import LjMenuItem from './src/menu-item.vue';
import LjMenuItemGroup from './src/menu-item-group.vue';
import LjSubMenu from './src/submenu.vue';

LjMenu.install = function (Vue) {
    Vue.component(LjMenu.name, LjMenu);
}

LjMenuItem.install = function (Vue) {
    Vue.component(LjMenuItem.name, LjMenuItem);
}

LjMenuItemGroup.install = function (Vue) {
    Vue.component(LjMenuItemGroup.name, LjMenuItemGroup);
}

LjSubMenu.install = function (Vue) {
    Vue.component(LjSubMenu.name, LjSubMenu);
}

export {LjMenu, LjMenuItem, LjMenuItemGroup, LjSubMenu};