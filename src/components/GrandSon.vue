<template>
    <div class="domain">
        <h2>GrandSon</h2>
        <div>
            {{ model.name }}
        </div>
    </div>
</template>
<script>

    import {Vue, Component, InjectReactive} from "vue-property-decorator";

    @Component({})
    export default class GrandSon extends Vue {
        @InjectReactive()
        model
    }
</script>