<template>
  <li class="lj-menu-item-group">
    <div class="lj-menu-item-group_title">
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
  };
</script>

