<template>
    <label class="lj-radio">
        <input type="radio" class="lj-radio-origin"
               v-model="model"
               :name="name"
               :value="label"
        >
        <span class="lj-radio-input"
              :class="{'is-checked':model === label,'is-circle':type ==='circle'}"
        ></span>
        <slot></slot>
    </label>
</template>
<script>
    export default{
        name:'LjRadio',
        componentName:'LjRadio',
        props:{
            value: {},
            label: {},
            name:'',
            type:{
                type:String,
                default:'circle',
            },
        },
        computed:{
            model:{
                get(){
                    return this.value;
                },
                set(val){
                    this.$emit('input',val);
                }
            }
        }
    }
</script>