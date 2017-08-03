<template>
    <label class="lj-checkbox">
        <input type="checkbox" class="lj-checkbox-origin"
               v-model="model"
        >
        <span class="lj-checkbox-input"
              :class="{'is-checked':model}"
        ></span>
        <slot></slot>
    </label>
</template>
<script>
    export default{
        name:'LjCheckbox',
        componentName:'LjCheckbox',
        data(){
            return{
                model:''
            }
        },
    }
</script>