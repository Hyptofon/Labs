"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // useEffect потрібен лише для того, щоб рендерити компонент на клієнті
    // після того, як він був змонтований
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <button
            className="w-10 h-10 glass glass-hover rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "dark" ? (
                <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
                <MoonIcon className="w-5 h-5 text-blue-400" />
            )}
        </button>
    )
}