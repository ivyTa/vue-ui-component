<template>
    <label class="lj-checkbox">
        <input type="checkbox" class="lj-checkbox-origin"
               :value="label" :name="name" v-model="checks"
        >
        <span class="lj-checkbox-input"
              :class="{'is-checked':isChecked}"
        ></span>
        <slot></slot>
    </label>
</template>
<script>
    export default{
        name:'LjCheckbox',
        componentName:'LjCheckbox',
        props:{
            label:String,
            name: String,
            checks:Array
        },
        computed: {
            isChecked(){
                return this.checks.includes(this.label)>>>0;
            },
        },
    }
</script>