<template>
    <ul class="lj-menu"
        :class="{
      'lj-menu-horizontal': mode === 'horizontal',
      'lj-menu-dark': theme === 'dark'
    }"
    >
        <slot></slot>
    </ul>
</template>
<script>
    import emitter from '../../../mixins/emitter.js';

    export default {
        name: 'LjMenu',

        componentName: 'LjMenu',

        mixins: [emitter],

        props: {
            mode: {
                type: String,
                default: 'vertical'
            },
            defaultActive: {
                type: String,
                default: ''
            },
            theme: {
                type: String,
                default: 'light'
            },
            defaultOpeneds: Array,
            uniqueOpened: Boolean,
            router: Boolean,
            menuTrigger: {
                type: String,
                default: 'hover'
            },
        },
        data() {
            return {
                activedIndex: this.defaultActive,
                openedMenus: this.defaultOpeneds ? this.defaultOpeneds.slice(0) : [],
                items: {},
                submenus: {}
            };
        },
        watch: {
            defaultActive(value) {
                const item = this.items[value];
                if (item) {
                    this.activedIndex = item.index;
                    this.initOpenedMenu();
                } else {
                    this.activedIndex = '';
                }

            },
            defaultOpeneds(value) {
                this.openedMenus = value;
            }
        },
        methods: {
            addItem(item) {
                this.$set(this.items, item.index, item);
            },
            removeItem(item) {
                delete this.items[item.index];
            },
            addSubmenu(item) {
                this.$set(this.submenus, item.index, item);
            },
            removeSubmenu(item) {
                delete this.submenus[item.index];
            },
            openMenu(index, indexPath) {
                let openedMenus = this.openedMenus;
                if (openedMenus.indexOf(index) !== -1) return;
                if (this.uniqueOpened) {
                    this.openedMenus = openedMenus.filter(index => {
                        return indexPath.indexOf(index) !== -1;
                    });
                }
                this.openedMenus.push(index);
            },
            closeMenu(index) {
                this.openedMenus.splice(this.openedMenus.indexOf(index), 1);
            },
            handleSubmenuClick(submenu) {
                const { index, indexPath } = submenu;
                let isOpened = this.openedMenus.indexOf(index) !== -1;

                if (isOpened) {
                    this.closeMenu(index, indexPath);
                    this.$emit('close', index, indexPath);
                } else {
                    this.openMenu(index, indexPath);
                    this.$emit('open', index, indexPath);
                }
            },
            handleItemClick(item) {
                let { index, indexPath } = item;
                this.activedIndex = item.index;
                this.$emit('select', index, indexPath, item);

                if (this.mode === 'vertical') {
                    this.openedMenus = [];
                }

                if (this.router) {
                    this.routeToItem(item);
                }
            },
            initOpenedMenu() {
                const index = this.activedIndex;
                const activeItem = this.items[index];
                if (!activeItem || this.mode === 'vertical') return;

                let indexPath = activeItem.indexPath;

                indexPath.forEach(index => {
                    let submenu = this.submenus[index];
                    submenu && this.openMenu(index, submenu.indexPath);
                });
            },
            routeToItem(item) {
                let route = item.route || item.index;
                try {
                    this.$router.push(route);
                } catch (e) {
                    console.error(e);
                }
            },
        },
        mounted() {
            this.initOpenedMenu();
            this.$on('item-click', this.handleItemClick);
            this.$on('submenu-click', this.handleSubmenuClick);
        }
    };
</script>
