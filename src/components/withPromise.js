export const withPromise = (wrapped, promiseFn) => {
    return {
        name: "with-promise",
        data() {
            return {
                loading: false,
                error: false,
                result: {}
            };
        },
        methods: {
            async request() {
                this.loading = true;
                const { requestParams } = this.$refs.wrapped;
                const result = await promiseFn(requestParams);
                this.loading = false;
                this.result = result;
            }
        },
        async mounted() {
            this.$refs.wrapped.$watch(
                "requestParams",
                this.request.bind(this),
                {
                    immediate: true
                }
            );
        },

        render(h) {
            const args = {
                props: {
                    ...this.$attrs,
                    result: this.result,
                    loading: this.loading
                },
                ref: "wrapped",
                on: this.$liseners,
                scopedSlots: this.$scopedSlots
            };

            const wrapper = h("div", [
                this.loading ? h("span", ["加载中"]) : null,
                this.error ? h("span", ["加载错误"]) : null,
                h(wrapped, args)
            ]);
            return wrapper;
        }
    };
};

export const request = (params) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(params);
        }, 1000);
    });
};
