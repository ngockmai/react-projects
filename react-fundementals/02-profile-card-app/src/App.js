import React from "react";
import './App.css'
import ProfileList from "./ProfileList";

export default function App(){

  const users = [
    {
      id: 1,
      name: 'Alice',
      age: 25,
      isActive: true,
      skills: ['React', 'JavaScript', 'CSS'],
    },
    {
      id: 2,
      name: 'Bob',
      age: 30,
      isActive: false,
      skills: ['Python', 'Django', 'SQL'],
    },
  ];
  return (
    <div className="App">
      <h1>User Profile</h1>
      <ProfileList users={users} />
    </div>
  )
}