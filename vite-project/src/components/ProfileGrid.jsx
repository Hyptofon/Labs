import { Profile } from "./Profile"

export function ProfileGrid({ profiles, onAction }) {
    return (
        <div className="relative">
            {/* Section header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    <span className="gradient-text">Professional Network</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Connect with talented professionals from various companies and industries
                </p>
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 glass rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">{profiles.length} active professionals</span>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {profiles.map((user, index) => (
                    <div
                        key={user.id}
                        className="animate-float"
                        style={{
                            animationDelay: `${index * 0.2}s`,
                            animationDuration: `${6 + index * 0.5}s`,
                        }}
                    >
                        <Profile
                            id={user.id}
                            name={user.name}
                            username={user.username}
                            email={user.email}
                            address={user.address}
                            phone={user.phone}
                            website={user.website}
                            company={user.company}
                            onAction={onAction}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
