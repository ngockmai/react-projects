import React from "react";
import ProfileCard from "./ProfileCard";

export default function ProfileList({users}) {
    return(
        <div>
            {users.map((user) => (
                <ProfileCard 
                    key={user.id}
                    user={user}
                    skills={user.skills}
                >
                <p>Custom bio for {user.name}!</p>
                </ProfileCard>
            ))}
            
        </div>
    )
}