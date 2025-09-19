export function LoadingSpinner() {
    return (
        <div className="flex flex-col items-center justify-center space-y-6">
            <div className="relative">
                <div className="w-20 h-20 border-4 border-border/50 border-t-primary rounded-full animate-spin"></div>
                <div
                    className="absolute inset-2 w-16 h-16 border-4 border-transparent border-r-accent rounded-full animate-spin"
                    style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
                ></div>
                <div
                    className="absolute inset-4 w-12 h-12 border-4 border-transparent border-b-primary rounded-full animate-spin"
                    style={{ animationDuration: "2s" }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
                </div>
            </div>
            <div className="text-center space-y-2">
                <h3 className="text-xl font-bold gradient-text animate-pulse">
                    Завантаження профілів...
                </h3>

                <p className="text-muted-foreground">Отримуємо дані з сервера</p>

                {/* Крапки, що скачуть */}
                <div className="flex justify-center space-x-1 mt-4">
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
            </div>
        </div>
    );
}