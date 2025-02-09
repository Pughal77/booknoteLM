import m from "mithril";

const HelloWorld: m.Component = {
    view: () => <div>Hello, World!</div>,
};

const appElement = document.getElementById("app");

if (appElement) {
    m.mount(appElement, HelloWorld);
}
