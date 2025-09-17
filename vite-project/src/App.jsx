import Profile from "./components/Profile"
import { users } from "./data/users"
import "./App.css"

function App() {
    return (
        <main
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                padding: "40px 20px",
            }}
        >
            <div
                style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                }}
            >
                <header
                    style={{
                        textAlign: "center",
                        marginBottom: "48px",
                    }}
                >
                    <h1
                        style={{
                            color: "white",
                            fontSize: "3rem",
                            margin: "0 0 16px 0",
                            fontWeight: 700,
                            background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Команда Розробників
                    </h1>
                    <p
                        style={{
                            color: "#94a3b8",
                            fontSize: "1.2rem",
                            margin: 0,
                            maxWidth: "600px",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        Познайомтеся з нашою командою талановитих розробників
                    </p>
                </header>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
                        gap: "32px",
                        justifyItems: "center",
                    }}
                >
                    {users.map((user) => (
                        <Profile key={user.id} name={user.name} role={user.role} avatarUrl={user.avatarUrl} github={user.github} />
                    ))}
                </div>

                <footer
                    style={{
                        textAlign: "center",
                        marginTop: "64px",
                        padding: "32px 0",
                        borderTop: "1px solid #374151",
                    }}
                >
                    <p
                        style={{
                            color: "#6b7280",
                            fontSize: "0.9rem",
                            margin: 0,
                        }}
                    >
                        © 2024 React Profiles Lab. Створено з ❤️ використовуючи React + Vite
                    </p>
                </footer>
            </div>
        </main>
    )
}

export default App
