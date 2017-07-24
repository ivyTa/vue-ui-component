<template>
<ul class="lj-menu">
    <li class="lj-menu-item"
        :style="paddingStyle"
        @click="handleClick"
        :class="{
      'is-active': active,
      'is-disabled': disabled
    }">
        <slot></slot>
    </li>
</ul>
</template>
<script>
export default{
    name:'LjMenu',
    props:{

    },
    methods:{
        handleClick(event){
            this.$emit('click',event);
        }
    }

}
</script>