<template>
    <div class="multi-steps">
        <el-steps align-center :active="config.step">
            <el-step>
                <i slot="icon" class="el-icon-success"></i>
                <span slot="title">
                    标题1
                </span>
                <span slot="description">
                    <span>描述1</span>
                </span>
            </el-step>
            <el-step>
                <i v-if="config.status === 'reject'" slot="icon" class="el-icon-error step-icon" style="color: red; border:0px"></i>
                <i v-else class="el-icon-success" slot="icon"></i>
                <span slot="title">
                    <span style="color:red">{{config.title}}</span>
                </span>
                <span slot="description">
                    <span style="color:red">{{config.description}}</span>
                </span>
            </el-step>
            <el-step>
                <i slot="icon" class="el-icon-success"></i>
                <span slot="title">
                    标题3
                </span>
                <span slot="description">
                    <span>描述3</span>
                </span>
            </el-step>
        </el-steps>
    </div>
</template>

<script>
import ElementUI from 'element-ui'
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
export default {
    data(){
        return{
            
        }
    },
    props: {
        config:{
            type: Object,
            default: {
                step: 0,
                status: 'finish',
                title:'',
                description:''
            }
        }
    }
}
</script>

