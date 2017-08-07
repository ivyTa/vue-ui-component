<template>
    <label class="lj-checkbox">
        <input type="checkbox" class="lj-checkbox-origin"
               v-model="model"
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
        data(){
            return{
                model:'',
                checkOptions:[],
            }
        },
        created() {
            this.model && this.addToStore();
        },
        computed:{
            isChecked() {
                return this.checkOptions.includes(this.model)>>>0;
            },
        },
        methods:{
            addToStore() {
                if (
                    Array.isArray(this.checkOptions) &&
                    this.checkOptions.indexOf(this.model) === -1
                ) {
                    this.checkOptions.push(this.model);
                } else {
                    this.checkOptions = this.model || true;
                }
            },
        },
    }
</script>