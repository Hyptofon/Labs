import { ThemeToggle } from "./ThemeToggle"

export function Header() {
    return (
        <header className="relative overflow-hidden">
            {/* Background with grid pattern */}
            <div className="absolute inset-0 grid-pattern opacity-30"></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>

            <div className="absolute top-4 right-4 z-10">
                <ThemeToggle />
            </div>

            <div className="relative container mx-auto px-6 py-16">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-pulse-glow">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        {/* Зміни text-muted-foreground на text-foreground, щоб він був помітнішим */}
                        <span className="text-sm font-medium text-foreground">Лабораторна робота 2</span>
                    </div>

                    {/* Main heading */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="gradient-text animate-gradient">React Profiles</span>
                        <br />
                        <span className="text-foreground">Laboratory</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto text-balance leading-relaxed">
                        Інтерактивна галерея профілів розробників
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="group relative px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold transition-all duration-300 glow-hover">
                            <span className="relative z-10">Переглянути профілі</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                        </button>

                        <button className="group px-8 py-4 glass glass-hover rounded-xl font-semibold transition-all duration-300">
              <span className="flex items-center gap-2">
                <svg
                    className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Дізнатися більше
              </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
            <div
                className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float"
                style={{ animationDelay: "2s" }}
            ></div>
        </header>
    )
}