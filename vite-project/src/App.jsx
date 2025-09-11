import { useState } from "react"
import "./App.css"

function App() {
    const [likes, setLikes] = useState(24)
    const [stars, setStars] = useState(156)
    const [isLiked, setIsLiked] = useState(false)
    const [isStarred, setIsStarred] = useState(false)

    const profile = {
        name: "Назарій Войтюк",
        role: "React Developer",
        avatar: import.meta.env.BASE_URL + "avatar.jpg",
        github: "https://github.com/Hyptofon/Labs",
    }

    const handleLike = () => {
        setIsLiked(prev => {
            const next = !prev
            setLikes(n => (next ? n + 1 : n - 1))
            return next
        })
    }

    const handleStar = () => {
        setIsStarred(prev => {
            const next = !prev
            setStars(n => (next ? n + 1 : n - 1))
            return next
        })
    }

    return (
        <main style={{
            minHeight: "100vh",
            background: "#111827",
            padding: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                width: "100%",
                maxWidth: 380,
                background: "#1f2937",
                border: "1px solid #374151",
                borderRadius: 12,
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}>
                <div style={{ textAlign: "center", padding: "24px 24px 12px" }}>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
                        <img
                            src={profile.avatar}
                            alt={profile.name}
                            onError={(e) => { e.currentTarget.src = "/vite.svg" }}
                            style={{ width: 96, height: 96, borderRadius: "9999px", objectFit: "cover" }}
                        />
                    </div>
                    <h2 style={{ color: "white", fontSize: 24, margin: 0 }}>{profile.name}</h2>
                    <div style={{ color: "#60a5fa", marginTop: 8, display: "flex", gap: 8, justifyContent: "center", alignItems: "center" }}>
                        <span style={{ fontSize: 12, fontWeight: 600 }}>{profile.role}</span>
                    </div>

                    {/* GitHub іконка */}
                    <div style={{ marginTop: 12 }}>
                        <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582
                0-.288-.01-1.05-.015-2.06-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73
                1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.774.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93
                0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.5
                11.5 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.649.242 2.873.118 3.176.77.84
                1.234 1.91 1.234 3.22 0 4.61-2.804 5.624-5.475 5.92.43.37.823 1.096.823 2.21
                0 1.595-.014 2.877-.014 3.268 0 .322.216.698.825.58C20.565 21.796 24 17.298 24 12c0-6.63-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div style={{ padding: 24 }}>
                    <div style={{ display: "flex", justifyContent: "center", gap: 32, marginBottom: 24 }}>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ color: "white", fontSize: 24, fontWeight: 700 }}>{likes}</div>
                            <div style={{ color: "#9ca3af", fontSize: 12 }}>Лайки</div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ color: "white", fontSize: 24, fontWeight: 700 }}>{stars}</div>
                            <div style={{ color: "#9ca3af", fontSize: 12 }}>Зірки</div>
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: 12 }}>
                        <button
                            onClick={handleLike}
                            style={{
                                flex: 1,
                                padding: "10px 12px",
                                borderRadius: 8,
                                border: `1px solid ${isLiked ? "#dc2626" : "#4b5563"}`,
                                background: isLiked ? "#dc2626" : "#1f2937",
                                color: "white",
                                cursor: "pointer"
                            }}
                        >
                            {isLiked ? "❤️" : "🤍"} Лайк
                        </button>

                        <button
                            onClick={handleStar}
                            style={{
                                flex: 1,
                                padding: "10px 12px",
                                borderRadius: 8,
                                border: `1px solid ${isStarred ? "#ca8a04" : "#4b5563"}`,
                                background: isStarred ? "#ca8a04" : "#1f2937",
                                color: "white",
                                cursor: "pointer"
                            }}
                        >
                            {isStarred ? "★" : "☆"} Зірка
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default App
