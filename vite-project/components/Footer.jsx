export function Footer() {
    return (
        <footer className="bg-gray-800/50 backdrop-blur-sm border-t border-gray-700 mt-16">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <p className="text-gray-400 mb-4 text-lg">Познайомтеся з нашою командою талановитих розробників</p>
                    <div className="flex items-center justify-center space-x-2 text-gray-500">
                        <span>© 2024 React Profiles Lab. Створено з</span>
                        <span className="text-red-500 text-xl">❤️</span>
                        <span>використовуючи React + Vite</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
