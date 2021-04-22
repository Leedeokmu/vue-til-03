import ListView from "@/views/ListView";

export default function createListView(name) {
    return {
        // 재사용할 인스턴스 옵션들
        name,
        // render: h => h(App),
        render(createElement) {
            return createElement(ListView);
        },
    };
};