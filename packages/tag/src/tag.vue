<template>
<span
        class="lj-tag"
        :class="[
       type ? 'lj-tag-' + type : '',
       ]"
>
     <slot></slot>

</span>
</template>
<script>
    export default{
        name: 'LjTag',
        componentName: 'LjTag',
        props: {
            type: String,
        }
    }
</script>