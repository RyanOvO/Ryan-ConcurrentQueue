<template>
    <div id="count-event-example">
        <p>{{total}}</p>
        <button-counter @increment1="incrementTotal"></button-counter>
    </div>
</template>

<script>
import buttonCounter from '@/components/modules/modals/emit-model'
export default {
    data(){
        return {
            total: 0
        }
    },
    methods:{
        incrementTotal(e){
            this.total += 1
            console.log(e)
        }
    },
    components:{
        buttonCounter
    }
}
</script>

