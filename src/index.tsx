import m from "mithril";
import Welcome from "./pages/welcome.tsx";

const appElement = document.getElementById("app");

if (appElement) {
    m.mount(appElement, Welcome);
}
