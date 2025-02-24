// Start.tsx
import m from "mithril";

const Start: m.Component = {
    view: () => (
        <div class="min-h-screen bg-white dark:bg-gray-900">
            {/* Navigation Header */}
            <nav class="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                <div class="flex items-center space-x-4">
                    <svg
                        class="w-8 h-8 text-blue-600"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                    <div class="hidden md:flex space-x-6">
                        <a
                            href="#features"
                            class="text-gray-600 dark:text-gray-300 hover:text-blue-600"
                        >
                            Features
                        </a>
                        <a
                            href="#docs"
                            class="text-gray-600 dark:text-gray-300 hover:text-blue-600"
                        >
                            Documentation
                        </a>
                        <a
                            href="#pricing"
                            class="text-gray-600 dark:text-gray-300 hover:text-blue-600"
                        >
                            Pricing
                        </a>
                    </div>
                </div>
                <button class="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                    Sign in
                </button>
            </nav>

            {/* Hero Section */}
            <main class="max-w-6xl px-4 mx-auto mt-16">
                <div class="text-center">
                    <h1 class="text-5xl font-bold text-gray-900 dark:text-white">
                        Your AI-Powered Research Assistant
                    </h1>
                    <p class="mt-4 text-xl text-gray-600 dark:text-gray-300">
                        Organize, analyze, and generate insights from your
                        documents
                    </p>

                    <div class="mt-8">
                        <button class="px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Feature Grid */}
                <div class="grid gap-8 mt-16 md:grid-cols-3">
                    {[
                        "Smart Summarization",
                        "Source Linking",
                        "Real-time Collaboration",
                    ].map((feature) => (
                        <div class="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <div class="w-12 h-12 mb-4 text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900/30">
                                <svg
                                    class="w-6 h-6 m-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                            </div>
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                {feature}
                            </h3>
                            <p class="mt-2 text-gray-600 dark:text-gray-400">
                                Automated analysis and connection of related
                                concepts across documents
                            </p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    ),
};

export default Start;
