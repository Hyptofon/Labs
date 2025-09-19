"use client"

import { useState } from "react"
import { HeartIcon } from "./icons/HeartIcon"
import { StarIcon } from "./icons/StarIcon"
import { GitHubIcon } from "./icons/GitHubIcon"


export function Profile({ id, name, username, email, address, phone, website, company, onAction }) {
    const [isLiked, setIsLiked] = useState(false)
    const [isBookmarked, setIsBookmarked] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const getInitials = (name) => {
        return name
            .split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)
    }

    const getAvatarColor = (name) => {
        const colors = [
            "bg-blue-500",
            "bg-green-500",
            "bg-purple-500",
            "bg-pink-500",
            "bg-indigo-500",
            "bg-yellow-500",
            "bg-red-500",
            "bg-teal-500",
            "bg-orange-500",
            "bg-cyan-500",
        ]

        let hash = 0
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash)
        }

        return colors[Math.abs(hash) % colors.length]
    }

    const handleLike = () => {
        setIsLiked(!isLiked)
        onAction?.(id, "like")
    }

    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked)
        onAction?.(id, "bookmark")
    }

    return (
        <div
            className="group relative glass glass-hover rounded-2xl p-8 transition-all duration-500 hover:scale-105 glow-hover"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Avatar with glow effect */}
                <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative border-4 border-white rounded-full shadow-lg group-hover:border-primary/30 transition-all duration-300">
                        <div
                            className={`${getAvatarColor(name)} rounded-full flex items-center justify-center text-white font-bold text-2xl`}
                            style={{ width: 112, height: 112 }}
                        >
                            {getInitials(name)}
                        </div>
                    </div>

                    {/* Status indicator */}
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                </div>

                {/* Name and username */}
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:gradient-text transition-all duration-300">
                    {name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 font-medium">@{username}</p>

                {company && (
                    <div className="mb-4 p-3 glass rounded-xl w-full">
                        <div className="text-sm font-semibold text-foreground mb-1">{company.name}</div>
                        <div className="text-xs text-muted-foreground italic">{company.catchPhrase}</div>
                    </div>
                )}

                <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-xs w-full">
                    <div className="flex items-center gap-1 px-3 py-1 glass rounded-full">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        <span className="text-muted-foreground truncate max-w-[120px]">{email}</span>
                    </div>

                    {phone && (
                        <div className="flex items-center gap-1 px-3 py-1 glass rounded-full">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <span className="text-muted-foreground">{phone}</span>
                        </div>
                    )}
                </div>

                {address && (
                    <div className="mb-6 w-full">
                        <div className="flex items-center gap-1 px-3 py-2 glass rounded-xl justify-center">
                            <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <div className="text-center">
                                <div className="text-sm text-foreground">
                                    {address.street}, {address.suite}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    {address.city}, {address.zipcode}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {website && (
                    <div className="mb-6">
                        <a
                            href={`https://${website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 glass glass-hover rounded-xl group/website transition-all duration-300 hover:scale-105"
                        >
                            <GitHubIcon className="w-4 h-4" />
                            <span className="text-sm text-muted-foreground group-hover/website:text-foreground transition-colors">
                {website}
              </span>
                        </a>
                    </div>
                )}

                {company?.bs && (
                    <div className="mb-6 w-full">
                        <div className="px-4 py-2 bg-accent/10 rounded-xl border border-accent/20">
                            <div className="text-xs font-medium text-foreground">Specializes in:</div>
                            <div className="text-sm text-muted-foreground">{company.bs}</div>
                        </div>
                    </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between w-full gap-4">
                    {/* Like button */}
                    <button
                        onClick={handleLike}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 flex-1 justify-center ${
                            isLiked
                                ? "bg-red-500/20 text-red-400 hover:bg-red-500/30 glow"
                                : "glass glass-hover text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        <HeartIcon
                            className={`w-5 h-5 transition-all duration-300 ${isLiked ? "scale-110 fill-current" : "group-hover:scale-110"}`}
                        />
                        <span className="font-semibold">Like</span>
                    </button>

                    {/* Bookmark button */}
                    <button
                        onClick={handleBookmark}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 flex-1 justify-center ${
                            isBookmarked
                                ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 glow"
                                : "glass glass-hover text-muted-foreground hover:text-foreground"
                        }`}
                    >
                        <StarIcon
                            className={`w-5 h-5 transition-all duration-300 ${isBookmarked ? "scale-110 fill-current" : "group-hover:scale-110"}`}
                        />
                        <span className="font-semibold">Save</span>
                    </button>
                </div>
            </div>

            {/* Hover effect particles */}
            {isHovered && (
                <>
                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
                    <div
                        className="absolute bottom-4 left-4 w-1 h-1 bg-accent rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                    ></div>
                </>
            )}
        </div>
    )
}
