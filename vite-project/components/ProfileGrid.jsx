import { Profile } from "./Profile"

export function ProfileGrid({ profiles, onUpdateStats }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {profiles.map((user) => (
                <Profile
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    role={user.role}
                    avatarUrl={user.avatarUrl}
                    github={user.github}
                    likes={user.likes}
                    stars={user.stars}
                    onUpdateStats={onUpdateStats}
                />
            ))}
        </div>
    )
}
