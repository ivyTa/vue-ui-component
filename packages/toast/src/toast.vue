<template>
    <div class="lj-toast"
         :class="[
       type ? 'lj-toast-' + type : '',
       ]"
    >
        <i class="loading" v-show="type == 'image-text'"></i>
        <p class="tips">
            <slot></slot>
        </p>
    </div>
</template>
<script>
    export default{
        name: 'LjToast',
        componentName: 'LjToast',
        props: {
            type: String,
            default:'text',
        }
    }
</script>