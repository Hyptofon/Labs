"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

//cтворює простий компонент-обгортку для NextThemesProvider, який дозволяє тобі використовувати його в кореневому макеті (layout.jsx).