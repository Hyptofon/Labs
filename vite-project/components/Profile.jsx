"use client"

import { useState } from "react"
import { GitHubIcon } from "./icons/GitHubIcon"
import { HeartIcon } from "./icons/HeartIcon"
import { StarIcon } from "./icons/StarIcon"

export function Profile({ id, name, role, avatarUrl, github, likes, stars, onUpdateStats }) {
    const [isLiked, setIsLiked] = useState(false)
    const [isStarred, setIsStarred] = useState(false)

    const handleLike = () => {
        setIsLiked(!isLiked)
        onUpdateStats(id, "likes", !isLiked)
    }

    const handleStar = () => {
        setIsStarred(!isStarred)
        onUpdateStats(id, "stars", !isStarred)
    }

    return (
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
            <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative mb-4">
                    <img
                        src={avatarUrl || "/placeholder.svg"}
                        alt={`${name} avatar`}
                        className="w-20 h-20 rounded-full object-cover border-2 border-gray-600 group-hover:border-blue-400 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Name and Role */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                    {name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{role}</p>

                {/* GitHub Link - Centered */}
                <div className="flex justify-center mb-6">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-300 hover:scale-110 transform"
                        aria-label={`${name}'s GitHub profile`}
                    >
                        <GitHubIcon className="w-5 h-5 text-gray-300 hover:text-white transition-colors duration-300" />
                    </a>
                </div>

                {/* Stats and Actions */}
                <div className="flex items-center justify-between w-full">
                    <button
                        onClick={handleLike}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                            isLiked
                                ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                                : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-red-400"
                        }`}
                    >
                        <HeartIcon className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                        <span className="text-sm font-medium">{likes}</span>
                    </button>

                    <button
                        onClick={handleStar}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                            isStarred
                                ? "bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30"
                                : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-yellow-400"
                        }`}
                    >
                        <StarIcon className={`w-4 h-4 ${isStarred ? "fill-current" : ""}`} />
                        <span className="text-sm font-medium">{stars}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
