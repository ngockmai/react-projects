import React from "react"

export default function ProfileCard({user, skills, children}){
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px', borderRadius: '5px' }}>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>Status: {user.isActive ? 'Active' : 'Inactive'}</p>
            <h3>Skills:</h3>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <div>{children}</div>
        </div>
    )
}