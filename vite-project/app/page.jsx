"use client"

import { useState } from "react"
import { ProfileGrid } from "../components/ProfileGrid"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { users } from "../data/users"

export default function HomePage() {
    const [profilesData, setProfilesData] = useState(users)

    const updateProfileStats = (id, type, increment) => {
        setProfilesData((prev) =>
            prev.map((user) => (user.id === id ? { ...user, [type]: user[type] + (increment ? 1 : -1) } : user)),
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-4 text-balance">React Profiles Lab</h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto text-pretty">
                        Інтерактивна галерея профілів розробників з можливістю лайків та зірок
                    </p>
                </div>

                <ProfileGrid profiles={profilesData} onUpdateStats={updateProfileStats} />
            </main>
            <Footer />
        </div>
    )
}
