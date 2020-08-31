export const view = {
    name: "view",
    props: {
        result: {
            type: Object
        }
    },
    data() {
        return {
            requestParams: {
                name: "ssh"
            }
        };
    },
    methods: {
        reload() {
            this.requestParams = {
                name: "changed!!"
            };
        }
    },
    render(h) {
        return h("span", [
            h("span", this.result?.name),
            this.$scopedSlots.default(),
            this.$scopedSlots.named(),
            h(
                "button",
                {
                    on: {
                        click: this.reload
                    }
                },
                ["重新加载数据"]
            )
        ]);
    }
};
