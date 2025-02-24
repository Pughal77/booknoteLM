import m from "mithril";
import Welcome from "./pages/welcome.tsx";
import start from "./pages/start.tsx";
import booknote from "./pages/booknote.tsx";

const appElement = document.getElementById("app");

if (appElement) {
    m.route(appElement, "/", {
        "/": Welcome,
        "/start": start,
        "/booknote": booknote,
    });
}
