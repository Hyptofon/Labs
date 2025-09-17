"use client"

import { useState } from "react"

function Profile({ name, role, avatarUrl, github }) {
    const [likes, setLikes] = useState(Math.floor(Math.random() * 50) + 10)
    const [stars, setStars] = useState(Math.floor(Math.random() * 30) + 5)
    const [isLiked, setIsLiked] = useState(false)
    const [isStarred, setIsStarred] = useState(false)

    const handleLike = () => {
        setIsLiked(!isLiked)
        setLikes((prev) => (isLiked ? prev - 1 : prev + 1))
    }

    const handleStar = () => {
        setIsStarred(!isStarred)
        setStars((prev) => (isStarred ? prev - 1 : prev + 1))
    }

    return (
        <div
            style={{
                background: "rgba(30, 41, 59, 0.8)",
                borderRadius: "16px",
                padding: "32px",
                textAlign: "center",
                border: "1px solid rgba(148, 163, 184, 0.1)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                width: "100%",
                maxWidth: "380px",
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-8px)"
                e.target.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3)"
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)"
                e.target.style.boxShadow = "none"
            }}
        >
            <img
                src={avatarUrl || "/placeholder.svg"}
                alt={name}
                style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    marginBottom: "16px",
                    border: "3px solid rgba(96, 165, 250, 0.3)",
                }}
            />
            <h3
                style={{
                    color: "white",
                    fontSize: "1.5rem",
                    margin: "0 0 8px 0",
                    fontWeight: 600,
                }}
            >
                {name}
            </h3>
            <p
                style={{
                    color: "#94a3b8",
                    fontSize: "1rem",
                    margin: "0 0 20px 0",
                }}
            >
                {role}
            </p>

            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: "inline-block",
                    marginBottom: "20px",
                    color: "#60a5fa",
                    textDecoration: "none",
                }}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            </a>

            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                <button
                    onClick={handleLike}
                    style={{
                        background: "none",
                        border: "none",
                        color: isLiked ? "#ef4444" : "#6b7280",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "0.9rem",
                        transition: "color 0.2s ease",
                    }}
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={isLiked ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    {likes}
                </button>

                <button
                    onClick={handleStar}
                    style={{
                        background: "none",
                        border: "none",
                        color: isStarred ? "#fbbf24" : "#6b7280",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "0.9rem",
                        transition: "color 0.2s ease",
                    }}
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill={isStarred ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                    </svg>
                    {stars}
                </button>
            </div>
        </div>
    )
}

export default Profile
