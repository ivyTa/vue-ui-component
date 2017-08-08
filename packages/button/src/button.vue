<template>
    <button :disabled="disabled" class="lj-button"
            @click="handleClick"
            :type="nativeType"
            :class="[
                type ? 'lj-button-' + type : '',
                {
                    'is-disabled': disabled,
                }
            ]"
    >
        <slot></slot>
    </button>

</template>
<script>
    export default{
        name: 'LjButton',
        componentName:'LjButton',
        props: {
            type: {
                type: String,
                default: 'default',
            },
            nativeType: {
                type: String,
                default: 'button'
            },
            disabled: Boolean,
        },
        methods:{
            handleClick(event){
                this.$emit('click',event);
            }
        }

    }
</script>