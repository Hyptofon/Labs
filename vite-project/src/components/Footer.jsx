export function Footer() {
    return (
        <footer className="relative mt-32 py-16 border-t border-border/50">
            {/* Background pattern */}
            <div className="absolute inset-0 grid-pattern opacity-20"></div>

            <div className="relative container mx-auto px-6">
                <div className="text-center">
                    {/* Logo/Brand */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold gradient-text mb-2">React Profiles Lab</h3>
                        <p className="text-muted-foreground">Створено з ❤️ від Войтюка Назарія</p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <a href="https://github.com/Hyptofon" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                            Про проект
                        </a>
                        <a href="https://github.com/Hyptofon" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                            Технології
                        </a>
                        <a href="https://github.com/Hyptofon" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                            GitHub
                        </a>
                        <a href="https://github.com/Hyptofon" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                            Контакти
                        </a>
                    </div>

                    {/* Social links */}
                    <div className="flex justify-center gap-4 mb-8">
                        {["github", "linkedin", "twitter"].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="w-10 h-10 glass glass-hover rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <div className="w-5 h-5 bg-muted-foreground rounded"></div>
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="pt-8 border-t border-border/30">
                        <p className="text-sm text-muted-foreground">© 2025 React Profiles Lab. Всі права захищені.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
