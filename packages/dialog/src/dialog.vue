<template>
    <transition name="dialog-fade">
        <div class="lj-dialog-wrapper" v-show="visible"  @click.self="handleWrapperClick">
            <div
                    class="lj-dialog"
                    :class="[sizeClass,customClass]"
                    ref="" dialog
                    :style="style">
                <div class="lj-dialog-header">
                    <slot name="title">
                        <span class="lj-dialog-title">{{title}}</span>
                    </slot>
                </div>
                <div class="lj-dialog-body" v-if="rendered">
                    <slot></slot>
                </div>
                <div class="lj-dialog-footer" v-if="$slots.footer">
                    <slot name="footer">
                    </slot>
                </div>

            </div>
        </div>
    </transition>
</template>

<script>
    import Popup from '../../../utils/popup';
    import emitter from '../../../mixins/emitter.js';
    export default{
        name: 'LjDialog',
        mixins:[Popup,emitter],
        props:{
            title:{
                type:String,
                default:'',
            },
            modal:{
                type:Boolean,
                default:true,
            },
            modalAppendToBody: {
                type: Boolean,
                default: true
            },

            lockScroll: {
                type: Boolean,
                default: true
            },

            closeOnClickModal: {
                type: Boolean,
                default: true
            },

            closeOnPressEscape: {
                type: Boolean,
                default: true
            },

            showClose: {
                type: Boolean,
                default: true
            },

            size: {
                type: String,
                default: 'small'
            },

            customClass: {
                type: String,
                default: ''
            },

            top: {
                type: String,
                default: '15%'
            },
            beforeClose: Function

        },
        computed:{
            sizeClass(){
                return `lj-dialog-${this.size}`;
            },
            style(){
                return this.size === 'full' ? {} : {'top' : this.top};
            },
        },

        methods:{
            handleWrapperClick(){
                if(!this.closeOnClickModal) return;
                this.handleClose();
            },
            handleClose(){
                if(typeof this.beforeClose === 'function'){
                    this.beforeClose(this.hide);
                }else{
                    this.hide();
                }
            },
            hide(cancel){
                if(cancel !== false){
                    this.$emit('update:visible',false);
                    this.$emit('visible-change',false);
                }
            },
            updatePopper(){
                this.broadcast('LjSelectDropdown','updatePopper');
                this.broadcast('LjDropdownMenu','updatePopper');
            },
        },
        mounted(){
            if(this.visible){
                this.rendered = true;
                this.open();
            }
        },
    }
</script>