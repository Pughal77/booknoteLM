import { Component } from "mithril";
import Button from "../components/button.tsx";
import "../styles/app.css";

// Primary layout component
const Welcome: Component = {
    view: () => (
        <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col">
            <header class="container mx-auto px-4 py-6">
                <nav class="flex justify-between items-center">
                    <h1 class="text-2xl font-bold text-white">BrandLogo</h1>
                    <button class="text-gray-300 hover:text-white transition-colors">
                        Menu
                    </button>
                </nav>
            </header>

            <main class="flex-1 flex items-center">
                <div class="container mx-auto px-4 text-center">
                    <div class="max-w-3xl mx-auto">
                        <h2 class="text-5xl font-bold text-white mb-6 leading-tight">
                            Welcome to Our Platform
                        </h2>
                        <p class="text-xl text-gray-300 mb-8">
                            Discover new possibilities with our innovative
                            solution
                        </p>
                        <Button
                            label="Get Started"
                            onclick={() => console.log("CTA clicked")}
                        />
                    </div>
                </div>
            </main>

            <footer class="bg-black bg-opacity-20 py-6">
                <div class="container mx-auto px-4 text-center text-gray-400">
                    <p>© 2025 Your Company. All rights reserved.</p>
                </div>
            </footer>
        </div>
    ),
};

export default Welcome;
