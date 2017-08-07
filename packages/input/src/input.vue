<template>
    <li class="lj-input-li">
        <span class="lj-input-title"><slot></slot></span>
        <input class="lj-input" type="text" :placeholder="holder" v-model="inputValue">
    </li>
</template>
<script>
    export default{
        name:'LjInput',
        componentName:'LjInput',
        data(){
            return{
                inputValue:'',
            }
        },
        props:{
            holder:{
                type:String,
                default:'请输入',
            },

        },
    }
</script>