<template>
  <li
    :class="{
      'lj-submenu': true,
      'is-active': active,
      'is-opened': opened
    }"
  >
    <div class="lj-submenu_title" ref="submenu-title" :style="paddingStyle">
      <slot name="title"></slot>
      <!--<i :class="{-->
        <!--'lj-submenu_icon-arrow': true,-->
        <!--'lj-icon-arrow-down': rootMenu.mode === 'vertical',-->
        <!--'lj-icon-caret-bottom': rootMenu.mode === 'horizontal'-->
      <!--}">-->
      <!--</i>-->
    </div>
    <template v-if="rootMenu.mode === 'horizontal'">
      <transition name="lj-zoom-in-top">
        <ul class="lj-menu" v-show="opened"><slot></slot></ul>
      </transition>
    </template>
    <lj-collapse-transition v-else>
      <ul class="lj-menu" v-show="opened"><slot></slot></ul>
    </lj-collapse-transition>
  </li>
</template>
<script>
  import LjCollapseTransition from '../../../transitions/collapse-transition';
  import menuMixin from './menu-mixin';
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'LjSubmenu',

    componentName: 'LjSubmenu',

    mixins: [menuMixin, Emitter],

    components: { LjCollapseTransition },

    props: {
      index: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        timeout: null,
        items: {},
        submenus: {}
      };
    },
    computed: {
      opened() {
        return this.rootMenu.openedMenus.indexOf(this.index) > -1;
      },
      active: {
        cache: false,
        get() {
          let isActive = false;
          const submenus = this.submenus;
          const items = this.items;

          Object.keys(items).forEach(index => {
            if (items[index].active) {
              isActive = true;
            }
          });

          Object.keys(submenus).forEach(index => {
            if (submenus[index].active) {
              isActive = true;
            }
          });

          return isActive;
        }
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
      handleClick() {
        this.dispatch('LjMenu', 'submenu-click', this);
      },
      handleMouseenter() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.rootMenu.openMenu(this.index, this.indexPath);
        }, 300);
      },
      handleMouseleave() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.rootMenu.closeMenu(this.index, this.indexPath);
        }, 300);
      },
      initEvents() {
        let {
          rootMenu,
          handleMouseenter,
          handleMouseleave,
          handleClick
        } = this;
        let triggerLjm;

        if (rootMenu.mode === 'horizontal' && rootMenu.menuTrigger === 'hover') {
          triggerLjm = this.$el;
          triggerLjm.addEventListener('mouseenter', handleMouseenter);
          triggerLjm.addEventListener('mouseleave', handleMouseleave);
        } else {
          triggerLjm = this.$refs['submenu-title'];
          triggerLjm.addEventListener('click', handleClick);
        }
      }
    },
    created() {
      this.parentMenu.addSubmenu(this);
      this.rootMenu.addSubmenu(this);
    },
    beforeDestroy() {
      this.parentMenu.removeSubmenu(this);
      this.rootMenu.removeSubmenu(this);
    },
    mounted() {
      this.initEvents();
    }
  };
</script>
