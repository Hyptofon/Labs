"use client"

import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { ProfileGrid } from "./components/ProfileGrid"
import { Footer } from "./components/Footer"
import { LoadingSpinner } from "./components/LoadingSpinner"
import usersData from "./data/users.json"

function App() {
    const [profilesData, setProfilesData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                setLoading(true)
                setError(null)

                await new Promise((resolve) => setTimeout(resolve, 2000))

                const usersWithAvatars = usersData.map((user) => ({
                    ...user,
                }))

                setProfilesData(usersWithAvatars)
            } catch (err) {
                setError(err.message)
                console.error("Loading error:", err)
            } finally {
                setLoading(false)
            }
        }

        fetchProfiles()
    }, [])

    const handleProfileAction = (id, action) => {
        console.log(`Action ${action} completed for user ${id}`)
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
                <LoadingSpinner />
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-red-400 mb-4">Loading Error</h2>
                    <p className="text-muted-foreground mb-6">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Updated background for light theme */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
            </div>

            {/* Content */}
            <Header />

            <main className="container mx-auto px-6 py-16">
                <ProfileGrid profiles={profilesData} onAction={handleProfileAction} />
            </main>

            <Footer />
        </div>
    )
}

export default App
