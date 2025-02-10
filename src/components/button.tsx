import { Component } from "mithril";

interface ButtonAttrs {
    label: string;
    onclick: () => void;
}

// Reusable Button component (subcomponent)
const Button: Component<ButtonAttrs> = {
    view({ attrs: { label, onclick } }) {
        return (
            <button
                onclick={onclick}
                class="px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
                {label}
            </button>
        );
    },
};

export default Button;
