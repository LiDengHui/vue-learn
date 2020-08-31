<template>
    <div class="domain">
        <h2>Parent</h2>
        <div>

            name:{{name}}
            <el-input v-model="value" @input="$emit('change',value)"></el-input>

            name1:{{name1}}
            <el-input v-model="value1" @input="$emit('update:name1',value1)"></el-input>

            name2:{{name2}}
            <el-input v-model="value2"></el-input>

            {{ model.name }}
            <el-input v-model="model.name"></el-input>
        </div>
        <Child></Child>
        <h2>slot</h2>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts">

    import {Vue, Component, ProvideReactive, Model, PropSync, Prop} from "vue-property-decorator";
    import Child from './Child.vue'

    @Component({
        components: {
            Child
        }
    })
    export default class Parent extends Vue {

        @Model('change', {type: String})
        private name!: string;

        private value = this.name;

        @Prop()
        private name1?: string;

        private value1 = this.name1;

        @PropSync('name2')
        private value2?: string;

        @ProvideReactive()
        model = {
            name: 'zhangshan'
        }

    }
</script>