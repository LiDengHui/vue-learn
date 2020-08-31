<template>
    <div class="about">
        <Parent v-model="test" :name1.sync="name1" :name2.sync="name2">
            <GrandSon></GrandSon>
        </Parent>
    </div>
</template>

<script>
    import {Vue, Component} from "vue-property-decorator";
    import Parent from "@/components/Parent.vue";
    import GrandSon from "@/components/GrandSon.vue";

    @Component({
        "components": {
            Parent,
            GrandSon
        }
    })
    export default class About extends Vue {
        test = '王老五'

        name1 = "李四"

        name2 = "张三"
    }
</script>

