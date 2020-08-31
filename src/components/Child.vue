<template>
    <div class="domain">
        <h2>Child</h2>
        <GrandSon></GrandSon>
    </div>
</template>
<script>

    import {Vue,Component} from "vue-property-decorator";

    import GrandSon from './GrandSon.vue';

    @Component({
        components: {
            GrandSon
        }
    })
    export default class Child extends Vue{

    }
</script>