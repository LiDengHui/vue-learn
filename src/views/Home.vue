<template>
    <div class="home">
        <Form></Form>
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
    import Form from "@/components/Form.vue";
    import {withPromise, request} from "@/components/withPromise"
    import {view } from '@/components/view'
    const hoc = withPromise(view,request);

    export default {
        name: "Home",
        components: {
            Form,
            hoc
        },
        filters: {
            getStyle: item => {
                return {
                    height: item.height + "px"
                };
            }
        },
        directives: {
            style: {
                inserted(el, binding) {
                    el.setAttribute("style", binding.value);
                },
                updated(el, binding) {
                    console.dir(binding);
                }
            }
        },
        data() {
            return {
                item: {
                    height: 10
                }
            };
        },
        methods: {
            // getStyle: item => {
            //   return {
            //     height: item.height + "px"
            //   };
            // }
        }
    };
</script>
<style lang="less">
.is-directive {
    background: #ccc;
}
</style>
