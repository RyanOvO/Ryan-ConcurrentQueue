<template>
    <div id="steps">
        <!-- <my-steps></my-steps> -->
        <mysteps :config="stepConfig"></mysteps>
    </div>
</template>

<script>
import mysteps from '@/components/modules/modals/steps-modal.vue'

export default {
    data(){
        return{
            multiCheck:false,
            res: ''
        }
    },
    computed:{
        stepConfig(){
            let step = 2
            let status = "reject"
            let title = 'slot插槽填充 title'
            let description = 'slot插槽填充 description'

            return {
                step,
                status,
                title,
                description
            }
        }
    },
    create(){
        this.res = 'C# $语法糖'
    },
    mounted(){
        console.log(this.res)
        let s = `${this.res}`
        console.log(s)
    },
    components:{
        mysteps
    }
}
</script>



