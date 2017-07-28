<template>
  <li class="lj-menu-item-group">
    <div class="lj-menu-item-group_title" :style="{paddingLeft: levelPadding + 'px'}">
      <template v-if="!$slots.title">{{title}}</template>
      <slot v-else name="title"></slot>
    </div>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>
<script>
  export default {
    name: 'LjMenuItemGroup',

    componentName: 'LjMenuItemGroup',

    props: {
      title: {
        type: String
      }
    },
    data() {
      return {
        paddingLeft: 20
      };
    },
    computed: {
      levelPadding() {
        let padding = 10;
        let parent = this.$parent;
        while (parent && parent.$options.componentName !== 'LjMenu') {
          if (parent.$options.componentName === 'LjSubmenu') {
            padding += 20;
          }
          parent = parent.$parent;
        }
        padding === 10 && (padding = 20);
        return padding;
      }
    }
  };
</script>

