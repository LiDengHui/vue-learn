<template>
    <div class="hoc">
        <hoc msg="msg" @change="onChange">
            <template>
                <div>I am slot</div>
            </template>
            <template v-slot:named>
                <div>I am named slot</div>
            </template>
        </hoc>
    </div>
</template>

<script>
    import {withPromise, request} from "@/components/withPromise"
    import {view } from '@/components/view'
    const hoc = withPromise(view,request);

    export default {
        name: "Home",
        components: {
            hoc
        },
        methods: {
            onChange(...args) {
                console.log(args)
            }
        }
    };
</script>
<style lang="less">
.is-directive {
    background: #ccc;
}
</style>
