<template>
    <div :disabled="disabled" class="lj-button"
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
    </div>

</template>
<script>
    export default{
        name: 'LjButton',
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