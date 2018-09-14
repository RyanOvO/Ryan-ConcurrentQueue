<template>
    <button v-on:click="increment">{{ counter }}</button>
</template>

<script>
export default {
    data(){
        return {
            counter: 0
        }
    },
    methods: {
        increment(){
            this.counter += 1
            this.$emit('increment1', [12, 'sss'])
        }
    }
}
</script>

<style>

</style>
